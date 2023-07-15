import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { SideBar } from './SideBar';
import type { SideBarProps } from './SideBar';

afterEach(cleanup);

function renderSideBar(props?: Partial<SideBarProps>) {
	return render(<SideBar {...props} />);
}

describe('SideBar', () => {
	it('renders correctly', () => {
		const { container } = renderSideBar();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderSideBar();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
