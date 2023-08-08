import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TextLink } from '../text-link';
import { cleanup, render } from '../../../../test-utils';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemTerm,
	SummaryListItemDescription,
	SummaryListItemAction,
} from './SummaryList';
import type { SummaryListProps } from './SummaryList';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSummaryList(props?: Partial<SummaryListProps>) {
	return render(
		<SummaryList {...props}>
			<SummaryListItem>
				<SummaryListItemTerm>First name</SummaryListItemTerm>
				<SummaryListItemDescription>Will</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Last name</SummaryListItemTerm>
				<SummaryListItemDescription>Power</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Contact information</SummaryListItemTerm>
				<SummaryListItemDescription>
					+61 9912 3456
					<br />
					will.power@example.com
				</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
				<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
				<SummaryListItemAction>
					<TextLink href="#">Change</TextLink>
				</SummaryListItemAction>
			</SummaryListItem>
		</SummaryList>
	);
}

describe('SummaryList', () => {
	it('renders correctly', () => {
		const { container } = renderSummaryList();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSummaryList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
