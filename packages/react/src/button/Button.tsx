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

type CommonButtonProps = Pick<BoxProps, 'alignSelf'> & {
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
			<BaseButton css={styles} ref={ref} type={type} {...props}>
				{IconBefore ? (
					<IconBefore
						css={{ flexShrink: 0, opacity: loading ? 0 : 1 }}
						size={iconSize[size]}
						weight="regular"
					/>
				) : null}
				{children ? (
					<span>
						<span css={{ opacity: loading ? 0 : 1 }}>{children}</span>
						<ButtonLoadingDots
							label={loadingLabel}
							loading={loading}
							size={size}
						/>
					</span>
				) : null}
				{IconAfter ? (
					<IconAfter
						css={{ flexShrink: 0, opacity: loading ? 0 : 1 }}
						size={iconSize[size]}
						weight="regular"
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
			alignSelf,
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
		const styles = buttonStyles({
			alignSelf,
			block,
			focusRingFor,
			size,
			variant,
		});
		const Link = useLinkComponent();
		return (
			<Link css={styles} ref={ref} {...props}>
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
					css={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
					label={label}
					size={loadingSize[size]}
				/>
			) : null}
		</span>
	);
};
