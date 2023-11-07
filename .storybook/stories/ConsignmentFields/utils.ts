export function plural(arrayLength: number, singular: string, plural: string) {
	return arrayLength === 1 ? singular : plural;
}

export type Field = { id: string };
