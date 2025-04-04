import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTransitionHeight(
	isExpanded = false,
	spaceToNegateWhenCollapsed = ''
) {
	const prefersReducedMotion = usePrefersReducedMotion();

	return {
		height: isExpanded ? 'calc-size(max-content, size + 0px)' : 0,
		marginBottom: isExpanded
			? 0
			: spaceToNegateWhenCollapsed
			? `-${spaceToNegateWhenCollapsed}`
			: undefined,
		overflow: 'hidden',
		transition: 'height, margin-bottom cubic-bezier(0.22, 1, 0.36, 1)',
		transitionDuration: prefersReducedMotion ? '0s' : '0.5s',
	};
}
