// Note this function is pretty basic. It doesn't cover a lot of scenarios so it should be used with caution

export function formatFieldValue(value: unknown) {
	switch (typeof value) {
		case 'boolean':
			return value ? 'Yes' : 'No';
		case 'object':
			if (Array.isArray(value)) return value.join();
			if (value instanceof File) return value.name;
			if (value instanceof Date) return value.toLocaleDateString();
			return 'Unknown';
		default:
			return value as JSX.Element;
	}
}
