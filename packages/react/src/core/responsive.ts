import facepaint from 'facepaint';
import { tokens } from './tokens';

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
	tokens.mediaQuery.min.sm,
	tokens.mediaQuery.min.md,
	tokens.mediaQuery.min.lg,
	tokens.mediaQuery.min.xl,
	tokens.mediaQuery.min.xxl,
]);

type NamedBreakpoint = keyof typeof tokens.breakpoint;
export const breakpointNames = Object.keys(
	tokens.breakpoint
) as NamedBreakpoint[];

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
