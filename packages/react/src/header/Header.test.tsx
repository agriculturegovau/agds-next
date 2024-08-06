import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Logo as AgLogo } from '../ag-branding';
import { render, screen } from '../../../../test-utils';
import { Header, HeaderProps } from './Header';

expect.extend(toHaveNoViolations);

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

	describe('when a second logo with href is defined', () => {
		beforeEach(() => {
			renderHeader({
				secondHref: '#mock-second-href',
				secondLogo: (
					<span data-testid="mock-second-logo">Mock second logo</span>
				),
			});
		});

		test('then the second logo should be visible', () => {
			expect(screen.getByTestId('mock-second-logo')).toBeVisible();
		});

		test('then a link with the second href should be visible', () => {
			expect(
				screen.getByRole('link', { name: 'Mock second logo' })
			).toHaveAttribute('href', '#mock-second-href');
		});
	});
});
