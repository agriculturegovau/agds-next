import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Heading } from '../heading';
import { ChevronRightIcon } from '../icon';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { render, cleanup } from '../../../../test-utils';
import { Card } from './Card';
import { CardFooter } from './CardFooter';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function CardExample({ footer = false }) {
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
			{footer && (
				<CardFooter>
					<TextLink href="#">Footer</TextLink>
				</CardFooter>
			)}
		</Card>
	);
}

function CardLinkExample({ footer = false }) {
	return (
		<Card clickable footerOutside={footer} shadow>
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
			{footer && (
				<CardFooter>
					<TextLink href="#">Footer</TextLink>
				</CardFooter>
			)}
		</Card>
	);
}

function CardFooterExample() {
	return (
		<Card
			footer={
				<CardFooter>
					<TextLink href="#">Footer</TextLink>
				</CardFooter>
			}
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

function CardLinkFooterExample() {
	return (
		<Card
			clickable
			footer={
				<CardFooter>
					<TextLink href="#">Footer</TextLink>
				</CardFooter>
			}
			footerOutside
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
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With child footer', () => {
			it('renders correctly', () => {
				const { container } = render(<CardExample footer />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardExample footer />);
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
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardLinkExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		describe('With child footer', () => {
			it('renders correctly', () => {
				const { container } = render(<CardLinkExample footer />);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = render(<CardLinkExample footer />);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	describe('Footer', () => {
		it('renders correctly', () => {
			const { container } = render(<CardFooterExample />);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardFooterExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('With link', () => {
		it('renders correctly', () => {
			const { container } = render(<CardLinkFooterExample />);
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = render(<CardLinkFooterExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
