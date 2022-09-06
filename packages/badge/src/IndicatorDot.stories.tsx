import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@ag.ds-next/box';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
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

const Message = ({ isUnread }) => {
	return (
		<Flex
			as="li"
			alignItems="center"
			gap={1}
			paddingY={0.5}
			borderBottom
			borderColor="muted"
			justifyContent="space-between"
			aria-selected="false"
			role="option"
		>
			<Flex flexDirection="column">
				<Text fontWeight={isUnread ? 'bold' : 'normal'}>Oscar Piastri</Text>
				<Text>2023 contract</Text>
				<Text fontSize="xs">
					Hi Zak. Please find enclosed my signed contract for next year...
				</Text>
			</Flex>

			{isUnread && (
				<div>
					<IndicatorDot tone="action" />
					<VisuallyHidden>Unread message</VisuallyHidden>
				</div>
			)}
		</Flex>
	);
};
export const Example = () => {
	return (
		<Flex flexDirection="column" as="ul">
			<Message />
			<Message isUnread />
			<Message />
			<Message />
		</Flex>
	);
};
