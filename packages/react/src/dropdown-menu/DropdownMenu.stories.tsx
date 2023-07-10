import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { PageContent } from '../content';
import { Flex } from '../flex';
import {
	EditIcon,
	EmailIcon,
	ExitIcon,
	SettingsIcon,
	AvatarIcon,
	PrintIcon,
	CalendarIcon,
	DownloadIcon,
	DeleteIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ExternalLinkIcon,
} from '../icon';
import { IndicatorDot } from '../indicator-dot';
import { NotificationBadge } from '../notification-badge';
import { Stack } from '../stack';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '../table';
import { TextLink } from '../text-link';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuGroupLink,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuList,
} from './index';

const meta: Meta = {
	title: 'layout/DropdownMenu',
};

export default meta;

export const Basic: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem onClick={() => console.log('Profile')}>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => console.log('Messages')}>
						Potato
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => console.log('Account settings')}>
						Account settings
					</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Triggers: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2}>
				<Flex gap={2}>
					<DropdownMenu>
						<DropdownMenuButton variant="primary" iconAfter={ChevronDownIcon}>
							Edit
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Item A</DropdownMenuItem>
							<DropdownMenuItem>Item B</DropdownMenuItem>
							<DropdownMenuItem>Item C</DropdownMenuItem>
						</DropdownMenuList>
					</DropdownMenu>
					<DropdownMenu>
						<DropdownMenuButton variant="secondary" iconAfter={ChevronDownIcon}>
							Edit
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Item A</DropdownMenuItem>
							<DropdownMenuItem>Item B</DropdownMenuItem>
							<DropdownMenuItem>Item C</DropdownMenuItem>
						</DropdownMenuList>
					</DropdownMenu>
				</Flex>
				<Flex gap={2}>
					<DropdownMenu>
						<DropdownMenuButton
							size="sm"
							variant="primary"
							iconAfter={ChevronDownIcon}
						>
							Actions
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Item A</DropdownMenuItem>
							<DropdownMenuItem>Item B</DropdownMenuItem>
							<DropdownMenuItem>Item C</DropdownMenuItem>
						</DropdownMenuList>
					</DropdownMenu>
					<DropdownMenu>
						<DropdownMenuButton
							size="sm"
							variant="secondary"
							iconAfter={ChevronDownIcon}
						>
							Edit
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Item A</DropdownMenuItem>
							<DropdownMenuItem>Item B</DropdownMenuItem>
							<DropdownMenuItem>Item C</DropdownMenuItem>
						</DropdownMenuList>
					</DropdownMenu>
				</Flex>
			</Stack>
		);
	},
};

export const AccessingState: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				{({ isMenuOpen }) => (
					<Fragment>
						<DropdownMenuButton
							iconAfter={isMenuOpen ? ChevronUpIcon : ChevronDownIcon}
						>
							{isMenuOpen ? 'Close menu' : 'Open menu'}
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Messages</DropdownMenuItem>
							<DropdownMenuItem>Account settings</DropdownMenuItem>
						</DropdownMenuList>
					</Fragment>
				)}
			</DropdownMenu>
		);
	},
};

export const IconsAndBadges: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
					<DropdownMenuItem
						icon={EmailIcon}
						endElement={
							<NotificationBadge value={100} max={99} tone="action" />
						}
					>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem icon={SettingsIcon}>
						Account settings
					</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Divider: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem
						onClick={() => console.log('Profile')}
						icon={AvatarIcon}
					>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => console.log('Messages')}
						icon={EmailIcon}
						endElement={
							<NotificationBadge value={100} max={99} tone="action" />
						}
					>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => console.log('Account settings')}
						icon={SettingsIcon}
					>
						Account settings
					</DropdownMenuItem>
					<DropdownMenuDivider />
					<DropdownMenuItem
						onClick={() => console.log('Account settings')}
						icon={ExitIcon}
					>
						Sign out
					</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Groups: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuGroup label="Services">
						<DropdownMenuItem icon={PrintIcon}>Print online</DropdownMenuItem>
						<DropdownMenuItem icon={CalendarIcon}>Scheduler</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuDivider />
					<DropdownMenuGroup label="Account">
						<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
						<DropdownMenuItem
							icon={EmailIcon}
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Messages
						</DropdownMenuItem>
						<DropdownMenuItem icon={SettingsIcon}>
							Account settings
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuDivider />
					<DropdownMenuItem icon={ExitIcon}>Sign out</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Links: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItemLink href="#link-1">Link 1</DropdownMenuItemLink>
					<DropdownMenuItemLink href="#link-2">Link 2</DropdownMenuItemLink>
					<DropdownMenuItemLink href="#link-3">Link 3</DropdownMenuItemLink>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const LinksExternal: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItemLink
						href="https://apple.com"
						target="_blank"
						icon={ExternalLinkIcon}
					>
						Apple
					</DropdownMenuItemLink>
					<DropdownMenuItemLink
						href="https://google.com"
						target="_blank"
						icon={ExternalLinkIcon}
					>
						Google
					</DropdownMenuItemLink>
					<DropdownMenuItemLink
						href="https://microsoft.com"
						target="_blank"
						icon={ExternalLinkIcon}
					>
						Microsoft
					</DropdownMenuItemLink>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const RadioGroups: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuGroup label="Businesses">
						<DropdownMenuItemRadio
							checked={selectedItem === 'Antfix'}
							onClick={() => setSelectedItem('Antfix')}
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Produce Fresh'}
							onClick={() => setSelectedItem('Produce Fresh')}
						>
							Produce Fresh
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
						>
							Organic Co
						</DropdownMenuItemRadio>
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondary: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuGroup label="Businesses">
						<DropdownMenuItemRadio
							secondaryText="Sydney"
							checked={selectedItem === 'Antfix'}
							onClick={() => setSelectedItem('Antfix')}
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							secondaryText="Brisbane"
							checked={selectedItem === 'Produce Fresh'}
							onClick={() => setSelectedItem('Produce Fresh')}
						>
							Produce Fresh
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							secondaryText="Canberra"
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
						>
							Organic Co
						</DropdownMenuItemRadio>
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondaryBadges: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuGroup label="Businesses">
						<DropdownMenuItemRadio
							secondaryText="Sydney"
							checked={selectedItem === 'Antfix'}
							onClick={() => setSelectedItem('Antfix')}
							endElement={<IndicatorDot />}
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							secondaryText="Brisbane"
							checked={selectedItem === 'Produce Fresh'}
							onClick={() => setSelectedItem('Produce Fresh')}
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Produce Fresh
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							secondaryText="Canberra"
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
						>
							Organic Co
						</DropdownMenuItemRadio>
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Complex: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuGroup label="Businesses">
						<DropdownMenuItemRadio
							checked={true}
							secondaryText="Sydney"
							endElement={<IndicatorDot />}
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={false}
							secondaryText="Brisbane"
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Ashfield
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio checked={false} secondaryText="Canberra">
							Redfern
						</DropdownMenuItemRadio>
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
					<DropdownMenuDivider />
					<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
					<DropdownMenuItem
						icon={EmailIcon}
						endElement={
							<NotificationBadge value={100} max={99} tone="action" />
						}
					>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem icon={SettingsIcon}>
						Account settings
					</DropdownMenuItem>
					<DropdownMenuDivider />
					<DropdownMenuItem icon={ExitIcon}>Sign out</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Placement: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2} alignItems="center">
				<DropdownMenu>
					<DropdownMenuButton>bottom-start (default)</DropdownMenuButton>
					<DropdownMenuList>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Messages</DropdownMenuItem>
						<DropdownMenuItem>Account settings</DropdownMenuItem>
					</DropdownMenuList>
				</DropdownMenu>
				<DropdownMenu popoverPlacement="bottom-end">
					<DropdownMenuButton>bottom-end</DropdownMenuButton>
					<DropdownMenuList>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Messages</DropdownMenuItem>
						<DropdownMenuItem>Account settings</DropdownMenuItem>
					</DropdownMenuList>
				</DropdownMenu>
				<DropdownMenu popoverPlacement="bottom">
					<DropdownMenuButton>bottom</DropdownMenuButton>
					<DropdownMenuList>
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Messages</DropdownMenuItem>
						<DropdownMenuItem>Account settings</DropdownMenuItem>
					</DropdownMenuList>
				</DropdownMenu>
			</Stack>
		);
	},
};

export const MaxHeight: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2} alignItems="flex-start">
				<DropdownMenu>
					<DropdownMenuButton>
						Open dropdown menu (without max height)
					</DropdownMenuButton>
					<DropdownMenuList>
						{Array.from(Array(20).keys()).map((i) => (
							<DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>
						))}
					</DropdownMenuList>
				</DropdownMenu>
				<DropdownMenu popoverMaxHeight={288}>
					<DropdownMenuButton>
						Open dropdown menu (with max height)
					</DropdownMenuButton>
					<DropdownMenuList>
						{Array.from(Array(20).keys()).map((i) => (
							<DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>
						))}
					</DropdownMenuList>
				</DropdownMenu>
			</Stack>
		);
	},
};

export const TableActions: StoryObj = {
	render: function Render() {
		return (
			<PageContent>
				<TableWrapper>
					<Table>
						<TableCaption>Example table with actions</TableCaption>
						<TableHead>
							<tr>
								<TableHeader scope="col">ID</TableHeader>
								<TableHeader scope="col">Example</TableHeader>
								<TableHeader scope="col">Example</TableHeader>
								<TableHeader scope="col" textAlign="right">
									Actions
								</TableHeader>
							</tr>
						</TableHead>
						<TableBody>
							{Array.from(Array(5).keys()).map((idx) => (
								<tr key={idx}>
									<TableCell as="th" scope="row" fontWeight="bold">
										<TextLink href="#">Example Row {idx + 1}</TextLink>
									</TableCell>
									<TableCell>Example</TableCell>
									<TableCell>Example</TableCell>
									<TableCell textAlign="right">
										<DropdownMenu popoverPlacement="bottom-end">
											<DropdownMenuButton>Actions</DropdownMenuButton>
											<DropdownMenuList>
												<DropdownMenuItem icon={EditIcon}>
													Edit
												</DropdownMenuItem>
												<DropdownMenuItem icon={PrintIcon}>
													Print
												</DropdownMenuItem>
												<DropdownMenuItem icon={DownloadIcon}>
													Download
												</DropdownMenuItem>
												<DropdownMenuDivider />
												<DropdownMenuItem icon={DeleteIcon}>
													Delete
												</DropdownMenuItem>
											</DropdownMenuList>
										</DropdownMenu>
									</TableCell>
								</tr>
							))}
						</TableBody>
					</Table>
				</TableWrapper>
			</PageContent>
		);
	},
};
