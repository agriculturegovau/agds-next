import { createContext, useContext } from 'react';
import { ContentSpacing } from './utils';

export const ContentSpacingContext =
	createContext<ContentSpacing | undefined>(undefined);

export const useContentSpacing = () => {
	const value = useContext(ContentSpacingContext);

	if (value === undefined) {
		throw new Error('Context not found');
	}

	return value;
};
