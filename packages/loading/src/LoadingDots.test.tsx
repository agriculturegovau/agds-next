import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { LoadingDots, LoadingDotsProps } from './LoadingDots';

function LoadingDotsExample(props: LoadingDotsProps) {
	return <LoadingDots data-testid="example" label="Busy" {...props} />;
}

describe('LoadingDots', () => {
	it('renders correctly with minimal props', () => {
		render(<LoadingDotsExample />);
		const el = screen.getByTestId('example');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('SPAN');
		expect(el).toHaveAccessibleName('Busy');
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<LoadingDotsExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
	it('renders a valid HTML structure with role="status"', () => {
		const { container } = render(<LoadingDotsExample role="status" />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
});
