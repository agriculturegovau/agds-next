import { Box, Flex } from '@ag.ds-next/box';
import { mapSpacing, usePrefersReducedMotion } from '@ag.ds-next/core';
import { HTMLAttributes } from 'react';
import { useTrail, animated } from '@react-spring/web';

const loadingDotsSizes = {
	sm: { gap: 0.5, dotSize: mapSpacing(0.5), dots: 3 },
	md: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 3 },
	lg: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 5 },
} as const;

const AnimatedBox = animated(Box);

type LoadingDotsSizes = keyof typeof loadingDotsSizes;

type HTMLProps = Pick<
	HTMLAttributes<HTMLDivElement>,
	'aria-label' | 'aria-live' | 'role'
>;

export type LoadingDotsProps = HTMLProps & {
	'aria-label'?: string;
	'aria-live'?: 'off' | 'assertive' | 'polite';
	className?: string;
	/** The size and number of the dots */
	size?: LoadingDotsSizes;
};

export const LoadingDots = ({
	'aria-label': ariaLabel,
	'aria-live': ariaLive,
	role,
	className,
	size = 'md',
}: LoadingDotsProps) => {
	const { gap, dots, dotSize } = loadingDotsSizes[size];

	const prefersReducedMotion = usePrefersReducedMotion();
	const trail = useTrail(
		dots,
		prefersReducedMotion
			? { from: { opacity: 1 }, to: { opacity: 1 } }
			: {
					from: { opacity: 0 },
					to: { opacity: 1 },
					loop: { reverse: true, delay: 0 },
					reset: true,
			  }
	);

	return (
		<Flex
			gap={gap}
			className={className}
			aria-label={ariaLabel}
			aria-live={ariaLive}
			role={role}
		>
			{trail.map((style, idx) => (
				<AnimatedBox
					key={idx}
					height={dotSize}
					width={dotSize}
					style={style}
					css={{ borderRadius: '50%', background: 'currentColor' }}
				/>
			))}
		</Flex>
	);
};
