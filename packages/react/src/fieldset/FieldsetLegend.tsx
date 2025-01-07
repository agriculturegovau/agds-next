import { isValidElement, ReactNode } from 'react';
import { Text } from '../text';

export type FieldsetLegendProps = {
	children: ReactNode;
};

export const FieldsetLegend = ({ children }: FieldsetLegendProps) => {
	return isValidElement(children) ? (
		<legend>{children}</legend>
	) : (
		<Text as="legend" fontSize="lg" fontWeight="bold" lineHeight="heading">
			{children}
		</Text>
	);
};
