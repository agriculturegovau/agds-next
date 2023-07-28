import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { CollapsingSideBar } from './CollapsingSideBar';
import type { SideBarProps } from './CollapsingSideBar';

afterEach(cleanup);

const defaultSideBarProps: SideBarProps = {
	children: 'CollapsingSideBar Content',
	collapseButtonLabel: 'Collapse button label',
};

function renderSideBar(props: SideBarProps) {
	return render(<CollapsingSideBar {...props} />);
}

describe('CollapsingSideBar', () => {
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
