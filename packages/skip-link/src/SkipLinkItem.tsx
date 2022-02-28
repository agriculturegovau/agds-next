import React, { forwardRef, AnchorHTMLAttributes } from 'react';
import { buttonStyles } from '@ag.ds-next/button';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { mapSpacing } from '@ag.ds-next/core';

export type SkipLinkItemProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkipLinkItem = forwardRef<HTMLAnchorElement, SkipLinkItemProps>(
	function SkipLinkItem({ children, ...props }, ref) {
		return (
			<a
				ref={ref}
				css={[
					visuallyHiddenStyles,
					buttonStyles({ block: false, size: 'md', variant: 'primary' }),
					{
						'&:focus': {
							top: mapSpacing(1),
							left: mapSpacing(1),
							clip: 'auto',
							clipPath: 'none',
							overflow: 'visible',
							whiteSpace: 'normal',
							width: 'auto',
						},
					},
				]}
				{...props}
			>
				{children}
			</a>
		);
	}
);
