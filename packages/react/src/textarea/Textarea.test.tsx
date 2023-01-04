import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Textarea, TextareaProps } from './Textarea';

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
		it('renders a valid HTML structure', () => {
			const { container } = renderTextarea({ label: 'Message' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
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
		it('renders a valid HTML structure', () => {
			const { container } = renderTextarea({
				label: 'Message',
				hint: 'Hint text',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
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

		it('renders a valid HTML structure', () => {
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
		});
	});
});
