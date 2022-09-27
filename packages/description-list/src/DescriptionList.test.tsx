import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import {
	DescriptionList,
	DescriptionListItem,
	Term,
	Description,
} from './DescriptionList';
import type { DescriptionListProps } from './DescriptionList';

afterEach(cleanup);

function renderDescriptionList(props?: Partial<DescriptionListProps>) {
	return render(
		<DescriptionList {...props}>
			<DescriptionListItem>
				<Term>First name</Term>
				<Description>Will</Description>
			</DescriptionListItem>
			<DescriptionListItem>
				<Term>Last name</Term>
				<Description>Power</Description>
			</DescriptionListItem>
			<DescriptionListItem>
				<Term>Email</Term>
				<Description>will.power@example.com</Description>
			</DescriptionListItem>
			<DescriptionListItem>
				<Term>Date of birth</Term>
				<Description>09/06/1995</Description>
			</DescriptionListItem>
		</DescriptionList>
	);
}

describe('DescriptionList', () => {
	it('renders a valid HTML structure', () => {
		const { container } = renderDescriptionList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
