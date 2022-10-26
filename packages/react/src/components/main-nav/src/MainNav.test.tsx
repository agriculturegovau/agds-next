import '@testing-library/jest-dom';
import 'html-validate/jest';
import { AvatarIcon } from '../../icon/src';
import { render, cleanup } from '../../../../../../test-utils';
import { MainNav } from './MainNav';

afterEach(cleanup);

function MainNavExample() {
	return (
		<MainNav
			items={[
				{ href: '#home', label: 'Home' },
				{ href: '#content', label: 'Content page' },
				{ href: '#form', label: 'Form page' },
				{ href: '#simple', label: 'Simple page' },
			]}
			secondaryItems={[
				{
					href: '#sign-in',
					label: 'Sign in',
					endElement: <AvatarIcon color="action" />,
				},
			]}
			activePath="#content"
		/>
	);
}

describe('MainNav', () => {
	it('renders correctly', () => {
		const { container } = render(<MainNavExample />);
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = render(<MainNavExample />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
});
