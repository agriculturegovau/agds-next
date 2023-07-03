import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PageContent } from '../content';
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
import { Text } from '../text';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuList,
	DropdownMenuRadioGroup,
	DropdownMenuRadioGroupLink,
	DropdownMenuRadioItem,
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
					<DropdownMenuItem onSelect={() => console.log('Profile')}>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => console.log('Messages')}>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => console.log('Account settings')}>
						Account settings
					</DropdownMenuItem>
				</DropdownMenuList>
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
						onSelect={() => console.log('Profile')}
						icon={AvatarIcon}
					>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						onSelect={() => console.log('Messages')}
						icon={EmailIcon}
						endElement={
							<NotificationBadge value={100} max={99} tone="action" />
						}
					>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem
						onSelect={() => console.log('Account settings')}
						icon={SettingsIcon}
					>
						Account settings
					</DropdownMenuItem>
					<DropdownMenuDivider />
					<DropdownMenuItem
						onSelect={() => console.log('Account settings')}
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

export const ButtonTrigger: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton variant="secondary" iconBefore={EditIcon}>
					Actions
				</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem>Item A</DropdownMenuItem>
					<DropdownMenuItem>Item B</DropdownMenuItem>
					<DropdownMenuItem>Item C</DropdownMenuItem>
					<DropdownMenuItem>Item D</DropdownMenuItem>
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
					<DropdownMenuItemLink href="https://apple.com">
						Apple
					</DropdownMenuItemLink>
					<DropdownMenuItemLink href="https://google.com">
						Google
					</DropdownMenuItemLink>
					<DropdownMenuItemLink href="https://microsoft.com">
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
					<DropdownMenuRadioGroup label="Businesses">
						<DropdownMenuRadioItem
							checked={selectedItem === 'Antfix'}
							onClick={() => setSelectedItem('Antfix')}
						>
							Antfix
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							checked={selectedItem === 'Produce Fresh'}
							onClick={() => setSelectedItem('Produce Fresh')}
						>
							Produce Fresh
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
						>
							Organic Co
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondary: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuRadioGroup label="Businesses">
						<DropdownMenuRadioItem checked={true} secondaryText="Sydney">
							Antfix
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem checked={false} secondaryText="Brisbane">
							Ashfield
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem checked={false} secondaryText="Canberra">
							Redfern
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondaryBadges: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuRadioGroup label="Businesses">
						<DropdownMenuRadioItem
							checked={true}
							secondaryText="Sydney"
							endElement={<IndicatorDot />}
						>
							Antfix
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							checked={false}
							secondaryText="Brisbane"
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Ashfield
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem checked={false} secondaryText="Canberra">
							Redfern
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuList>
			</DropdownMenu>
		);
	},
};

export const Complex: StoryObj = {
	render: function Render() {
		const [lastAction, setLastAction] = useState<string>();
		return (
			<Stack gap={2}>
				<DropdownMenu>
					<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
					<DropdownMenuList>
						<DropdownMenuRadioGroup label="Businesses">
							<DropdownMenuRadioItem
								checked={true}
								secondaryText="Sydney"
								endElement={<IndicatorDot />}
							>
								Antfix
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem
								checked={false}
								secondaryText="Brisbane"
								endElement={
									<NotificationBadge value={100} max={99} tone="action" />
								}
							>
								Ashfield
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem checked={false} secondaryText="Canberra">
								Redfern
							</DropdownMenuRadioItem>
							<DropdownMenuRadioGroupLink href="#">
								View all
							</DropdownMenuRadioGroupLink>
						</DropdownMenuRadioGroup>
						<DropdownMenuDivider />
						<DropdownMenuItem
							onSelect={() => setLastAction('Profile')}
							icon={AvatarIcon}
						>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => setLastAction('Messages')}
							icon={EmailIcon}
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Messages
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => setLastAction('Account settings')}
							icon={SettingsIcon}
						>
							Account settings
						</DropdownMenuItem>
						<DropdownMenuDivider />
						<DropdownMenuItem
							onSelect={() => console.log('Account settings')}
							icon={ExitIcon}
						>
							Sign out
						</DropdownMenuItem>
					</DropdownMenuList>
				</DropdownMenu>
				{lastAction && <Text>Last action: {lastAction}</Text>}
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
						<TableCaption>Example table</TableCaption>
						<TableHead>
							<tr>
								<TableHeader scope="col">Example</TableHeader>
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
									<TableCell as="th" scope="row">
										Row {idx + 1}
									</TableCell>
									<TableCell>Example</TableCell>
									<TableCell>Example</TableCell>
									<TableCell textAlign="right">
										<DropdownMenu>
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
