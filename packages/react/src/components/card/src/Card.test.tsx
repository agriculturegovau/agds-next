import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Stack } from '../../box/src';
import { Heading } from '../../heading/src';
import { Text } from '../../text/src';
import { ChevronRightIcon } from '../../icon/src';
import { render, cleanup } from '../../../../../../test-utils';
import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';

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
		it('renders a valid HTML structure', () => {
			const { container } = render(<CardExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});

	describe('With link', () => {
		it('renders correctly', () => {
			const { container } = render(<CardLinkExample />);
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = render(<CardLinkExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});
});
