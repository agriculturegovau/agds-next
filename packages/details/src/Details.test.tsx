import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { Text } from '@ag.ds-next/text';
import { Details } from './Details';
import type { DetailsProps } from './Details';

afterEach(cleanup);

function renderDetail(props: DetailsProps) {
	return render(<Details {...props} />);
}

describe('Details', () => {
	it('renders a valid HTML structure', () => {
		const { container } = renderDetail({
			label: 'Details',
			children: (
				<Text as="p">
					This is a small paragraph of text that is supplimentary to the main
					page content.
				</Text>
			),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
