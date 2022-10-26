import '@testing-library/jest-dom';
import 'html-validate/jest';
import { FormStack } from '../../form-stack/src';
import { TextInput } from '../../text-input/src';
import { H1 } from '../../heading/src';
import { Text } from '../../text/src';
import { cleanup, render, screen } from '../../../../../../test-utils';
import { Fieldset } from './Fieldset';

afterEach(cleanup);

function FieldsetBasic() {
	return (
		<Fieldset
			legend="What is your name?"
			hint="We will only use this to respond to your requests"
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
			legend={<H1>What is your name?</H1>}
			hint={
				<Text fontSize="md" color="muted">
					We will only use this to respond to your requests
				</Text>
			}
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

		it('renders a valid HTML structure', () => {
			const { container } = render(<FieldsetBasic />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
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
		it('renders a valid HTML structure', () => {
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
