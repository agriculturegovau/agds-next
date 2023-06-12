import { HTMLAttributes } from 'react';
import { keyframes } from '@emotion/react';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapSpacing } from '../core';
import { VisuallyHidden } from '../a11y';

const loadingDotsSizes = {
	sm: { gap: 0.5, dotSize: mapSpacing(0.5), dots: 3 },
	md: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 3 },
	lg: { gap: 0.5, dotSize: mapSpacing(0.75), dots: 5 },
} as const;

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
	const dotsArr = Array.from(Array(dots).keys());
	return (
		<Flex
			as="span"
			gap={gap}
			className={className}
			aria-live={ariaLive}
			aria-atomic="false"
			role={role}
			{...props}
		>
			{label && <VisuallyHidden>{label}</VisuallyHidden>}
			{dotsArr.map((idx) => (
				<Box
					key={idx}
					as="span"
					height={dotSize}
					width={dotSize}
					highContrastOutline
					aria-hidden="true"
					css={{
						opacity: 0,
						background: 'currentColor',
						borderRadius: '50%',
						animationName: fadeInOut,
						animationDuration: '1250ms',
						animationIterationCount: 'infinite',
						animationDelay: `${idx * 100}ms`,
					}}
				/>
			))}
		</Flex>
	);
};

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
	100% { opacity: 0 }
`;
