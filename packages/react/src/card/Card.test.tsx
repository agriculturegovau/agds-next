import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Stack } from '../stack';
import { Heading } from '../heading';
import { Text } from '../text';
import { ChevronRightIcon } from '../icon';
import { render, cleanup } from '../../../../test-utils';
import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function CardExample() {
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
		</Card>
	);
}

function CardLinkExample() {
	return (
		<Card shadow clickable>
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
						<ChevronRightIcon weight="bold" size="sm" />
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
	});
});
