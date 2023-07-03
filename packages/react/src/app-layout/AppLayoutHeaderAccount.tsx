import { Avatar } from '../avatar';
import { Flex, FlexProps } from '../flex';
// import { useLinkComponent } from '../core';
import { Text } from '../text';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuItem,
	DropdownMenuList,
	DropdownMenuRadioGroup,
	DropdownMenuRadioGroupLink,
	DropdownMenuRadioItem,
} from '../dropdown-menu';
import { IndicatorDot } from '../indicator-dot';
import { NotificationBadge } from '../notification-badge';
import { AvatarIcon, EmailIcon, ExitIcon, SettingsIcon } from '../icon';
import type { AppLayoutHeaderProps } from './AppLayoutHeader';

export type AppLayoutHeaderAccountProps =
	AppLayoutHeaderProps['accountDetails'] & {
		display?: FlexProps['display'];
	};

export function AppLayoutHeaderAccount({
	name,
	secondaryText,
}: // href,
// display,
AppLayoutHeaderAccountProps) {
	// const Link = useLinkComponent();
	return (
		<DropdownMenu>
			<DropdownMenuButton>
				<Flex as="span" gap={0.5}>
					<Flex as="span" flexDirection="column" css={{ textAlign: 'right' }}>
						<Text
							color="action"
							fontWeight="bold"
							fontSize="xs"
							css={{
								// Wrap long names at a sensible width
								maxWidth: '16rem',
							}}
						>
							{name}
						</Text>
						{secondaryText ? (
							<Text color="muted" fontSize="xs">
								{secondaryText}
							</Text>
						) : null}
					</Flex>
					<Avatar name={name} tone="action" aria-hidden size="md" />
				</Flex>
			</DropdownMenuButton>
			<DropdownMenuList palette="light">
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
				<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
				<DropdownMenuItem
					icon={EmailIcon}
					endElement={<NotificationBadge value={100} max={99} tone="action" />}
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
}
