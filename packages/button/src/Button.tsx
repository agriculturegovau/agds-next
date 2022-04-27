import React, {
	forwardRef,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
	ComponentType,
	Fragment,
	ReactNode,
} from 'react';
import { useLinkComponent } from '@ag.ds-next/core';
import { IconProps } from '@ag.ds-next/icon';
import { LoadingDots } from '@ag.ds-next/loading';
import {
	buttonStyles,
	ButtonSize,
	ButtonVariant,
	iconSize,
	loadingSize,
} from './styles';

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
				{loading ? (
					<Fragment>
						<HiddenText>{children}</HiddenText>
						<CenteredLoading size={size} />
					</Fragment>
				) : (
					children
				)}
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
	loading?: boolean;
	variant?: ButtonVariant;
};

export const ButtonLink = ({
	children,
	block = false,
	iconBefore: IconBefore,
	iconAfter: IconAfter,
	size = 'md',
	loading,
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
			{loading ? (
				<Fragment>
					<HiddenText>{children}</HiddenText>
					<CenteredLoading size={size} />
				</Fragment>
			) : (
				children
			)}
			{IconAfter ? <IconAfter size={iconSize[size]} weight="regular" /> : null}
		</Link>
	);
};

const HiddenText = ({ children }: { children: ReactNode }) => (
	<span css={{ visibility: 'hidden' }}>{children}</span>
);

const CenteredLoading = ({ size }: { size: ButtonSize }) => (
	<LoadingDots
		size={loadingSize[size]}
		css={{
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		}}
	/>
);
