export function randomUUID() {
	try {
		return crypto.randomUUID();
	} catch (error) {
		return String(Math.random() * 100000000000000000);
	}
}
