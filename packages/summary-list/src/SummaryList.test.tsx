import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemTerm,
	SummaryListItemDescription,
	SummaryListItemAction,
} from './SummaryList';
import type { SummaryListProps } from './SummaryList';

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
					<Stack>
						<Text>+61 9912 3456</Text>
						<Text>will.power@example.com</Text>
					</Stack>
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
	it('renders a valid HTML structure', () => {
		const { container } = renderSummaryList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
