import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
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
	const { container } = renderSearch();

	it('renders correctly', () => {
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
