import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
	title: 'foundations/Box',
	component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

/**
 * The Box with a Light palette applied
 */
export const Basic: Story = {
	args: {
		children: 'Box with a border',
		background: 'body',
		color: 'text',
		padding: 2,
		border: true,
		rounded: true,
		light: true,
	},
};

/** Responsive props */
export const ResponsivePadding: Story = {
	args: {
		children: (
			<Fragment>
				<div>Responsive padding</div>
				<div>
					Change the size of the browser window to see the padding change
				</div>
				<ResponsiveSizeIndicator />
			</Fragment>
		),
		border: true,
		rounded: true,
		padding: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
	},
};

function ResponsiveSizeIndicator() {
	return (
		<Box
			palette="dark"
			color="text"
			display="flex"
			flexDirection="row"
			gap={2}
			paddingTop={1}
		>
			{['xs', 'sm', 'md', 'lg', 'xl'].map((s, index, arr) => (
				// TODO: replace with a pill / tag when it exists
				<Box
					key={s}
					background="body"
					padding={0.5}
					rounded
					display={Object.fromEntries(
						[
							['xs', 'none'],
							[arr[index - 1], 'none'],
							[arr[index], 'block'],
							[arr[index + 1], 'none'],
						].filter(([a]) => !!a)
					)}
				>
					{s}
				</Box>
			))}
		</Box>
	);
}
