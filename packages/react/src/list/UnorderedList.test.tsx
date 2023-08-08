import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { UnorderedList } from './UnorderedList';
import type { UnorderedListProps } from './UnorderedList';
import { ListItem } from './ListItem';

expect.extend(toHaveNoViolations);

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
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderUnorderedList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
