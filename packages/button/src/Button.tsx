import React, {
	DetailedHTMLProps,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { buttonStyles, ButtonSize, ButtonVariant } from './utils';

export function Button({
	block,
	children,
	disabled,
	size,
	loading,
	variant,
	...props
}: {
	block?: boolean;
	loading?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	const styles = buttonStyles({ block, size, variant });
	return (
		<button disabled={disabled} css={styles} {...props}>
			{loading ? 'Loading...' : children}
		</button>
	);
}

export function ButtonLink({
	children,
	href,
	block,
	size,
	variant,
	...props
}: {
	block?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>) {
	const styles = buttonStyles({ block, size, variant });
	const Link = useLinkComponent();
	return (
		<Link href={href} css={styles} {...props}>
			{children}
		</Link>
	);
}
