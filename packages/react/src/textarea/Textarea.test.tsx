import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Textarea, TextareaProps } from './Textarea';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTextarea(props: TextareaProps) {
	return render(<Textarea {...props} />);
}

describe('Textarea', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderTextarea({ label: 'Message' });
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderTextarea({ label: 'Message' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderTextarea({
				label: 'Message',
				hint: 'Hint text',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderTextarea({
				label: 'Message',
				hint: 'Hint text',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('Invalid', () => {
		it('renders correctly', () => {
			const { container } = renderTextarea({
				label: 'Message',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderTextarea({
				label: 'Message',
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
