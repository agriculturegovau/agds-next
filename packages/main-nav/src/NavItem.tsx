import { themeVars, mapSpacing, tokens, outline } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import type { ReactNode } from 'react';

import { localVars } from './MainNavContainer';

export function NavItem({
	children,
	active,
}: {
	children: ReactNode;
	active?: boolean;
}) {
	return (
		<Box
			as="li"
			paddingBottom={0.5}
			css={{
				' a': {
					position: 'relative',
					display: 'block',
					color: themeVars.foreground.action,
					padding: mapSpacing(1),
					textDecoration: 'none',

					'&:after': {
						content: '""',
						height: mapSpacing(0.5),
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
						backgroundColor: 'transparent',
					},

					'&:focus': {
						...outline,
					},

					'&:hover': {
						textDecoration: 'underline',
						textDecorationSkipInk: 'auto',
						color: themeVars.foreground.text,
						backgroundColor: `var(${localVars.linkHoverBg})`,
					},
					...(active
						? {
								fontWeight: tokens.fontWeight.bold,
								color: themeVars.foreground.text,
								'&::after': {
									backgroundColor: `var(${localVars.linkActiveBorder})`,
								},

								'&:hover::after': {
									background: `var(${localVars.linkHoverBg})`,
								},
						  }
						: undefined),
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
