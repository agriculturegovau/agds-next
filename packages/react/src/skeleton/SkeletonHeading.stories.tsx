import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../box';
import { Columns, Column } from '../columns';
import { Heading } from '../heading';
import { SkeletonHeading } from './SkeletonHeading';

export default {
	title: 'content/Skeleton/SkeletonHeading',
	component: SkeletonHeading,
} as ComponentMeta<typeof SkeletonHeading>;

export const Basic: ComponentStory<typeof SkeletonHeading> = (args) => {
	return <SkeletonHeading {...args} />;
};
Basic.args = {
	type: 'h1',
	width: '100%',
};

export const Sizes = () => {
	const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
	return (
		<Stack gap={1.5}>
			{headingTypes.map((type) => (
				<Columns gap={[0.5, 1.5]} key={type}>
					<Column columnSpan={[12, 6]}>
						<SkeletonHeading key={type} type={type} />
					</Column>
					<Column columnSpan={[12, 6]}>
						<Heading key={type} type={type} border>
							Heading {type.toLocaleUpperCase()}
						</Heading>
					</Column>
				</Columns>
			))}
		</Stack>
	);
};
