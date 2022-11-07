import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@ag.ds-next/box';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
import { boxPalette } from '@ag.ds-next/core';
import { TextLink } from '@ag.ds-next/text-link';
import { IndicatorDot } from './IndicatorDot';

export default {
	title: 'content/Badge/IndicatorDot',
	component: IndicatorDot,
} as ComponentMeta<typeof IndicatorDot>;

export const Basic: ComponentStory<typeof IndicatorDot> = (args) => (
	<IndicatorDot {...args} />
);
Basic.args = {
	tone: 'neutral',
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
