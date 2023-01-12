import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Text } from '../text';
import { cleanup, render } from '../../../../test-utils';
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
					{ href: '#', label: 'Foo', onRemove: () => console.log('onRemove') },
					{ href: '#', label: 'Bar', onRemove: () => console.log('onRemove') },
					{ href: '#', label: 'Baz', onRemove: () => console.log('onRemove') },
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
					{ href: '#', label: 'Foo', onRemove: () => console.log('onRemove') },
					{ href: '#', label: 'Bar', onRemove: () => console.log('onRemove') },
					{ href: '#', label: 'Baz', onRemove: () => console.log('onRemove') },
				],
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});
});
