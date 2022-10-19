export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const trackPageView = (url: string) => {
	if (!GA_MEASUREMENT_ID) return;
	window.gtag('config', GA_MEASUREMENT_ID, {
		page_path: url,
	});
};
