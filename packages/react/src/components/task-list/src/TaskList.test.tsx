import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../../../../test-utils';
import { TaskList, TaskListProps } from './TaskList';

afterEach(cleanup);

function renderTaskList(props: TaskListProps) {
	return render(<TaskList {...props} />);
}

describe('TaskList', () => {
	describe('With anchors', () => {
		const exampleProps = {
			items: [
				{ href: '#', label: 'Check eligibility', status: 'done' as const },
				{
					href: '#',
					label: 'Lorem ipsum dolor sit amet',
					status: 'done' as const,
				},
				{ href: '#', label: 'Case Studies', status: 'doing' as const },
				{
					href: '#',
					label: 'Review and submit',
					message: 'Not available until previous tasks are done',
					status: 'todo' as const,
				},
			],
		};
		it('renders correctly', () => {
			const { container } = renderTaskList(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderTaskList(exampleProps);
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
					label: 'Check eligibility',
					status: 'done' as const,
				},
				{
					onClick: console.log,
					label: 'Lorem ipsum dolor sit amet',
					status: 'done' as const,
				},
				{
					onClick: console.log,
					label: 'Case Studies',
					status: 'doing' as const,
				},
				{
					onClick: console.log,
					label: 'Review and submit',
					message: 'Not available until previous tasks are done',
					status: 'todo' as const,
				},
			],
		};
		it('renders correctly', () => {
			const { container } = renderTaskList(exampleProps);
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderTaskList(exampleProps);
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
