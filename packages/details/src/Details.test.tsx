import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Text } from '@ag.ds-next/text';
import { cleanup, render } from '../../../test-utils';
import { Details } from './Details';
import type { DetailsProps } from './Details';

afterEach(cleanup);

function renderDetail(props: DetailsProps) {
	return render(<Details {...props} />);
}

describe('Details', () => {
	it('renders correctly', () => {
		const { container } = renderDetail({
			label: 'Details',
			children: (
				<Text as="p">
					This is a small paragraph of text that is supplementary to the main
					page content.
				</Text>
			),
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDetail({
			label: 'Details',
			children: (
				<Text as="p">
					This is a small paragraph of text that is supplementary to the main
					page content.
				</Text>
			),
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
