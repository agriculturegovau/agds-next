export function formatFieldValue(value: unknown) {
	switch (typeof value) {
		case 'boolean':
			return value ? 'Yes' : 'No';
		case 'object':
			if (value instanceof File) return value.name;
			if (value instanceof Date) return value.toLocaleDateString();
			return 'Unknown';
		default:
			return value as JSX.Element;
	}
}
