import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Stack } from '../stack';
import { Header } from '../header';
import { Logo } from '../ag-branding/';
import { MainNav } from '../main-nav';
import { PageContent } from '../content';
import { Prose } from '../prose';
import { LoadingBlanket } from './index';

const meta: Meta<typeof LoadingBlanket> = {
	title: 'content/Loading/LoadingBlanket',
	component: LoadingBlanket,
};

export default meta;

type Story = StoryObj<typeof LoadingBlanket>;

export const Basic: Story = {
	args: {
		label: 'Component loading state message',
	},
	render: (args) => (
		<Box
			background="body"
			border
			css={{ position: 'relative' }}
			height="300px"
			padding={1}
			width="100%"
		>
			<LoadingBlanket {...args} />
		</Box>
	),
};

export const FullScreen: Story = {
	args: {
		label: 'Loading state message',
		fullScreen: true,
	},
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => (
		<Box background="body">
			<FullScreenContent />
			<LoadingBlanket {...args} />
		</Box>
	),
};

const FullScreenContent = () => (
	<Fragment>
		<Stack palette="dark">
			<Header heading="Export Service" logo={<Logo />} />
			<MainNav items={[{ label: 'Hello', href: '#' }]} />
		</Stack>
		<PageContent>
			<Prose>
				<h1>Page heading</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</p>
				<p>
					Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
					convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
					sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
					libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam
					aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta
					ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Suspendisse sodales metus quis vulputate convallis. Morbi congue
					lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor
					ullamcorper.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</p>
				<p>
					Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
					convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
					sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
					libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam
					aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta
					ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Suspendisse sodales metus quis vulputate convallis. Morbi congue
					lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor
					ullamcorper.
				</p>
			</Prose>
		</PageContent>
	</Fragment>
);
