import { HTMLAttributes } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { Box, Flex } from '@ag.ds-next/box';
import { mapSpacing, usePrefersReducedMotion } from '@ag.ds-next/core';
import { VisuallyHidden } from '@ag.ds-next/a11y';

const loadingDotsSizes = {
	sm: { gap: 0.5, dotSize: mapSpacing(0.5), dots: 3 },
	md: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 3 },
	lg: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 5 },
} as const;

const AnimatedBox = animated(Box);

type LoadingDotsSizes = keyof typeof loadingDotsSizes;

type DivProps = HTMLAttributes<HTMLDivElement>;

export type LoadingDotsProps = {
	/** Describes the loading element to assistive technologies. */
	label?: string;
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	'aria-live'?: DivProps['aria-live'];
	/** ARIA roles provide semantic meaning to content. */
	role?: DivProps['role'];
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** The size and number of the dots. */
	size?: LoadingDotsSizes;
};

export const LoadingDots = ({
	label,
	'aria-live': ariaLive,
	role,
	className,
	size = 'md',
	...props
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
			aria-live={ariaLive}
			aria-atomic="false"
			role={role}
			{...props}
		>
			{label && <VisuallyHidden>{label}</VisuallyHidden>}
			{trail.map((style, idx) => (
				<AnimatedBox
					key={idx}
					height={dotSize}
					width={dotSize}
					highContrastOutline
					style={style}
					css={{ borderRadius: '50%', background: 'currentColor' }}
					aria-hidden="true"
				/>
			))}
		</Flex>
	);
};
