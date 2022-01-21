import React, {
	DetailedHTMLProps,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { useButtonStyles, ButtonWeight } from './utils';

export function Button({
	children,
	disabled,
	loading,
	weight,
	...props
}: {
	weight?: ButtonWeight;
	loading?: boolean;
	disabled?: boolean;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) {
	const buttonStyles = useButtonStyles({ disabled, weight });
	return (
		<button css={buttonStyles} {...props}>
			{loading ? 'Loading...' : children}
		</button>
	);
}

export function ButtonLink({
	children,
	href,
	weight,
	...props
}: { weight?: ButtonWeight; href: string } & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>) {
	const buttonStyles = useButtonStyles({ weight });
	const Link = useLinkComponent();

	return (
		<Link href={href} css={buttonStyles} {...props}>
			{children}
		</Link>
	);
}
