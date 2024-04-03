const exporters = ['Lorem', 'Ipsum', 'Dolar', 'Amet'];
const status = ['Draft', 'Issued', 'Submitted'];

function sample<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min: number, max: number) {
	return Math.random() * (max - min + 1) + min;
}

export const EXAMPLE_DATA = Array.from(Array(1000).keys()).map((idx) => ({
	id: `${idx}`,
	certNumber: `CER${Math.random().toPrecision(8).slice(2)}`,
	exporter: sample(exporters),
	status: sample(status),
	amount: randomNumber(10, 90).toFixed(2),
}));

export type RowData = (typeof EXAMPLE_DATA)[number];

export function plural(arrayLength: number, singular: string, plural: string) {
	return arrayLength === 1 ? singular : plural;
}
