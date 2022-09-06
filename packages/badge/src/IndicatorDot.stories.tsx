import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@ag.ds-next/box';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
import { boxPalette } from '@ag.ds-next/core';
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
				alignItems="center"
				gap={1}
				paddingY={0.5}
				paddingX={0.25}
				borderY
				borderColor="muted"
				css={{
					backgroundColor: boxPalette.systemInfoMuted,
				}}
				justifyContent="space-between"
				aria-selected="false"
				role="option"
			>
				<Flex flexDirection="column">
					<Text fontWeight="bold">Oscar Piastri</Text>
					<Text>2023 contract</Text>
					<Text fontSize="xs">
						Hi Zak. Please find enclosed my signed contract for next year...
					</Text>
				</Flex>

				<div>
					<IndicatorDot tone="action" />
					<VisuallyHidden>Unread message</VisuallyHidden>
				</div>
			</Flex>
		</Flex>
	);
};
