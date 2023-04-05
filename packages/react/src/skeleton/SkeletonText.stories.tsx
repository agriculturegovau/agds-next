import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Stack } from '../box';
import { Text } from '../text';
import { FontSize, tokens } from '../core';
import { Columns, Column } from '../columns';
import { SkeletonText } from './SkeletonText';

const meta: Meta<typeof SkeletonText> = {
	title: 'content/Skeleton/SkeletonText',
	component: SkeletonText,
};

export default meta;

export const Basic: StoryObj<typeof SkeletonText> = {
	args: {
		fontSize: 'sm',
		width: '100%',
		lineHeight: 'default',
	},
};

export const Sizes: StoryFn<typeof SkeletonText> = ({ lineHeight }) => {
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
