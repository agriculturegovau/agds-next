// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useCallback, useEffect, useRef, useState } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { ScrollbarArrowLeftIcon, ScrollbarArrowRightIcon } from '../icon';

export type ScrollbarProps = {};

export function Scrollbar(props: ScrollbarProps) {
	const trackRef = useRef(null);
	const thumbRef = useRef(null);
	const scrollerRef = useRef(null);
	const mousePos = useRef(0);

	const [isDraggingThumb, setIsDraggingThumb] = useState(false);
	const [thumbPosition, setThumbPosition] = useState(0);
	const [thumbWidthRatio, setThumbWidthRatio] = useState(0);

	const repositionThumb = useCallback(() => {
		setThumbPosition(scrollerRef.current.scrollLeft * thumbWidthRatio);
	}, [scrollerRef, thumbWidthRatio]);

	const calculateThumbWidth = useCallback(() => {
		setThumbWidthRatio(
			(scrollerRef?.current.offsetWidth - 56) /
				(scrollerRef?.current.scrollWidth - 56)
		);
	}, [scrollerRef, setThumbWidthRatio]);

	useEffect(() => {
		calculateThumbWidth();
	}, [calculateThumbWidth]);

	useEffect(() => {
		if (typeof window === 'undefined' || !('ResizeObserver' in window)) {
			return;
		}

		if (!scrollerRef.current) {
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

	const handleThumbDown = (e) => {
		e.preventDefault();

		if (e.button === 0) {
			setIsDraggingThumb(true);
			mousePos.current = e.pageX;
		}
	};

	const handleThumbMove = (e) => {
		if (isDraggingThumb) {
			scrollerRef.current.scrollLeft =
				scrollerRef.current.scrollLeft +
				(e.pageX - mousePos.current) / thumbWidthRatio;
			mousePos.current = e.pageX;
		}
	};

	const handleThumbUp = () => {
		if (isDraggingThumb) {
			setIsDraggingThumb(false);
		}
	};

	const handleScroll = () => {
		repositionThumb();
	};

	const handleLeftClick = () => {
		scrollerRef.current.scrollLeft -= 40;
	};

	const handleRightClick = () => {
		scrollerRef.current.scrollLeft += 40;
	};

	const handleTrackClick = (e) => {
		const thumbDimensions = thumbRef.current.getBoundingClientRect();

		if (e.pageX > thumbDimensions.x + thumbDimensions.width) {
			scrollerRef.current.scrollLeft += thumbDimensions.width * 0.9;
		} else if (e.pageX < thumbDimensions.x) {
			scrollerRef.current.scrollLeft -= thumbDimensions.width * 0.9;
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
				className="custom-scrollbar__scroller"
				css={{
					overflowX: 'auto',
					paddingBottom: thumbWidthRatio === 1 ? 0 : 20, // Magic number? Height of visibly spaced scrollbar
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
				ref={scrollerRef}
				tabIndex={0}
				focusRingFor="keyboard"
				onScroll={handleScroll}
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
					<ScrollbarArrowLeftIcon />
				</Box>
				<Box
					aria-hidden
					background="shade"
					border
					borderColor="muted"
					className="custom-scrollbar__track"
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
						as="button"
						aria-hidden
						className="custom-scrollbar__thumb"
						css={{
							appearance: 'none',
							background: 'none',
							border: 'none',
							borderRadius: 999,
							bottom: 0,
							cursor: 'default',
							left: Math.floor(thumbPosition),
							padding: 0,
							position: 'absolute',
							top: 0,
							width: `${thumbWidthRatio * 100}%`,
							zIndex: 1000,
							// This overlays the entire page so that when dragging and the user's mouse moves outside of the actual thumb, the dragging will still be registered since the hit target of the thumb is basically the entire screen at that point
							'&::before': {
								bottom: 0,
								content: '""',
								left: 0,
								opacity: 0.25,
								position: isDraggingThumb ? 'fixed' : 'absolute',
								right: 0,
								top: 0,
							},
						}}
						onMouseDown={handleThumbDown}
						onMouseMove={handleThumbMove}
						onMouseUp={handleThumbUp}
						ref={thumbRef}
						tabIndex={-1}
					>
						<Box
							css={{
								background: '#808080',
								borderRadius: 999,
								height: 8,
								margin: 1,
							}}
						></Box>
					</Box>
				</Box>
				<Box
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
					<ScrollbarArrowRightIcon />
				</Box>
			</Flex>
		</Box>
	);
}
