import { useRef } from 'react';
import { Box } from '@ag.ds-next/react/box';

export type ScrollbarProps = {};

export function Scrollbar(props: ScrollbarProps) {
	const bottomTriggerRef = useRef(null);
	const topTriggerRef = useRef(null);
	const thumbRef = useRef(null);
	const scrollerRef = useRef(null);
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
			<Box ref={topTriggerRef}></Box>
			<Box
				css={{ bottom: 0, height: 1, position: 'absolute', width: 1 }}
				ref={bottomTriggerRef}
			></Box>
			<Box
				as="button"
				aria-hidden
				className="custom-scrollbar__thumb"
				css={{
					appearance: 'none',
					background: '#000',
					border: 'none',
					borderRadius: 1000,
					bottom: 3,
					cursor: 'default',
					height: 8,
					left: '0',
					padding: '0',
					position: 'absolute',
					transition: 'opacity ease 0.15s',
					zIndex: '1000',
				}}
				ref={thumbRef}
				tabIndex={-1}
				// v-bind:class="thumbClass"
				// v-bind:style="thumbStyle"
				// v-on:mousedown="handleThumbDown"
				// v-on:wheel="handleThumbWheel"
			></Box>

			<Box
				className="custom-scrollbar__scroller"
				css={{
					overflowX: 'scroll',
					paddingBottom: 50, // Magic number?
					width: '100%',
					WebkitOverflowScrolling: 'touch',
					// Hide the native WebKit scrollbar, just in case
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
			>
				{props.children}
			</Box>
		</Box>
	);
}
