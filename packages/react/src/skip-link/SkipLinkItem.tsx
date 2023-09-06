import { forwardRef, PropsWithChildren } from 'react';
import { buttonStyles } from '../button';
import { visuallyHiddenStyles } from '../a11y';
import { mapSpacing, tokens } from '../core';

export type SkipLinkItemProps = PropsWithChildren<{ href: string }>;

export const SkipLinkItem = forwardRef<HTMLAnchorElement, SkipLinkItemProps>(
	function SkipLinkItem({ children, href }, ref) {
		return (
			<a
				ref={ref}
				href={href}
				css={[
					visuallyHiddenStyles,
					buttonStyles({ block: false, size: 'md', variant: 'primary' }),
					{
						position: 'absolute',
						'&:focus-visible': {
							top: mapSpacing(1),
							left: mapSpacing(1),
							clip: 'auto',
							clipPath: 'none',
							overflow: 'visible',
							whiteSpace: 'normal',
							width: 'auto',
							zIndex: tokens.zIndex.skipLink,
						},
					},
				]}
			>
				{children}
			</a>
		);
	}
);
