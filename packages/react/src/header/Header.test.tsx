import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Logo as AgLogo } from '../ag-branding';
import { render, cleanup } from '../../../../test-utils';
import { Header, HeaderProps } from './Header';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderHeader();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
