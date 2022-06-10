import { ComponentType, Fragment, ReactNode, PropsWithChildren } from 'react';
import { forwardRefWithAs } from '@ag.ds-next/core';
import { IconProps } from '@ag.ds-next/icon';
import { LoadingDots } from '@ag.ds-next/loading';
import { BaseButton } from './BaseButton';
import {
	buttonStyles,
	ButtonSize,
	ButtonVariant,
	iconSize,
	loadingSize,
} from './styles';

type ButtonProps = PropsWithChildren<{
	block?: boolean;
	iconBefore?: ComponentType<IconProps>;
	iconAfter?: ComponentType<IconProps>;
	loading?: boolean;
	loadingLabel?: string;
	size?: ButtonSize;
	variant?: ButtonVariant;
}>;

export const Button = forwardRefWithAs<'button', ButtonProps>(function Button(
	{
		as: Tag = BaseButton,
		children,
		block = false,
		iconBefore: IconBefore,
		iconAfter: IconAfter,
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
		<Tag ref={ref} css={styles} {...props}>
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
		</Tag>
	);
});

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
