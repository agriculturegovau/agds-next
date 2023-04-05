import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../box';
import { VisuallyHidden } from '../a11y';
import { Text } from '../text';
import { boxPalette } from '../core';
import { TextLink } from '../text-link';
import { IndicatorDot } from './IndicatorDot';

const meta: Meta<typeof IndicatorDot> = {
	title: 'content/Badge/IndicatorDot',
	component: IndicatorDot,
};

export default meta;

type Story = StoryObj<typeof IndicatorDot>;

export const Basic: Story = {
	args: {
		'aria-label': 'Unread message',
	},
};

export const Example = () => {
	return (
		<Flex flexDirection="column" as="ul">
			<Flex
				as="li"
				aria-selected="false"
				borderColor="muted"
				borderY
				css={{
					backgroundColor: boxPalette.systemInfoMuted,
				}}
				flexDirection="column"
				gap={0.5}
				justifyContent="space-between"
				padding={1.5}
				width="100%"
			>
				<Flex justifyContent="space-between">
					<Text fontSize="md" fontWeight="bold">
						Action required
					</Text>

					<Flex alignItems="center" gap={0.5}>
						<Text color="muted">10:15am</Text>
						<IndicatorDot />
						<VisuallyHidden>Unread message</VisuallyHidden>
					</Flex>
				</Flex>

				<Text fontSize="sm">
					Your application to register establishment X needs more information.
					Please provide Y by 12 June 2022 to avoid delays.
				</Text>

				<div>
					<TextLink href="#details">View details</TextLink>
				</div>
			</Flex>
		</Flex>
	);
};
