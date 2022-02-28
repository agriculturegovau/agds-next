import React, {
	forwardRef,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { buttonStyles, ButtonSize, ButtonVariant } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	block?: boolean;
	loading?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{ block, children, disabled, size, loading, variant, ...props },
		ref
	) {
		const styles = buttonStyles({ block, size, variant });
		return (
			<button ref={ref} disabled={disabled} css={styles} {...props}>
				{loading ? 'Loading...' : children}
			</button>
		);
	}
);

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	block?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	function ButtonLink({ children, block, size, variant, ...props }, ref) {
		const styles = buttonStyles({ block, size, variant });
		const Link = useLinkComponent();
		return (
			<Link ref={ref} css={styles} {...props}>
				{children}
			</Link>
		);
	}
);
