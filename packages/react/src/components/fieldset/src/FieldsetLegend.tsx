import { isValidElement, ReactNode } from 'react';
import { Text } from '../../text/src';

export type FieldsetLegendProps = {
	children: ReactNode;
};

export const FieldsetLegend = ({ children }: FieldsetLegendProps) => {
	return isValidElement(children) ? (
		<legend>{children}</legend>
	) : (
		<Text as="legend" fontWeight="bold" fontSize="lg" lineHeight="heading">
			{children}
		</Text>
	);
};
