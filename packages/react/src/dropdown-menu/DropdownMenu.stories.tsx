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
import { VisuallyHidden } from '../a11y';
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
								<DropdownMenuButton size={size} variant={variant}>
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
			<Stack alignItems="center" gap={2}>
				{placements.map((placement) => (
					<DropdownMenu key={placement} popoverPlacement={placement}>
						<DropdownMenuButton variant="primary">
							{placement}
						</DropdownMenuButton>
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
						endElement={
							<Fragment>
								<NotificationBadge
									aria-hidden
									max={99}
									tone="action"
									value={100}
								/>
								<VisuallyHidden>, 99 plus unread</VisuallyHidden>
							</Fragment>
						}
						icon={EmailIcon}
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
						icon={AvatarIcon}
						onClick={() => console.log('Profile')}
					>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						endElement={
							<Fragment>
								<NotificationBadge
									aria-hidden
									max={99}
									tone="action"
									value={100}
								/>
								<VisuallyHidden>, 99 plus unread</VisuallyHidden>
							</Fragment>
						}
						icon={EmailIcon}
						onClick={() => console.log('Messages')}
					>
						Messages
					</DropdownMenuItem>
					<DropdownMenuItem
						icon={SettingsIcon}
						onClick={() => console.log('Account settings')}
					>
						Account settings
					</DropdownMenuItem>
					<DropdownMenuDivider />
					<DropdownMenuItem
						icon={ExitIcon}
						onClick={() => console.log('Account settings')}
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
							endElement={
								<Fragment>
									<NotificationBadge
										aria-hidden
										max={99}
										tone="action"
										value={100}
									/>
									<VisuallyHidden>, 99 plus unread</VisuallyHidden>
								</Fragment>
							}
							icon={EmailIcon}
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
						icon={ExternalLinkIcon}
						target="_blank"
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
							checked={selectedItem === 'Antfix'}
							onClick={() => setSelectedItem('Antfix')}
							secondaryText="Sydney"
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Produce Fresh'}
							onClick={() => setSelectedItem('Produce Fresh')}
							secondaryText="Brisbane"
						>
							Produce Fresh
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
							secondaryText="Canberra"
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
							checked={selectedItem === 'Antfix'}
							endElement={<IndicatorDot />}
							onClick={() => setSelectedItem('Antfix')}
							secondaryText="Sydney"
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Produce Fresh'}
							endElement={
								<Fragment>
									<NotificationBadge
										aria-hidden
										max={99}
										tone="action"
										value={100}
									/>
									<VisuallyHidden>, 100 notifications</VisuallyHidden>
								</Fragment>
							}
							onClick={() => setSelectedItem('Produce Fresh')}
							secondaryText="Brisbane"
						>
							Produce Fresh
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={selectedItem === 'Organic Co'}
							onClick={() => setSelectedItem('Organic Co')}
							secondaryText="Canberra"
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
			<Stack alignItems="flex-start" gap={2}>
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

export const Offset: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu popoverOffset={-8}>
				<DropdownMenuButton variant="primary">
					Toggle dropdown menu
				</DropdownMenuButton>
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

export const Complex: StoryObj = {
	render: function Render() {
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
					<DropdownMenuGroup label="Businesses">
						<DropdownMenuItemRadio
							checked
							endElement={<IndicatorDot />}
							secondaryText="ABN 00 000 000 000"
						>
							Antfix
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={false}
							endElement={
								<Fragment>
									<NotificationBadge
										aria-hidden
										max={99}
										tone="action"
										value={100}
									/>
									<VisuallyHidden>, 100 notifications</VisuallyHidden>
								</Fragment>
							}
							secondaryText="ABN 00 000 000 000"
						>
							Ashfield
						</DropdownMenuItemRadio>
						<DropdownMenuItemRadio
							checked={false}
							secondaryText="ABN 00 000 000 000"
						>
							Redfern
						</DropdownMenuItemRadio>
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
					<DropdownMenuDivider />
					<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
					<DropdownMenuItem
						endElement={
							<Fragment>
								<NotificationBadge
									aria-hidden
									max={99}
									tone="action"
									value={100}
								/>
								<VisuallyHidden>, 99 plus unread</VisuallyHidden>
							</Fragment>
						}
						icon={EmailIcon}
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

export const LongLabels: StoryObj = {
	render: function Render() {
		const businessNames = [
			'Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada consectetur',
			'Iaculis tortor duis ante nec risus elementum id ui',
			'APurus tortor lacus malesuada phasellus ipsum ex duis libero ante id',
		];
		return (
			<DropdownMenu>
				<DropdownMenuButton>Toggle dropdown menu</DropdownMenuButton>
				<DropdownMenuPanel>
					<DropdownMenuGroup label="Businesses">
						{businessNames.map((name) => (
							<DropdownMenuItemRadio
								checked
								endElement={<IndicatorDot />}
								key={name}
								secondaryText="ABN 00 000 000 000"
							>
								{name}
							</DropdownMenuItemRadio>
						))}
						<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
					</DropdownMenuGroup>
					<DropdownMenuDivider />
					<DropdownMenuItem icon={AvatarIcon}>
						Phasellus ipsum ex duis libero ante
					</DropdownMenuItem>
					<DropdownMenuItem
						endElement={
							<Fragment>
								<NotificationBadge
									aria-hidden
									max={99}
									tone="action"
									value={100}
								/>
								<VisuallyHidden>, 99 plus unread</VisuallyHidden>
							</Fragment>
						}
						icon={EmailIcon}
					>
						APurus tortor lacus malesuada phasellus ipsum ex duis libero ante
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
