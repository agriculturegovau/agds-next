import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Text } from '../text';
import { cleanup, render } from '../../../../test-utils';
import { Details } from './Details';
import type { DetailsProps } from './Details';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
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
		expect(await axe(container)).toHaveNoViolations();
	});
});
