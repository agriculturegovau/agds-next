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

function CardExample({ footerOutside = false }) {
	return (
		<Card footerOutside={footerOutside}>
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

function CardLinkExample({ footerOutside = false }) {
	return (
		<Card clickable footerOutside={footerOutside} shadow>
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
			<CardFooter>Footer</CardFooter>
		</Card>
	);
}

function CardFooterExample({ footerOutside = false }) {
	return (
		<Card
			footer={<CardFooter>Footer</CardFooter>}
			footerOutside={footerOutside}
		>
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

function CardLinkFooterExample({ footerOutside = false }) {
	return (
		<Card
			clickable
			footer={<CardFooter>Footer</CardFooter>}
			footerOutside={footerOutside}
			shadow
		>
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

describe('Card', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = render(<CardExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<CardExample footerOutside />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardExample footerOutside />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('With link', () => {
		it('renders correctly', () => {
			const { container } = render(<CardLinkExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardLinkExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<CardLinkExample footerOutside />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardLinkExample footerOutside />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('Footer prop', () => {
		it('renders correctly', () => {
			const { container } = render(<CardFooterExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root-with-parts'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardFooterExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<CardFooterExample footerOutside />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardFooterExample footerOutside />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('With link', () => {
		it('renders correctly', () => {
			const { container } = render(<CardLinkFooterExample />);

			expect(container.querySelector('div')).toHaveAttribute(
				'data-card',
				'root-with-parts'
			);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardLinkFooterExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With footerOutside', () => {
			it('renders correctly', () => {
				const { container } = render(<CardLinkFooterExample footerOutside />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardLinkFooterExample footerOutside />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});
});
