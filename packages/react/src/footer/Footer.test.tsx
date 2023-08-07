import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { tokens } from '../core';
import { Text } from '../text';
import { LinkList } from '../link-list';
import { render, cleanup } from '../../../../test-utils';
import { Footer, FooterProps } from './Footer';
import { FooterDivider } from './FooterDivider';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderFooter(props?: Partial<FooterProps>) {
	return render(
		<Footer {...props}>
			<nav aria-label="footer">
				<LinkList
					horizontal
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Terms and conditions' },
						{ href: '#', label: 'Privacy policy' },
						{ href: '#', label: 'A really long link title' },
					]}
				/>
			</nav>
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				&copy; 2022 Department of Agriculture, Fisheries and Forestry
			</Text>
		</Footer>
	);
}

describe('Footer', () => {
	it('renders correctly', () => {
		const { container } = renderFooter();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderFooter();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
