import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { FormStack } from '../form-stack';
import { TextInput } from '../text-input';
import { H1 } from '../heading';
import { Text } from '../text';
import { cleanup, render, screen } from '../../../../test-utils';
import { Fieldset } from './Fieldset';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function FieldsetBasic() {
	return (
		<Fieldset
			hint="We will only use this to respond to your requests"
			legend="What is your name?"
		>
			<FormStack>
				<TextInput label="First name" required />
				<TextInput label="Last name" required />
			</FormStack>
		</Fieldset>
	);
}

function FieldsetLegendAsPageHeading() {
	return (
		<Fieldset
			hint={
				<Text color="muted" fontSize="md">
					We will only use this to respond to your requests
				</Text>
			}
			legend={<H1>What is your name?</H1>}
		>
			<FormStack>
				<TextInput label="First name" required />
				<TextInput label="Last name" required />
			</FormStack>
		</Fieldset>
	);
}

describe('Fieldset', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = render(<FieldsetBasic />);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<FieldsetBasic />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('has correct aria attributes', async () => {
			render(<FieldsetBasic />);
			const fieldset = document.querySelector('fieldset');
			const hintEl = await screen.getByText(
				'We will only use this to respond to your requests'
			);
			expect(fieldset).toHaveAttribute('aria-describedby', hintEl.id);
		});
	});

	describe('Legend as page heading', () => {
		it('renders correctly', () => {
			const { container } = render(<FieldsetLegendAsPageHeading />);
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<FieldsetLegendAsPageHeading />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});
});
