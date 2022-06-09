import {
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
import { BaseButton } from './BaseButton';

type CommonButtonProps = {
	block?: boolean;
	iconBefore?: ComponentType<IconProps>;
	iconAfter?: ComponentType<IconProps>;
	loading?: boolean;
	loadingLabel?: string;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	CommonButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(
		{
			type = 'button',
			block = false,
			iconBefore: IconBefore,
			iconAfter: IconAfter,
			children,
			size = 'md',
			loading = false,
			loadingLabel = 'Busy',
			variant = 'primary',
			...props
		},
		ref
	) {
		const styles = buttonStyles({ block, size, variant });
		return (
			<BaseButton ref={ref} css={styles} type={type} {...props}>
				{IconBefore ? (
					<IconBefore size={iconSize[size]} weight="regular" />
				) : null}
				{loading ? (
					<Fragment>
						<HiddenText>{children}</HiddenText>
						<CenteredLoading aria-label={loadingLabel} size={size} />
					</Fragment>
				) : (
					children
				)}
				{IconAfter ? (
					<IconAfter size={iconSize[size]} weight="regular" />
				) : null}
			</BaseButton>
		);
	}
);

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
	CommonButtonProps;

export const ButtonLink = ({
	children,
	block = false,
	iconBefore: IconBefore,
	iconAfter: IconAfter,
	size = 'md',
	loading,
	loadingLabel = 'Busy',
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
					<CenteredLoading aria-label={loadingLabel} size={size} />
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

const CenteredLoading = ({
	'aria-label': ariaLabel,
	size,
}: {
	'aria-label': string;
	size: ButtonSize;
}) => (
	<LoadingDots
		aria-label={ariaLabel}
		aria-live="assertive"
		size={loadingSize[size]}
		css={{
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		}}
	/>
);
