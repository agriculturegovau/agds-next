import React, {
	DetailedHTMLProps,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { useButtonStyles, ButtonWeight } from './utils';

export function Button({
	block,
	children,
	disabled,
	loading,
	weight,
	...props
}: {
	block?: boolean;
	disabled?: boolean;
	loading?: boolean;
	weight?: ButtonWeight;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	const buttonStyles = useButtonStyles({ block, disabled, weight });
	return (
		<button disabled={disabled} css={buttonStyles} {...props}>
			{loading ? 'Loading...' : children}
		</button>
	);
}

export function ButtonLink({
	children,
	href,
	block,
	weight,
	...props
}: {
	href: string;
	block?: boolean;
	weight?: ButtonWeight;
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>) {
	const buttonStyles = useButtonStyles({ block, weight });
	const Link = useLinkComponent();

	return (
		<Link href={href} css={buttonStyles} {...props}>
			{children}
		</Link>
	);
}
