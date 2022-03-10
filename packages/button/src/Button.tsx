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
	iconBefore?: ComponentType<IconProps>;
	iconAfter?: ComponentType<IconProps>;
	loading?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			block = false,
			iconBefore: IconBefore,
			iconAfter: IconAfter,
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
				{IconBefore ? (
					<IconBefore size={iconSize[size]} weight="regular" />
				) : null}
				{loading ? 'Loading...' : children}
				{IconAfter ? (
					<IconAfter size={iconSize[size]} weight="regular" />
				) : null}
			</button>
		);
	}
);

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	block?: boolean;
	iconBefore?: ComponentType<IconProps>;
	iconAfter?: ComponentType<IconProps>;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export const ButtonLink = ({
	children,
	block = false,
	iconBefore: IconBefore,
	iconAfter: IconAfter,
	size = 'md',
	variant = 'primary',
	...props
}: ButtonLinkProps) => {
	const styles = buttonStyles({ block, size, variant });
	const Link = useLinkComponent();
	return (
		<Link css={styles} {...props}>
			{IconBefore ? (
				<IconBefore size={iconSize[size]} weight="regular" />
			) : null}
			{children}
			{IconAfter ? <IconAfter size={iconSize[size]} weight="regular" /> : null}
		</Link>
	);
};
