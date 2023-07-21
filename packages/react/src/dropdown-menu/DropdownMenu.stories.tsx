import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { BaseButton, ButtonGroup } from '../button';
import {
	EmailIcon,
	ExitIcon,
	SettingsIcon,
	AvatarIcon,
	PrintIcon,
	CalendarIcon,
	ExternalLinkIcon,
} from '../icon';
import { IndicatorDot } from '../indicator-dot';
import { NotificationBadge } from '../notification-badge';
import { Stack } from '../stack';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuGroupLink,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
	useDropdownMenuButton,
} from './index';

const meta: Meta = {
	title: 'layout/DropdownMenu',
};

export default meta;

export const Basic: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
					<DropdownMenuItem onClick={() => console.log('Profile')}>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => console.log('Messages')}>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => console.log('Account settings')}>
						Account settings
					</DropdownMenuItem>
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const AccessingState: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				{({ isMenuOpen }) => (
					<Fragment>
						<DropdownMenuButton>
							{isMenuOpen ? 'Close dropdown menu' : 'Open dropdown menu'}
						</DropdownMenuButton>
						<DropdownMenuPanel>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Messages</DropdownMenuItem>
							<DropdownMenuItem>Account settings</DropdownMenuItem>
						</DropdownMenuPanel>
					</Fragment>
				)}
			</DropdownMenu>
		);
	},
};

export const Triggers: StoryObj = {
	render: function Render() {
		const sizes = ['md', 'sm'] as const;
		const variants = ['primary', 'secondary', 'tertiary', 'text'] as const;
		return (
			<Stack gap={1}>
				{sizes.map((size) => (
					<ButtonGroup key={size}>
						{variants.map((variant) => (
							<DropdownMenu key={variant}>
								<DropdownMenuButton variant={variant} size={size}>
									Actions
								</DropdownMenuButton>
								<DropdownMenuPanel>
									<DropdownMenuItem>Item A</DropdownMenuItem>
									<DropdownMenuItem>Item B</DropdownMenuItem>
									<DropdownMenuItem>Item C</DropdownMenuItem>
								</DropdownMenuPanel>
							</DropdownMenu>
						))}
					</ButtonGroup>
				))}
			</Stack>
		);
	},
};

export const UnstyledTrigger: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuCustomTrigger />
				<DropdownMenuPanel>
					<DropdownMenuItem>Item A</DropdownMenuItem>
					<DropdownMenuItem>Item B</DropdownMenuItem>
					<DropdownMenuItem>Item C</DropdownMenuItem>
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

function DropdownMenuCustomTrigger() {
	const buttonProps = useDropdownMenuButton();
	return <BaseButton {...buttonProps}>Unstyled button</BaseButton>;
}

export const Placement: StoryObj = {
	render: function Render() {
		const placements = ['bottom-start', 'bottom-end', 'bottom'] as const;
		return (
			<Stack gap={2} alignItems="center">
				{placements.map((placement) => (
					<DropdownMenu key={placement} popoverPlacement={placement}>
						<DropdownMenuButton>{placement}</DropdownMenuButton>
						<DropdownMenuPanel>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Messages</DropdownMenuItem>
							<DropdownMenuItem>Account settings</DropdownMenuItem>
						</DropdownMenuPanel>
					</DropdownMenu>
				))}
			</Stack>
		);
	},
};

export const IconsAndBadges: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const Divider: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const Groups: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const Links: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
					<DropdownMenuItemLink href="#link-1">Link 1</DropdownMenuItemLink>
					<DropdownMenuItemLink href="#link-2">Link 2</DropdownMenuItemLink>
					<DropdownMenuItemLink
						href="https://www.agriculture.gov.au"
						target="_blank"
						icon={ExternalLinkIcon}
					>
						External link
					</DropdownMenuItemLink>
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const RadioGroups: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondary: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const RadioGroupsSecondaryBadges: StoryObj = {
	render: function Render() {
		const [selectedItem, setSelectedItem] = useState<string>('Antfix');
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};

export const Overflow: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2} alignItems="flex-start">
				<DropdownMenu>
					<DropdownMenuButton>
						Toggle dropdown menu (without max height)
					</DropdownMenuButton>
					<DropdownMenuPanel>
						{Array.from(Array(20).keys()).map((i) => (
							<DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>
						))}
					</DropdownMenuPanel>
				</DropdownMenu>
				<DropdownMenu popoverMaxHeight={288}>
					<DropdownMenuButton>
						Toggle dropdown menu (with max height)
					</DropdownMenuButton>
					<DropdownMenuPanel>
						{Array.from(Array(20).keys()).map((i) => (
							<DropdownMenuItem key={i}>Item {i + 1}</DropdownMenuItem>
						))}
					</DropdownMenuPanel>
				</DropdownMenu>
			</Stack>
		);
	},
};

export const Complex: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
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
				</DropdownMenuPanel>
			</DropdownMenu>
		);
	},
};
