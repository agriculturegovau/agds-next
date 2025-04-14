import { css } from '@emotion/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// Tests don't support @starting-style, so this is a workaround
const isJSDOM =
	typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom');

// Exports an array of two elements:
// 1. An object with the correct data attribute to be applied to the element
// 2. A CSS block that applies the transition styles based on the data attribute
export function useTransitionHeight(expanded?: boolean) {
	const prefersReducedMotion = usePrefersReducedMotion();

	return [
		{ 'data-transition-height': expanded ? 'expanded' : 'collapsed' },
		css`
			&[data-transition-height] {
				overflow: hidden;
				transition-behavior: allow-discrete;
				transition-duration: ${prefersReducedMotion ? '0s' : '0.5s'};
				transition-property: display, height;
				transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
			}

			&[data-transition-height='collapsed'] {
				display: none;
				height: 0;
			}

			&[data-transition-height='expanded'] {
				display: block;
				height: calc-size(max-content, size + 0px);
			}

			${isJSDOM
				? ''
				: css`
						@starting-style {
							&[data-transition-height='expanded'] {
								display: block;
								height: 0;
							}
						}
				  `}
		`,
	];
}
