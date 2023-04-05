export const fetcher = async (url: string) => {
	const res = await fetch(url);
	const json = await res.json();
	// Fake a slow network
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return json;
};

export const numberFormatter = new Intl.NumberFormat();
