import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { List } from './List';
import type { UnorderedListProps } from './List';
import { ListItem } from './ListItem';

afterEach(cleanup);

function renderUnorderedList(props?: Partial<UnorderedListProps>) {
	return render(
		<List {...props}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</List>
	);
}

describe('List', () => {
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
