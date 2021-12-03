import { tokens } from './tokens';
import facepaint from 'facepaint';

/**
 *  Facepaint lets you write properties as arrays e.g.
 *  <div css={{ width: [200, 400] }} />
 *  More here: https://github.com/emotion-js/facepaint
 *
 * We want to also support a more explicit API where by
 * the user can pass an object with values assigned to
 * a named breakpoint.
 */

export const mq = facepaint([
	// `@media(min-width: ${tokens.breakpoints.xs}px)`,
	`@media(min-width: ${tokens.breakpoints.sm}px)`,
	`@media(min-width: ${tokens.breakpoints.md}px)`,
	`@media(min-width: ${tokens.breakpoints.lg}px)`,
	`@media(min-width: ${tokens.breakpoints.xl}px)`,
]);

type NamedBreakpoint = keyof typeof tokens.breakpoints;
const breakpointNames = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export function mapResponsiveProp<T>(
	value: ResponsiveProp<T>,
	valueMapper: (t: T | null) => unknown = (t) => t
) {
	if (value === null || value === undefined) {
		return undefined;
	}
	if (Array.isArray(value)) {
		return value.map(valueMapper);
	}
	if (typeof value === 'object') {
		const resValue = value as Record<NamedBreakpoint, T>;
		return breakpointNames.map((key) =>
			key in resValue ? valueMapper(resValue[key]) : null
		);
	}
	return [value];
}

export type ResponsiveProp<T> =
	| Partial<Record<NamedBreakpoint, T>>
	| (T | null)[] // [xs, sm, md, lg, xl]
	| T;
