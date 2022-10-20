import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '@testing-library/react';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';
import { Header, HeaderProps } from './Header';

afterEach(cleanup);

function renderHeader(props?: Partial<HeaderProps>) {
	return render(
		<Header
			heading={'Export Service'}
			subline={'Supporting Australian agricultural exports'}
			logo={<AgLogo />}
			background={'bodyAlt'}
			{...props}
		/>
	);
}

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = renderHeader();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderHeader();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
