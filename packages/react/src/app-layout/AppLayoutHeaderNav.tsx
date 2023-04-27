import { Fragment, MouseEventHandler } from 'react';
import { Flex } from '../box';
import { boxPalette, tokens } from '../core';
import { MenuIcon } from '../icon';
import { BaseButton } from '../button';
import { AppLayoutHeaderProps } from './AppLayoutHeader';
import { AppLayoutHeaderAccount } from './AppLayoutHeaderAccount';
import { useAppLayoutContext } from './AppLayoutContext';

export type AppLayoutHeaderNavProps = {
	accountDetails: AppLayoutHeaderProps['accountDetails'];
};

export function AppLayoutHeaderNav({
	accountDetails,
}: AppLayoutHeaderNavProps) {
	const { focusMode, openMobileMenu } = useAppLayoutContext();
	return (
		<Fragment>
			<Flex
				display={{ xs: 'flex', lg: 'none' }}
				background="body"
				alignItems="center"
				justifyContent={focusMode ? 'flex-end' : 'space-between'}
				paddingLeft={0.75}
				paddingRight={tokens.containerPadding}
				height="5.25rem"
				css={{
					'& > a, button': {
						height: '100%',
					},
				}}
			>
				{!focusMode ? (
					<AppLayoutHeaderNavMenuButton onClick={openMobileMenu} />
				) : null}
				<AppLayoutHeaderAccount
					display={{ xs: 'flex', lg: 'none' }}
					{...accountDetails}
				/>
			</Flex>
		</Fragment>
	);
}

function AppLayoutHeaderNavMenuButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Flex
			as={BaseButton}
			onClick={onClick}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap={0.5}
			paddingX={1}
			color="action"
			fontSize="xs"
			focus
			css={{
				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					textDecoration: 'underline',
				},
			}}
		>
			<MenuIcon aria-hidden />
			<span>Menu</span>
		</Flex>
	);
}
