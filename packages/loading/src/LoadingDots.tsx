import { Box, Flex } from '@ag.ds-next/box';
import { mapSpacing, usePrefersReducedMotion } from '@ag.ds-next/core';
import { useTrail, animated } from 'react-spring';

const loadingDotsSizes = {
	sm: { gap: 0.5, dotSize: mapSpacing(0.5), dots: 3 },
	md: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 3 },
	lg: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 5 },
} as const;

const AnimatedBox = animated(Box);

type LoadingDotsSizes = keyof typeof loadingDotsSizes;

export type LoadingDotsProps = {
	'aria-label'?: string;
	className?: string;
	size?: LoadingDotsSizes;
};

export const LoadingDots = ({
	'aria-label': ariaLabel,
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
		<Flex gap={gap} className={className} aria-label={ariaLabel}>
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
