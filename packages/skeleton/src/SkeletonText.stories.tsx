import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { FontSize, tokens } from '@ag.ds-next/core';
import { Columns, Column } from '@ag.ds-next/columns';
import { SkeletonText } from './SkeletonText';

export default {
	title: 'Components/Skeleton/SkeletonText',
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
