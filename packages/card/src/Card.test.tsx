import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render } from '@testing-library/react';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';

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
		it('renders a valid HTML structure', () => {
			const { container } = render(<CardExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});
	describe('With link', () => {
		it('renders a valid HTML structure', () => {
			const { container } = render(<CardLinkExample />);
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});
});
