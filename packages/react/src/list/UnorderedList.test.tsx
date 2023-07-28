import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { UnorderedList } from './UnorderedList';
import type { UnorderedListProps } from './UnorderedList';
import { ListItem } from './ListItem';

afterEach(cleanup);

function renderUnorderedList(props?: Partial<UnorderedListProps>) {
	return render(
		<UnorderedList {...props}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</UnorderedList>
	);
}

describe('UnorderedList', () => {
	it('renders correctly', () => {
		const { container } = renderUnorderedList();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderUnorderedList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
