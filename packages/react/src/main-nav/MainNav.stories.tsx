import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { VisuallyHidden } from '../a11y';
import { Logo } from '../ag-branding';
import { Avatar } from '../avatar';
import { Box } from '../box';
import {
	DropdownMenuGroup,
	DropdownMenuGroupLink,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '../dropdown-menu';
import { Header } from '../header';
import { AvatarIcon, EmailIcon, ExitIcon } from '../icon';
import { NotificationBadge } from '../notification-badge';
import { SearchInput } from '../search-input';
import { MainNav } from './MainNav';

const meta: Meta<typeof MainNav> = {
	title: 'navigation/MainNav',
	component: MainNav,
	args: {
		items: [
			{ href: '#home', label: 'Home' },
			{ href: '#content', label: 'Content page' },
			{ href: '#form', label: 'Form page' },
			{ href: '#simple', label: 'Simple page' },
		],
		activePath: '#content',
	},
};

export default meta;

type Story = StoryObj<typeof MainNav>;

export const Body: Story = {
	name: 'Body background',
	args: {
		background: 'body',
	},
};

export const BodyAlt: Story = {
	name: 'BodyAlt background',
	args: {
		background: 'bodyAlt',
	},
};

export const SecondaryLinks: Story = {
	args: {
		activePath: '#messages',
		secondaryItems: [
			{
				href: '#messages',
				label: 'Messages',
				endElement: (
					<Fragment>
						<NotificationBadge aria-hidden tone="action" value={5} />
						<VisuallyHidden>, 5 unread</VisuallyHidden>
					</Fragment>
				),
			},
			{
				href: '#sign-in',
				label: 'Sign in',
				endElement: <AvatarIcon color="action" />,
			},
		],
	},
};

export const SecondaryButtons: Story = {
	args: {
		secondaryItems: [
			{
				onClick: console.log,
				label: 'Sign in',
				endElement: <AvatarIcon color="action" />,
			},
		],
	},
};

export const SecondaryDropdown: Story = {
	args: {
		secondaryItems: [
			{
				label: 'Moe Syzlack',
				beforeElement: <Avatar name="Moe Syzlack" size="md" tone="action" />,
				dropdown: (
					<DropdownMenuPanel palette="light">
						<DropdownMenuItemLink href="#profile">Profile</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#messages">
							Messages
						</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#account-settings">
							Account settings
						</DropdownMenuItemLink>
					</DropdownMenuPanel>
				),
			},
		],
	},
};

export const SecondaryDropdownNoAvatar: Story = {
	args: {
		secondaryItems: [
			{
				label: 'Moe Syzlack',
				dropdown: (
					<DropdownMenuPanel palette="light">
						<DropdownMenuItemLink href="#profile">Profile</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#messages">
							Messages
						</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#account-settings">
							Account settings
						</DropdownMenuItemLink>
					</DropdownMenuPanel>
				),
			},
		],
	},
};

export const SecondaryDropdownLongName: Story = {
	args: {
		secondaryItems: [
			{
				label: 'Benjamin Alexander Harrington-Smythe',
				beforeElement: (
					<Avatar
						name="Benjamin Alexander Harrington-Smythe"
						size="md"
						tone="action"
					/>
				),
				dropdown: (
					<DropdownMenuPanel palette="light">
						<DropdownMenuItemLink href="#profile">Profile</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#messages">
							Messages
						</DropdownMenuItemLink>
						<DropdownMenuItemLink href="#account-settings">
							Account settings
						</DropdownMenuItemLink>
					</DropdownMenuPanel>
				),
			},
		],
	},
};

export const NoItems: Story = {
	args: {
		items: undefined,
		secondaryItems: [
			{
				onClick: console.log,
				label: 'Sign in',
				endElement: <AvatarIcon color="action" />,
			},
		],
	},
};

export const EndElement: Story = {
	args: {
		activePath: '#issues',
		items: [
			{ href: '#home', label: 'Home' },
			{ href: '#code', label: 'Code' },
			{
				href: '#issues',
				label: 'Issues',
				endElement: (
					<Fragment>
						<NotificationBadge aria-hidden tone="action" value={5} />
						<VisuallyHidden>, 5 notifications</VisuallyHidden>
					</Fragment>
				),
			},
			{ href: '#pull-requests', label: 'Pull requests' },
			{ href: '#security', label: 'Security' },
			{ href: '#settings', label: 'Settings' },
		],
	},
};

export const WithHeaderAndDropdown: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render() {
		const [selectedBusiness, setSelectedBusiness] = useState('Antfix');
		return (
			<Box dark>
				<Header
					background="bodyAlt"
					heading="Export Service"
					logo={<Logo />}
					rightContent={<SearchInput block hideOptionalLabel label="Search" />}
					subline="Supporting Australian agricultural exports"
				/>
				<MainNav
					activePath="#home"
					items={[
						{ href: '#home', label: 'Home' },
						{ href: '#about', label: 'About' },
						{ href: '#contact', label: 'Contact' },
					]}
					secondaryItems={[
						{
							label: 'Moe Syzlack',
							beforeElement: (
								<Avatar name="Moe Syzlack" size="md" tone="action" />
							),
							dropdown: (
								<DropdownMenuPanel palette="light">
									<DropdownMenuGroup label="Businesses">
										<DropdownMenuItemRadio
											checked={selectedBusiness === 'Antfix'}
											onClick={() => setSelectedBusiness('Antfix')}
											secondaryText="Sydney"
										>
											Antfix
										</DropdownMenuItemRadio>
										<DropdownMenuItemRadio
											checked={selectedBusiness === 'Produce Fresh'}
											onClick={() => setSelectedBusiness('Produce Fresh')}
											secondaryText="Brisbane"
										>
											Produce Fresh
										</DropdownMenuItemRadio>
										<DropdownMenuItemRadio
											checked={selectedBusiness === 'Organic Co'}
											onClick={() => setSelectedBusiness('Organic Co')}
											secondaryText="Canberra"
										>
											Organic Co
										</DropdownMenuItemRadio>
										<DropdownMenuGroupLink href="#">
											View all
										</DropdownMenuGroupLink>
									</DropdownMenuGroup>
									<DropdownMenuGroup label="My account">
										<DropdownMenuItemLink href="#messages" icon={EmailIcon}>
											Messages
										</DropdownMenuItemLink>
										<DropdownMenuItem icon={ExitIcon} onClick={console.log}>
											Sign out
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuPanel>
							),
						},
					]}
				/>
			</Box>
		);
	},
};
