import { ComponentType, forwardRef } from 'react';
import { LinkProps, useLinkComponent } from '../core';
import { IconProps } from '../icon';
import { LoadingDots } from '../loading';
import { BoxProps } from '../box';
import {
	buttonStyles,
	ButtonSize,
	ButtonVariant,
	iconSize,
	loadingSize,
} from './styles';
import { BaseButton, BaseButtonProps } from './BaseButton';

type CommonButtonProps = {
	/** If true, the button will stretch to the fill the width of its container. */
	block?: boolean;
	/** Display a focus indicator when the button receives focus. By default, this is set to 'keyboard'. 'all' shows for all users, includes programmatic focus, and 'keyboard' is for keyboard-only focus. */
	focusRingFor?: BoxProps['focusRingFor'];
	/** The icon to display before the buttons children. */
	iconBefore?: ComponentType<IconProps>;
	/** The icon to display after the buttons children. */
	iconAfter?: ComponentType<IconProps>;
	/** The size of the button. */
	size?: ButtonSize;
	/** The variant of the button. */
	variant?: ButtonVariant;
};

type LoadingButtonProps = {
	/** When true, the button will display a loading indicator. */
	loading?: boolean;
	/** Text to read out to assistive technologies when button is loading. */
	loadingLabel?: string;
};

export type ButtonProps = CommonButtonProps &
	LoadingButtonProps &
	BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			alignSelf,
			block = false,
			children,
			focusRingFor = 'keyboard',
			iconAfter: IconAfter,
			iconBefore: IconBefore,
			loading = false,
			loadingLabel = 'Busy',
			size = 'md',
			type = 'button',
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({
			alignSelf,
			block,
			focusRingFor,
			size,
			variant,
		});
		return (
			<BaseButton ref={ref} css={styles} type={type} {...props}>
				{IconBefore ? (
					<IconBefore
						size={iconSize[size]}
						weight="regular"
						css={{ flexShrink: 0 }}
					/>
				) : null}
				<span>
					<span css={{ opacity: loading ? 0 : 1 }}>{children}</span>
					<ButtonLoadingDots
						loading={loading}
						label={loadingLabel}
						size={size}
					/>
				</span>
				{IconAfter ? (
					<IconAfter
						size={iconSize[size]}
						weight="regular"
						css={{ flexShrink: 0 }}
					/>
				) : null}
			</BaseButton>
		);
	}
);

export type ButtonLinkProps = CommonButtonProps & LinkProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	function ButtonLink(
		{
			children,
			block = false,
			focusRingFor = 'keyboard',
			iconBefore: IconBefore,
			iconAfter: IconAfter,
			size = 'md',
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({ block, focusRingFor, size, variant });
		const Link = useLinkComponent();
		return (
			<Link ref={ref} css={styles} {...props}>
				{IconBefore ? (
					<IconBefore size={iconSize[size]} weight="regular" />
				) : null}
				{children}
				{IconAfter ? (
					<IconAfter size={iconSize[size]} weight="regular" />
				) : null}
			</Link>
		);
	}
);

const ButtonLoadingDots = ({
	label,
	loading,
	size,
}: {
	label: string;
	loading?: boolean;
	size: ButtonSize;
}) => {
	// aria-live container must be present in the DOM before the loading dots are added
	return (
		<span aria-live="assertive">
			{loading ? (
				<LoadingDots
					label={label}
					size={loadingSize[size]}
					css={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
			) : null}
		</span>
	);
};
