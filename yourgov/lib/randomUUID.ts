export function randomUUID() {
	if (window.isSecureContext) {
		return crypto.randomUUID();
	}

	return String(Math.random() * 100000000000000000);
}
