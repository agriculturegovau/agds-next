import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { SearchBox } from './SearchBox';
import { SearchBoxInput } from './SearchBoxInput';
import { SearchBoxButton } from './SearchBoxButton';

afterEach(cleanup);

function renderSearch() {
	return render(
		<SearchBox>
			<SearchBoxInput />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	);
}

describe('SearchBox', () => {
	it('renders correctly', () => {
		const { container } = renderSearch();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSearch();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
