// https://stackoverflow.com/a/58110124/1611058
/**
 * A strongly typed version of `Boolean()`
 *
 * When using this, TS understands that you are using it to guard against false values.
 *
 * @param value - Any value you want to test the truthiness of
 * @returns Boolean
 */
export function isTruthy<Test>(value: Test): value is Truthy<Test> {
	return Boolean(value);
}

type Falsy = false | '' | 0 | null | undefined;

type Truthy<T> = T extends Falsy ? never : T; // from lodash
