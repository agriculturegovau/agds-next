import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderProgressIndicator(props: ProgressIndicatorProps) {
	return render(<ProgressIndicator {...props} />);
}

describe('ProgressIndicator', () => {
	describe('With anchors', () => {
		const exampleProps: ProgressIndicatorProps = {
			items: [
				{ href: '#', label: 'Introduction', status: 'done' },
				{ href: '#', label: 'Business Contacts', status: 'doing' },
				{ href: '#', label: 'Case Studies', status: 'todo' },
			],
		};
		it('renders correctly', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'no-inline-style': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
	describe('With buttons', () => {
		const exampleProps: ProgressIndicatorProps = {
			items: [
				{
					onClick: console.log,
					label: 'Introduction',
					status: 'done',
				},
				{
					onClick: console.log,
					label: 'Business Contacts',
					status: 'doing',
				},
				{
					onClick: console.log,
					label: 'Case Studies',
					status: 'todo',
				},
			],
		};
		it('renders correctly', () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderProgressIndicator(exampleProps);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'no-inline-style': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
