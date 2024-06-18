// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Box } from '@ag.ds-next/react/box';

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
			offsetDimensionValue = scrollerRef?.current.offsetWidth;
			scrollDimensionValue = scrollerRef?.current.scrollWidth;
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

			<Box
				aria-hidden
				className="custom-scrollbar__track"
				css={{
					appearance: 'none',
					background: 'yellow',
					border: 'none',
					bottom: 1,
					cursor: 'default',
					display: thumbWidthRatio === 1 ? 'none' : 'block',
					height: 10,
					left: 0,
					padding: 0,
					right: 0,
					position: 'sticky',
					zIndex: '999',
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
						background: '#000',
						border: 'none',
						borderRadius: 1000,
						bottom: 1,
						cursor: 'default',
						height: 8,
						// left: `${thumbPosition * thumbWidthRatio}px`,
						left: thumbPosition,
						padding: '0',
						position: 'absolute',
						transition: 'opacity ease 0.15s',
						zIndex: '1000',
						width: `${thumbWidthRatio * 100}%`,
						// This overlays the entire page so that when dragging and the user's mouse moves outside of the the actual thumb, the dragging will still be registered since the hit target of the thumb is basically the entire screen at that point
						'&::before': {
							background: 'blue',
							content: '""',
							// content: isDraggingThumb ? '""' : undefined,
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
				></Box>
			</Box>
		</Box>
	);
}
