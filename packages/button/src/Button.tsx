import React, {
	DetailedHTMLProps,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { buttonStyles, ButtonVariant } from './utils';

export function Button({
	block,
	children,
	disabled,
	loading,
	variant,
	...props
}: {
	block?: boolean;
	disabled?: boolean;
	loading?: boolean;
	variant?: ButtonVariant;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	const styles = buttonStyles({ block, disabled, variant });
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
	variant,
	...props
}: {
	href: string;
	block?: boolean;
	variant?: ButtonVariant;
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>) {
	const styles = buttonStyles({ block, variant });
	const Link = useLinkComponent();

	return (
		<Link href={href} css={styles} {...props}>
			{children}
		</Link>
	);
}
