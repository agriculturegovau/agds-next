import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Heading } from '../heading';
import { ChevronRightIcon } from '../icon';
import { Stack } from '../stack';
import { Text } from '../text';
import { render, cleanup } from '../../../../test-utils';
import { Card } from './Card';
import { CardFooter } from './CardFooter';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function BasicCardExample() {
	return (
		<Card>
			<CardInner>
				<Stack gap={1}>
					<Heading as="h2" type="h3">
						Card heading
					</Heading>
					<Text as="p">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptat
					</Text>
				</Stack>
			</CardInner>
			<CardFooter>Footer</CardFooter>
		</Card>
	);
}

function BasicCardLinkExample() {
	return (
		<Card clickable shadow>
			<CardInner>
				<Stack gap={1}>
					<Heading as="h2" type="h3">
						Card heading
					</Heading>
					<Text as="p">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptat
					</Text>
					<CardLink href="#">
						Linking out
						<ChevronRightIcon />
					</CardLink>
				</Stack>
			</CardInner>
		</Card>
	);
}

function PropCardExample({ footer = '', footerOutside = false, header = '' }) {
	return (
		<Card footer={footer} footerOutside={footerOutside} header={header}>
			<CardInner>
				<Stack gap={1}>
					<Heading as="h2" type="h3">
						Card heading
					</Heading>
					<Text as="p">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptat
					</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}

describe('Card', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = render(<BasicCardExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<BasicCardExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<BasicCardExample />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<BasicCardExample />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('With link', () => {
		it('renders correctly', () => {
			const { container } = render(<BasicCardLinkExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<BasicCardLinkExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<BasicCardLinkExample />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<BasicCardLinkExample />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('Header prop', () => {
		it('renders correctly', () => {
			const { container } = render(<PropCardExample header="header" />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root-with-parts'
			);
			const header = container.querySelector('[data-card="header"]');
			expect(header).toBeInTheDocument();
			expect(header).toHaveTextContent('header');
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<PropCardExample header="header" />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(
					<PropCardExample footerOutside header="header" />
				);
				const headerFooterWrapper = container.querySelector(
					'[data-card="header-footer-wrapper"]'
				);
				expect(headerFooterWrapper).toBeInTheDocument();
				expect(headerFooterWrapper).toHaveTextContent('header');
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(
					<PropCardExample footerOutside header="header" />
				);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('Footer prop', () => {
		it('renders correctly', () => {
			const { container } = render(<PropCardExample footer="footer" />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root-with-parts'
			);
			const footer = container.querySelector('[data-card="footer"]');
			expect(footer).toBeInTheDocument();
			expect(footer).toHaveTextContent('footer');
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<PropCardExample footer="footer" />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(
					<PropCardExample footer="footer" footerOutside />
				);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(
					<PropCardExample footer="footer" footerOutside />
				);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});
});
