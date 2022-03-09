import React, {
	forwardRef,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
	ComponentType,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { IconProps } from '@ag.ds-next/icon';
import { buttonStyles, ButtonSize, ButtonVariant, iconSize } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	block?: boolean;
	icon?: ComponentType<IconProps>;
	loading?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			block = false,
			icon: Icon,
			children,
			disabled,
			size = 'md',
			loading = false,
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({ block, size, variant });
		return (
			<button ref={ref} disabled={disabled} css={styles} {...props}>
				{loading ? 'Loading...' : children}
				{Icon ? <Icon size={iconSize[size]} weight="regular" /> : null}
			</button>
		);
	}
);

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	block?: boolean;
	icon?: ComponentType<IconProps>;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const ButtonLink = ({
	children,
	block = false,
	icon: Icon,
	size = 'md',
	variant = 'primary',
	...props
}: ButtonLinkProps) => {
	const styles = buttonStyles({ block, size, variant });
	const Link = useLinkComponent();
	return (
		<Link css={styles} {...props}>
			{children}
			{Icon ? <Icon size={iconSize[size]} /> : null}
		</Link>
	);
};
