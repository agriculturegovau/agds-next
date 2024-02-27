import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemStatus,
} from './ProgressIndicatorItem';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderProgressIndicator(props: ProgressIndicatorProps) {
	return render(<ProgressIndicator {...props} />);
}

describe('ProgressIndicator', () => {
	describe('With anchors', () => {
		const exampleProps: ProgressIndicatorProps = {
			items: [
				{ href: '#', label: 'Done', status: 'done' },
				{ href: '#', label: 'Blocked', status: 'blocked' },
				{ href: '#', label: 'Doing', status: 'doing' },
				{ href: '#', label: 'Error', status: 'error' },
				{ href: '#', label: 'Saved', status: 'saved' },
				{ href: '#', label: 'Started', status: 'started' },
				{ href: '#', label: 'To do', status: 'todo' },
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
					label: 'Done',
					status: 'done',
				},
				{
					onClick: console.log,
					label: 'Blocked',
					status: 'blocked',
				},
				{
					onClick: console.log,
					label: 'Doing',
					status: 'doing',
				},
				{
					onClick: console.log,
					label: 'Error',
					status: 'error',
				},
				{
					onClick: console.log,
					label: 'Saved',
					status: 'saved',
				},
				{
					onClick: console.log,
					label: 'Started',
					status: 'started',
				},
				{
					onClick: console.log,
					label: 'To do',
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
	describe('With custom active item', () => {
		function createList(
			activeStatus: ProgressIndicatorItemStatus,
			extraProperties: Partial<ProgressIndicatorItem>
		): ProgressIndicatorProps {
			return {
				items: [
					{
						...extraProperties,
						label: 'Done',
						status: 'done',
						isActive: activeStatus === 'done',
					},
					{
						...extraProperties,
						label: 'Blocked',
						status: 'blocked',
						isActive: activeStatus === 'blocked',
					},
					{
						...extraProperties,
						label: 'Doing',
						status: 'doing',
						isActive: activeStatus === 'doing',
					},
					{
						...extraProperties,
						label: 'Error',
						status: 'error',
						isActive: activeStatus === 'error',
					},
					{
						...extraProperties,
						label: 'Saved',
						status: 'saved',
						isActive: activeStatus === 'saved',
					},
					{
						...extraProperties,
						label: 'Started',
						status: 'started',
						isActive: activeStatus === 'started',
					},
					{
						...extraProperties,
						label: 'To do',
						status: 'todo',
						isActive: activeStatus === 'todo',
					},
				],
			};
		}

		describe('blocked status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('blocked', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('blocked', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});

		describe('doing status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('doing', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('doing', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});
		describe('done status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('done', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('done', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});
		describe('error status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('error', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('error', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});
		describe('saved status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('saved', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('saved', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});
		describe('started status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('started', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('started', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});
		describe('todo status active', () => {
			it('renders active link', () => {
				const { container } = renderProgressIndicator(
					createList('todo', { href: '#' })
				);
				expect(container).toMatchSnapshot();
			});
			it('renders active button', () => {
				const { container } = renderProgressIndicator(
					createList('todo', { onClick: console.log })
				);
				expect(container).toMatchSnapshot();
			});
		});

		describe('renders valid HTML with no a11y violations', () => {
			it('renders valid active link', async () => {
				const { container } = renderProgressIndicator(
					createList('done', { href: '#' })
				);
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
			it('renders valid active button', async () => {
				const { container } = renderProgressIndicator(
					createList('done', { onClick: console.log })
				);
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
});
