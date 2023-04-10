import { PropsWithChildren } from 'react';
import { Flex } from '../box';
import { mapResponsiveProp, mq, tokens } from '../core';
import { useAppLayoutContext } from './AppLayoutContext';

export type AppLayoutContentProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export function AppLayoutContent({
	background,
	children,
}: AppLayoutContentProps) {
	const { isMenuOpen } = useAppLayoutContext();
	return (
		<Flex
			background={background}
			flexDirection="column"
			// justifyContent = 'flex-start',
			// alignItems = 'stretch',
			css={mq({
				minHeight: '100vh',
				paddingLeft: mapResponsiveProp({
					lg: isMenuOpen ? tokens.maxWidth.mobileMenu : 0,
				}),
			})}
		>
			{children}
		</Flex>
	);
}
