import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { Columns, Column } from '../columns';
import { Heading } from '../heading';
import { SkeletonHeading } from './SkeletonHeading';

const meta: Meta<typeof SkeletonHeading> = {
	title: 'content/Skeleton/SkeletonHeading',
	component: SkeletonHeading,
};

export default meta;

type Story = StoryObj<typeof SkeletonHeading>;

export const Basic: Story = {
	args: {
		type: 'h1',
		width: '100%',
	},
};

export const Sizes: Story = {
	render: () => {
		const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
		return (
			<Stack gap={1.5}>
				{headingTypes.map((type) => (
					<Columns gap={[0.5, 1.5]} key={type}>
						<Column columnSpan={[12, 6]}>
							<SkeletonHeading key={type} type={type} />
						</Column>
						<Column columnSpan={[12, 6]}>
							<Heading border key={type} type={type}>
								Heading {type.toLocaleUpperCase()}
							</Heading>
						</Column>
					</Columns>
				))}
			</Stack>
		);
	},
};
