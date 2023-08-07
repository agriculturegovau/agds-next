import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { OrderedList } from './OrderedList';
import type { OrderedListProps } from './OrderedList';
import { ListItem } from './ListItem';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderOrderedList(props?: Partial<OrderedListProps>) {
	return render(
		<OrderedList {...props}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</OrderedList>
	);
}

describe('OrderedList', () => {
	it('renders correctly', () => {
		const { container } = renderOrderedList();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderOrderedList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
