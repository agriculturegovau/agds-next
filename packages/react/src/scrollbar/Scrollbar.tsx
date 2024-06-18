// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
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

	let offsetDimensionValue;
	let scrollDimensionValue;

	const calculateThumbWidth = useDebouncedCallback(
		() => {
			// console.log(`scrollerRef?.current`, scrollerRef?.current);
			offsetDimensionValue = scrollerRef?.current.offsetWidth - 56;
			scrollDimensionValue = scrollerRef?.current.scrollWidth - 56;
			// console.log(`offsetDimensionValue`, offsetDimensionValue);
			// console.log(`scrollDimensionValue`, scrollDimensionValue);

			setThumbWidthRatio(offsetDimensionValue / scrollDimensionValue);
		},
		200,
		[scrollerRef, setThumbWidthRatio]
	);

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
		});

		observer.observe(scrollerRef.current);

		return () => {
			observer.disconnect();
		};
	}, [calculateThumbWidth, scrollerRef]);

	// console.log(`thumbWidthRatio`, thumbWidthRatio);

	const handleThumbDown = (e) => {
		// console.log(`handleThumbDown, e`, e.pageX);
		if (e.button === 0) {
			setIsDraggingThumb(true);
			mousePos.current = e.pageX;
		}
		// this.mouseCurrentPos = this.mousePos = e[this.pageAxis];
	};

	const handleThumbMove = (e) => {
		if (isDraggingThumb) {
			// console.log(`handleThumbMove, e`, e.pageX);
			// console.log(`mousePos`, mousePos.current);
			// console.log(`e.pageX - mousePos.current`, e.pageX - mousePos.current);
			// console.log(
			// 	`(e.pageX - mousePos.current) / thumbWidthRatio`,
			// 	(e.pageX - mousePos.current) / thumbWidthRatio
			// );
			scrollerRef.current.scrollLeft =
				scrollerRef.current.scrollLeft +
				(e.pageX - mousePos.current) / thumbWidthRatio;
			mousePos.current = e.pageX;
		}
	};

	const handleThumbUp = (e) => {
		// console.log(`handleThumbUp, e`, e.pageX);
		// console.log(`e`, e);
		if (isDraggingThumb) {
			setIsDraggingThumb(false);
		}
	};

	const handleScroll = (e) => {
		// console.log(`e`, e.target.scrollLeft);
		setThumbPosition(e.target.scrollLeft * thumbWidthRatio);
		// setThumbPosition(e.target.scrollLeft);
	};

	const handleLeftClick = () => {
		scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft - 40;
	};

	const handleRightClick = () => {
		scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft + 40;
	};

	return (
		<Box
			css={{
				// overflowX: 'auto',
				position: 'relative',
				width: '100%',
			}}
			data-foo="'custom-scrollbar--' + direction,
        'custom-scrollbar--hidden-thumb': thumbRatio === 1,
        'is-dragging': state.isDragging,
        'is-floating': showFloatingHorizontalScrollbar"
		>
			<Box
				className="custom-scrollbar__scroller"
				css={{
					overflowX: 'auto',
					paddingBottom: thumbWidthRatio === 1 ? 0 : 20, // Magic number? Height of visibly spaced scrollbar
					width: '100%',
					WebkitOverflowScrolling: 'touch',
					// Hide the native WebKit scrollbar
					'&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track':
						{
							height: 0,
							opacity: 0,
							width: 0,
						},
				}}
				ref={scrollerRef}
				// v-bind:style="scrollerStyle"
				// v-on:scroll="handleScroll"
				// v-on:wheel="handleWheel"
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
					display: thumbWidthRatio === 1 ? 'none' : undefined,
					bottom: 0,
					left: 0,
					right: 0,
					position: 'sticky',
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
					ref={trackRef}
					tabIndex={-1}
					// v-on:wheel="handleThumbWheel"
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
							left: thumbPosition,
							padding: '0',
							position: 'absolute',
							top: 0,
							zIndex: '1000',
							width: `${thumbWidthRatio * 100}%`,
							// This overlays the entire page so that when dragging and the user's mouse moves outside of the the actual thumb, the dragging will still be registered since the hit target of the thumb is basically the entire screen at that point
							'&::before': {
								// background: 'blue',
								content: '""',
								left: '0',
								right: '0',
								position: isDraggingThumb ? 'fixed' : 'absolute',
								top: '0',
								bottom: '0',
								opacity: 0.25,
							},
						}}
						ref={thumbRef}
						tabIndex={-1}
						// v-bind:class="thumbClass"
						// v-bind:style="thumbStyle"
						// v-on:mousedown="handleThumbDown"
						onMouseDown={handleThumbDown}
						onMouseMove={handleThumbMove}
						onMouseUp={handleThumbUp}
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
