import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { Text } from '../text';
import { cleanup, render, screen } from '../../../../test-utils';
import { Tags, TagsProps } from './Tags';

afterEach(cleanup);

function renderTags(props: TagsProps) {
	return render(<Tags {...props} />);
}

describe('Tags', () => {
	describe('With links', () => {
		it('renders correctly', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [
					{ href: '#', label: 'Foo' },
					{ href: '#', label: 'Bar' },
					{ href: '#', label: 'Baz' },
				],
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [
					{ href: '#', label: 'Foo' },
					{ href: '#', label: 'Bar' },
					{ href: '#', label: 'Baz' },
				],
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});

	describe('Without links', () => {
		it('renders correctly', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }],
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }],
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});

	describe('With onRemove', () => {
		it('renders correctly', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [
					{ href: '#', label: 'Foo', onRemove: console.log },
					{ href: '#', label: 'Bar', onRemove: console.log },
					{ href: '#', label: 'Baz', onRemove: console.log },
				],
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [
					{ href: '#', label: 'Foo', onRemove: console.log },
					{ href: '#', label: 'Bar', onRemove: console.log },
					{ href: '#', label: 'Baz', onRemove: console.log },
				],
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});

		it('calls `onRemove` when pressed', async () => {
			const onRemove = jest.fn();
			renderTags({
				heading: (
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				),
				items: [{ href: '#', label: 'Foo', onRemove }],
			});
			const tagRemoveButton = screen.getByLabelText('Remove Foo');
			expect(tagRemoveButton).toBeInTheDocument();
			expect(tagRemoveButton).toHaveAttribute('aria-label', 'Remove Foo');
			await userEvent.click(tagRemoveButton);
			expect(onRemove).toHaveBeenCalledTimes(1);
		});
	});
});
