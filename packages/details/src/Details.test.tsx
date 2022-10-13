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
	const { container } = renderDetail({
		label: 'Details',
		children: (
			<Text as="p">
				This is a small paragraph of text that is supplementary to the main page
				content.
			</Text>
		),
	});

	it('renders correctly', () => {
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
