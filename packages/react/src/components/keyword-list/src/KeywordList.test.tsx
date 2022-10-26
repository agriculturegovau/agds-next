import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { KeywordList, KeywordListProps } from './KeywordList';

afterEach(cleanup);

function renderKeywordList(props: KeywordListProps) {
	return render(<KeywordList {...props} />);
}

describe('KeywordList', () => {
	it('renders correctly', () => {
		const { container } = renderKeywordList({
			items: [
				{
					subTitle: 'Department of',
					title: 'Agriculture, Fisheries and Forestry',
				},
				{
					subTitle: 'Department of',
					title: 'Communications and the Arts',
				},
			],
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderKeywordList({
			items: [
				{
					subTitle: 'Department of',
					title: 'Agriculture, Fisheries and Forestry',
				},
				{
					subTitle: 'Department of',
					title: 'Communications and the Arts',
				},
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
