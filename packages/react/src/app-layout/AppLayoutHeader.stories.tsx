import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CloseIcon, WifiIcon, WifiOffIcon } from '../icon';
import { AISLogo } from '../../../../.storybook/components/AISLogo';
import { Logo } from '../ag-branding';
import { Box } from '../box';
import { boxPalette, tokens } from '../core';
import { Flex } from '../flex';
import { Prose } from '../prose';
import { PageContent } from '../content';
import { Stack } from '../stack';
import { Switch } from '../switch';
import { ExampleAccountDropdown, exampleData } from './test-utils';
import { AppLayoutHeader } from './AppLayoutHeader';
import { AppLayout } from './AppLayout';
import { AppLayoutSidebar } from './AppLayoutSidebar';
import { AppLayoutContent } from './AppLayoutContent';

const accountDetails = {
	name: exampleData.userNames.regular,
	secondaryText: 'My account',
	dropdown: (
		<ExampleAccountDropdown
			businesses={exampleData.businessNames.regular}
			onBusinessChange={console.log}
			selectedBusinessName={exampleData.businessNames.regular[0]}
		/>
	),
};

const meta: Meta<typeof AppLayoutHeader> = {
	title: 'Layout/AppLayout/AppLayoutHeader',
	component: AppLayoutHeader,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		accountDetails,
		badgeLabel: 'Beta',
		background: 'bodyAlt',
		heading: 'Export Service',
		href: '/',
		logo: <Logo />,
		subLine: 'Supporting Australian agricultural exports',
	},
	render: (props) => (
		<AppLayout focusMode={false}>
			<AppLayoutHeader {...props} />
		</AppLayout>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayoutHeader>;

export const Basic: Story = {};

export const BodyBackground: Story = {
	args: {
		background: 'body',
	},
};

export const FocusMode: Story = {
	render: (props) => (
		<AppLayout focusMode>
			<AppLayoutHeader {...props} />
		</AppLayout>
	),
};

export const WithoutBadge: Story = {
	args: {
		badgeLabel: undefined,
	},
};

export const WithoutSubline: Story = {
	args: {
		subLine: undefined,
	},
};

export const WithoutAccount: Story = {
	args: {
		accountDetails: undefined,
	},
};

export const WithoutDropdown: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.regular,
		},
	},
};

export const WithAccountLink: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.regular,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
	},
};

export const WithAccountLinkLongName: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.long,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
	},
};

export const WithAvatarName: Story = {
	args: {
		accountDetails: {
			...accountDetails,
			avatarName: exampleData.userNames.medium,
		},
	},
};

export const CoBranding: Story = {
	args: {
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};

export const CoBrandingDividerPositionBetween: Story = {
	args: {
		dividerPosition: 'between',
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};

export const CoBrandingWithAccountDetails: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.long,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};

export const StatusIndicator: Story = {
	args: {
		statusIndicator: (
			<Box
				css={{
					color: boxPalette.backgroundBody,
					backgroundColor: boxPalette.systemWarning,
					borderRadius: tokens.borderRadius,
					lineHeight: 0,
				}}
				padding={0.5}
				palette={'light'}
			>
				<WifiIcon />
			</Box>
		),
	},
};

export const StatusIndicatorNetworkExample: Story = {
	render: function StatusIndicatorNetworkRender(props) {
		const [online, setOnline] = useState(false);
		const [seen, setSeen] = useState(false);

		return (
			<>
				<Stack
					css={{
						position: 'sticky',
						top: 0,
						left: 0,
						right: 0,
						zIndex: 999,
					}}
				>
					{seen ? null : online ? (
						<Flex
							alignItems={'center'}
							css={{
								color: boxPalette.backgroundBody,
								backgroundColor: boxPalette.systemSuccess,
							}}
							justifyContent={'space-between'}
							padding={0.5}
							palette="light"
						>
							<Flex
								alignItems={'center'}
								flexGrow={1}
								gap={1}
								justifyContent={'center'}
							>
								<WifiIcon />
								<span>
									You&apos;re connected. Changes you made offline have been
									synced.
								</span>
							</Flex>

							<Box css={{ cursor: 'pointer' }} onClick={() => setSeen(true)}>
								<CloseIcon />
							</Box>
						</Flex>
					) : (
						<Flex
							alignItems={'center'}
							css={{
								color: boxPalette.backgroundBody,
								backgroundColor: boxPalette.systemWarning,
							}}
							justifyContent={'space-between'}
							padding={0.5}
							palette="light"
						>
							<Flex
								alignItems={'center'}
								flexGrow={1}
								gap={1}
								justifyContent={'center'}
							>
								<WifiOffIcon />
								<span>
									No internet connection. Your changes will be synced when your
									connection is restored.
								</span>
							</Flex>

							<Box css={{ cursor: 'pointer' }} onClick={() => setSeen(true)}>
								<CloseIcon />
							</Box>
						</Flex>
					)}
				</Stack>
				<AppLayout>
					<AppLayoutHeader
						{...props}
						statusIndicator={
							seen && !online ? (
								<Box
									css={{
										color: boxPalette.backgroundBody,
										backgroundColor: boxPalette.systemWarning,
										borderRadius: tokens.borderRadius,
										lineHeight: 0,
										cursor: 'pointer',
									}}
									onClick={() => setSeen(false)}
									padding={0.5}
									palette={'light'}
								>
									<WifiOffIcon />
								</Box>
							) : undefined
						}
					/>
					<AppLayoutSidebar items={[]} />
					<AppLayoutContent>
						<PageContent>
							<Prose>
								<Switch
									checked={online}
									label="Network available"
									onChange={() => {
										setSeen(false);
										setOnline((t) => !t);
									}}
								/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									a libero vel dolor sollicitudin pretium quis quis mi. Fusce
									sapien mi, efficitur sit amet ex et, bibendum efficitur odio.
									Ut nec gravida metus, nec suscipit nulla. Donec est nulla,
									dictum sed ultricies congue, suscipit at velit. Integer ut leo
									lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam
									ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl
									gravida, eu rutrum sem luctus. Praesent vulputate eu dolor
									commodo tempor. Sed nec lorem consectetur, maximus justo at,
									tincidunt quam. Suspendisse pellentesque accumsan accumsan.
									Cras in odio leo. Nam pharetra, lorem eget aliquam gravida,
									felis ex tempor sapien, a ornare leo nulla eget magna. Quisque
									tempus ipsum eu elit bibendum, nec bibendum ligula posuere.
									Nam porttitor est eros, ac maximus nisl euismod nec.
								</p>
								<p>
									Curabitur urna erat, ornare in nulla vitae, tempor porttitor
									dolor. Nam luctus fermentum tellus, vitae maximus turpis
									viverra eget. Phasellus hendrerit tortor eu mauris ultricies
									congue. Suspendisse cursus, purus quis viverra pharetra, purus
									quam hendrerit magna, condimentum cursus massa nisi ut est.
									Mauris in tristique augue. Phasellus tellus ante, fermentum
									eget fringilla eget, tempor nec nunc. Ut nec dui vitae ex
									dignissim tempus ac et ante. Donec imperdiet suscipit leo.
									Suspendisse mattis quis nisl id mattis. Sed dictum tempus
									nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu
									malesuada.
								</p>
							</Prose>
						</PageContent>
					</AppLayoutContent>
				</AppLayout>
			</>
		);
	},
};
