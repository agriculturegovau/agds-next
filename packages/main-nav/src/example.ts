import { useState, useEffect } from 'react';

export const Thing = ({ value }: { value?: string }) => {
	const [_value, setValue] = useState<string | undefined>(value);

	useEffect(() => {
		setValue((prev) => {
			if (typeof prev === 'undefined' && prev !== value) {
				return value;
			}
			return prev;
		});
	}, [value]);
};
