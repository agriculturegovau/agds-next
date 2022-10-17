import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '@testing-library/react';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';

afterEach(cleanup);

function renderProgressIndicator(props: ProgressIndicatorProps) {
	return render(<ProgressIndicator {...props} />);
}

describe('ProgressIndicator', () => {
	describe('With anchors', () => {
		const exampleProps = {
			items: [
				{ href: '#', label: 'Introduction', status: 'done' as const },
				{ href: '#', label: 'Business Contacts', status: 'doing' as const },
				{ href: '#', label: 'Case Studies', status: 'todo' as const },
			],
		};
		it('renders correctly', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'no-inline-style': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});
	describe('With buttons', () => {
		const exampleProps = {
			items: [
				{
					onClick: console.log,
					label: 'Introduction',
					status: 'done' as const,
				},
				{
					onClick: console.log,
					label: 'Business Contacts',
					status: 'doing' as const,
				},
				{
					onClick: console.log,
					label: 'Case Studies',
					status: 'todo' as const,
				},
			],
		};
		it('renders correctly', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'no-inline-style': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});
});
