import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../../box/src';
import { Text } from '../../text/src';
import { FontSize, tokens } from '../../core/src';
import { Columns, Column } from '../../columns/src';
import { SkeletonText } from './SkeletonText';

export default {
	title: 'content/Skeleton/SkeletonText',
	component: SkeletonText,
} as ComponentMeta<typeof SkeletonText>;

export const Basic: ComponentStory<typeof SkeletonText> = (args) => (
	<SkeletonText {...args} />
);
Basic.args = {
	fontSize: 'sm',
	width: '100%',
};

export const Sizes: ComponentStory<typeof SkeletonText> = ({ lineHeight }) => {
	const sizes = Object.keys(tokens.fontSize.sm).reverse() as FontSize[];
	return (
		<Stack gap={1.5}>
			{sizes.map((size) => (
				<Columns gap={[0.5, 1.5]} key={size}>
					<Column columnSpan={[12, 6]}>
						<SkeletonText key={size} fontSize={size} lineHeight={lineHeight} />
					</Column>
					<Column columnSpan={[12, 6]}>
						<Text
							display="block"
							fontSize={size}
							lineHeight={lineHeight}
							border
						>
							Text {size}
						</Text>
					</Column>
				</Columns>
			))}
		</Stack>
	);
};
Basic.args = {
	lineHeight: 'default',
};
