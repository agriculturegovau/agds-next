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
import { Stack } from '../stack';

export type TableScrollerProps = { children: ReactNode };

export function TableScroller({ children }: TableScrollerProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLButtonElement>(null);
	const scrollerRef = useRef<HTMLDivElement>(null);
	const mousePos = useRef({ x: 0, y: 0 });

	const [isDraggingThumb, setIsDraggingThumb] = useState(false);
	const [thumbPosition, setThumbPosition] = useState(0);
	const [thumbWidthRatio, setThumbWidthRatio] = useState(0);
	const [buttonIntervalId, setButtonIntervalId] = useState<number | null>(null);

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
		(event: Event | React.MouseEvent | React.TouchEvent) => {
			if (!scrollerRef?.current) {
				return;
			}

			const _pageX = 'pageX' in event ? event.pageX : null;
			const _pageY = 'pageY' in event ? event.pageY : null;
			const touches = 'touches' in event ? event.touches : null;

			if (isDraggingThumb) {
				const pageX = touches ? touches[0].pageX : _pageX;
				const pageY = touches ? touches[0].pageY : _pageY;

				if (pageX === null || pageY === null) return;

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

	const handleButtonPress = (
		event: React.MouseEvent | React.TouchEvent,
		direction: 'left' | 'right'
	) => {
		// Windows and keyboard left/right generally moves 40px, but it can change based on some ratio. Let's just keep it simple for now
		const scrollAmount = direction === 'left' ? -40 : 40;

		if (buttonIntervalId) {
			clearInterval(buttonIntervalId);
			setButtonIntervalId(null);
		}

		const intervalId = window.setInterval(() => {
			if (
				scrollerRef.current &&
				(event.type === 'touchstart' ||
					(event.type === 'mousedown' &&
						'button' in event &&
						event.button === 0))
			) {
				scrollerRef.current.scrollLeft += scrollAmount;
			}
		}, 100);

		setButtonIntervalId(intervalId);
	};

	const handleButtonRelease = () => {
		if (buttonIntervalId) {
			clearInterval(buttonIntervalId);
			setButtonIntervalId(null);
		}
	};

	const handleTrackClick = (event: React.MouseEvent) => {
		if (!scrollerRef?.current || !thumbRef?.current) {
			return;
		}

		const thumbDimensions = thumbRef.current.getBoundingClientRect();

		if (event.pageX > thumbDimensions.x + thumbDimensions.width) {
			scrollerRef.current.scrollLeft += thumbDimensions.width * 0.95;
		} else if (event.pageX < thumbDimensions.x) {
			scrollerRef.current.scrollLeft -= thumbDimensions.width * 0.95;
		}
	};

	return (
		<Stack
			gap={0.5}
			css={{
				position: 'relative',
				width: '100%',
			}}
		>
			<Box
				css={{
					msOverflowStyle: 'none',
					overflowX: 'auto',
					scrollbarWidth: 'none',
					WebkitOverflowScrolling: 'touch',
					width: '100%',
					'&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track':
						{
							display: 'none',
						},
				}}
				focusRingFor="keyboard"
				onScroll={handleScroll}
				ref={scrollerRef}
				tabIndex={0}
			>
				{children}
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
				}}
				flexWrap="nowrap"
				gap={0.25}
			>
				<Box
					aria-hidden
					as="button"
					css={{
						appearance: 'none',
						background: 'none',
						cursor: 'default',
						height: 24,
						width: 24,
					}}
					onMouseDown={(event: React.MouseEvent) =>
						handleButtonPress(event, 'left')
					}
					onMouseUp={handleButtonRelease}
					onMouseLeave={handleButtonRelease}
					onTouchStart={(event: React.TouchEvent) =>
						handleButtonPress(event, 'left')
					}
					onTouchEnd={handleButtonRelease}
					tabIndex={-1}
					type="button"
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
						}}
						onMouseDown={handleThumbPress}
						onTouchStart={handleThumbPress}
						ref={thumbRef}
						tabIndex={-1}
						type="button"
					/>
				</Box>
				<Box
					aria-hidden
					as="button"
					css={{
						appearance: 'none',
						background: 'none',
						cursor: 'default',
						height: 24,
						width: 24,
					}}
					onMouseDown={(event: React.MouseEvent) =>
						handleButtonPress(event, 'right')
					}
					onMouseUp={handleButtonRelease}
					onMouseLeave={handleButtonRelease}
					onTouchStart={(event: React.TouchEvent) =>
						handleButtonPress(event, 'right')
					}
					onTouchEnd={handleButtonRelease}
					tabIndex={-1}
					type="button"
				>
					<ScrollbarArrowRightIcon color="border" />
				</Box>
			</Flex>
		</Stack>
	);
}
