import {
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Box } from '../box';
import { boxPalette } from '../core';
import { Flex } from '../flex';
import { ScrollbarArrowLeftIcon, ScrollbarArrowRightIcon } from '../icon';

export type ScrollbarProps = { children: ReactNode };

export function Scrollbar(props: ScrollbarProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLButtonElement>(null);
	const scrollerRef = useRef<HTMLDivElement>(null);
	const mousePos = useRef({ x: 0, y: 0 });

	const [isDraggingThumb, setIsDraggingThumb] = useState(false);
	const [thumbPosition, setThumbPosition] = useState(0);
	const [thumbWidthRatio, setThumbWidthRatio] = useState(0);

	const repositionThumb = useCallback(() => {
		if (!scrollerRef?.current) {
			return;
		}

		setThumbPosition(scrollerRef.current.scrollLeft * thumbWidthRatio);
	}, [scrollerRef, thumbWidthRatio]);

	const calculateThumbWidth = useCallback(() => {
		if (!scrollerRef?.current) {
			return;
		}

		setThumbWidthRatio(
			(scrollerRef?.current.offsetWidth - 56) /
				(scrollerRef?.current.scrollWidth - 56)
		);
	}, [scrollerRef, setThumbWidthRatio]);

	useEffect(() => {
		calculateThumbWidth();
	}, [calculateThumbWidth]);

	useEffect(() => {
		if (
			typeof window === 'undefined' ||
			!('ResizeObserver' in window) ||
			!scrollerRef.current
		) {
			return;
		}

		const observer = new ResizeObserver(() => {
			calculateThumbWidth();
			repositionThumb();
		});

		observer.observe(scrollerRef.current);

		return () => {
			observer.disconnect();
		};
	}, [calculateThumbWidth, repositionThumb, scrollerRef]);

	const handleThumbPress = (event: React.MouseEvent | React.TouchEvent) => {
		event.preventDefault();

		if (event.type === 'mousedown' && 'button' in event && event.button === 0) {
			setIsDraggingThumb(true);
			mousePos.current = { x: event.pageX, y: event.pageY };
		} else if (event.type === 'touchstart' && 'touches' in event) {
			setIsDraggingThumb(true);
			mousePos.current = {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY,
			};
		}
	};

	const handleThumbMove = useCallback(
		(event: React.MouseEvent | React.TouchEvent) => {
			if (!scrollerRef?.current) {
				return;
			}

			if (isDraggingThumb) {
				const pageX = (
					'pageX' in event ? event.pageX : event.touches[0].pageX
				) as number;
				const pageY = (
					'pageY' in event ? event.pageY : event.touches[0].pageY
				) as number;

				// Calculate the movement direction
				const deltaX = pageX - mousePos.current.x;
				const deltaY = pageY - mousePos.current.y;

				if (Math.abs(deltaX) > Math.abs(deltaY)) {
					// If horizontal movement is greater than vertical, prevent vertical scrolling
					event.preventDefault();

					scrollerRef.current.scrollLeft =
						scrollerRef.current.scrollLeft + deltaX / thumbWidthRatio;
					mousePos.current.x = pageX;
				}

				// Update the current Y position to prevent unwanted vertical scrolling
				mousePos.current.y = pageY;
			}
		},
		[isDraggingThumb, thumbWidthRatio]
	);

	const handleThumbRelease = useCallback(() => {
		if (isDraggingThumb) {
			setIsDraggingThumb(false);
		}
	}, [isDraggingThumb]);

	useEffect(() => {
		if (isDraggingThumb) {
			document.addEventListener('mousemove', handleThumbMove);
			document.addEventListener('mouseup', handleThumbRelease);
			document.addEventListener('touchmove', handleThumbMove);
			document.addEventListener('touchend', handleThumbRelease);
		} else {
			document.removeEventListener('mousemove', handleThumbMove);
			document.removeEventListener('mouseup', handleThumbRelease);
			document.removeEventListener('touchmove', handleThumbMove);
			document.removeEventListener('touchend', handleThumbRelease);
		}

		return () => {
			document.removeEventListener('mousemove', handleThumbMove);
			document.removeEventListener('mouseup', handleThumbRelease);
			document.removeEventListener('touchmove', handleThumbMove);
			document.removeEventListener('touchend', handleThumbRelease);
		};
	}, [handleThumbMove, handleThumbRelease, isDraggingThumb]);

	const handleScroll = () => {
		repositionThumb();
	};

	const handleLeftClick = () => {
		if (!scrollerRef?.current) {
			return;
		}
		// Windows and keyboard left/right generally moves 40px, but it can change based on some ratio. Let's just keep it simple for now
		scrollerRef.current.scrollLeft -= 40;
	};

	const handleRightClick = () => {
		if (!scrollerRef?.current) {
			return;
		}
		// Windows and keyboard left/right generally moves 40px, but it can change based on some ratio. Let's just keep it simple for now
		scrollerRef.current.scrollLeft += 40;
	};

	const handleTrackClick = (e) => {
		if (!scrollerRef?.current || !thumbRef?.current) {
			return;
		}

		const thumbDimensions = thumbRef.current.getBoundingClientRect();

		if (e.pageX > thumbDimensions.x + thumbDimensions.width) {
			scrollerRef.current.scrollLeft += thumbDimensions.width * 0.95;
		} else if (e.pageX < thumbDimensions.x) {
			scrollerRef.current.scrollLeft -= thumbDimensions.width * 0.95;
		}
	};

	return (
		<Box
			css={{
				position: 'relative',
				width: '100%',
			}}
		>
			<Box
				css={{
					overflowX: 'auto',
					paddingBottom: thumbWidthRatio === 1 ? 0 : 8,
					WebkitOverflowScrolling: 'touch',
					width: '100%',
					// Hide the native WebKit scrollbar
					'&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track':
						{
							height: 0,
							opacity: 0,
							width: 0,
						},
				}}
				focusRingFor="keyboard"
				onScroll={handleScroll}
				ref={scrollerRef}
				tabIndex={0}
			>
				{props.children}
			</Box>
			<Flex
				background="body"
				alignItems="center"
				css={{
					bottom: 0,
					display: thumbWidthRatio === 1 ? 'none' : undefined,
					left: 0,
					position: 'sticky',
					right: 0,
					zIndex: '999',
				}}
				flexWrap="nowrap"
				gap={0.25}
			>
				<Box
					aria-hidden
					as="button"
					css={{
						background: 'none',
						appearance: 'none',
						cursor: 'default',
						height: 24,
						width: 24,
					}}
					onClick={handleLeftClick}
					tabIndex={-1}
				>
					<ScrollbarArrowLeftIcon color="border" />
				</Box>
				<Box
					aria-hidden
					background="shade"
					border
					borderColor="muted"
					css={{
						borderRadius: 999,
						height: 12,
						padding: 0,
						position: 'relative',
						flexGrow: 1,
					}}
					onClick={handleTrackClick}
					ref={trackRef}
					tabIndex={-1}
				>
					<Box
						aria-hidden
						as="button"
						css={{
							appearance: 'none',
							background: boxPalette.border,
							border: 'none',
							borderRadius: 999,
							bottom: 0,
							cursor: 'default',
							// Miscalculations of floats means the scrollbar can overlap the right edge slightly if not floored
							left: Math.floor(thumbPosition),
							padding: 0,
							position: 'absolute',
							top: 0,
							touchAction: 'none', // Prevent default touch actions
							width: `${thumbWidthRatio * 100}%`,
							zIndex: 1000,
						}}
						onMouseDown={handleThumbPress}
						onTouchStart={handleThumbPress}
						ref={thumbRef}
						tabIndex={-1}
					/>
				</Box>
				<Box
					aria-hidden
					as="button"
					css={{
						background: 'none',
						appearance: 'none',
						cursor: 'default',
						height: 24,
						width: 24,
					}}
					onClick={handleRightClick}
					tabIndex={-1}
				>
					<ScrollbarArrowRightIcon color="border" />
				</Box>
			</Flex>
		</Box>
	);
}
