import { themeVars, mapSpacing, tokens } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import type { ReactNode } from 'react';

import { localVars } from './MainNavContainer';

export function NavItem({ children }: { children: ReactNode }) {
	return (
		<Box
			as="li"
			css={{
				'> a': {
					display: 'block',
					color: themeVars.foreground.action,
					padding: mapSpacing(0.5),
					textDecoration: 'none',
					borderBottomWidth: mapSpacing(0.5),
					borderStyle: 'solid',
					borderColor: 'transparent',
				},
				'> a:hover': {
					textDecoration: 'underline',
					textDecorationSkipInk: 'auto',
					color: themeVars.foreground.text,
					backgroundColor: `var(${localVars.linkHoverBg})`,
				},
				'> a.active': {
					fontWeight: tokens.fontWeight.bold,
					color: themeVars.foreground.text,

					'&:hover': {
						borderColor: `var(${localVars.linkActiveBorder})`,
					},
				},
			}}
		>
			{children}
		</Box>
	);
}

/**
 * ActiveClassName
 *
 * https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
 */
