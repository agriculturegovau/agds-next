import React, {
	forwardRef,
	DetailedHTMLProps,
	AnchorHTMLAttributes,
} from 'react';
import { buttonStyles } from '@ag.ds-next/button';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { mapSpacing } from '@ag.ds-next/core';

export type SkipLinkProps = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
	function SkipLink({ children, ...props }, ref) {
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
