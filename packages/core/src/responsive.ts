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
	valueMapper: (t: NonNullable<T>) => unknown = (t) => t
) {
	if (!isNonNullable(value)) {
		return undefined;
	}
	if (Array.isArray(value)) {
		return value.map((t: T | null) =>
			isNonNullable(t) ? valueMapper(t) : null
		);
	}
	if (typeof value === 'object') {
		const resValue = value as Record<NamedBreakpoint, T>;
		return breakpointNames.map((key) => {
			const token = key in resValue ? resValue[key] : undefined;
			if (isNonNullable(token)) {
				return valueMapper(token);
			}
			return null;
		});
	}
	return [valueMapper(value)];
}

function isNonNullable<T>(t: T): t is NonNullable<T> {
	return t !== null && t !== undefined;
}

export type ResponsiveProp<T> =
	| Partial<Record<NamedBreakpoint, T>>
	| (T | null)[] // [xs, sm, md, lg, xl]
	| T;
