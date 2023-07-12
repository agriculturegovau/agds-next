import { useEffect, useState } from 'react';

const DARKMODE_LOCAL_STORAGE_KEY = 'AgDS-enable-darkmode';

/** NOT FOR OFFICIAL WEBSITES.
 * An easter-egg for consumers of AgDS who are working long nights.
 * In your browser's 'local storage', set 'AgDS-enable-darkmode' to 'true'.*/
export const useDarkmode = () => {
	// Set the value received from the local storage to a local state.
	const [isDarkmodeEnabled, setDarkmodeEnabled] = useState(false);

	useEffect(() => {
		// Get the value from local storage if it exists.
		const isDarkmodeOptedIn =
			localStorage.getItem(DARKMODE_LOCAL_STORAGE_KEY) || '';

		// If the value is not set, set it to false.
		if (isDarkmodeOptedIn === '') {
			localStorage.setItem(DARKMODE_LOCAL_STORAGE_KEY, 'false');
		}

		// If the value is set to true, enable darkmode.
		if (isDarkmodeOptedIn === 'true') {
			setDarkmodeEnabled(true);
		}
	}, []);

	return { isDarkmodeEnabled };
};
