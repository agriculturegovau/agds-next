import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { SideBar } from './SideBar';
import type { SideBarProps } from './SideBar';

afterEach(cleanup);

const defaultSideBarProps: SideBarProps = {
	children: 'SideBar Content',
	collapseButtonLabel: 'Collapse button label',
};

function renderSideBar(props: SideBarProps) {
	return render(<SideBar {...props} />);
}

describe('SideBar', () => {
	it('renders correctly', () => {
		const { container } = renderSideBar(defaultSideBarProps);
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderSideBar(defaultSideBarProps);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
