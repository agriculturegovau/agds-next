import { Text } from '../text';
import { visuallyHiddenStyles } from '../a11y';
import { mapSpacing } from '../core';

export type SearchBoxLabelProps = {
	children: string;
	htmlFor: string;
	visible: boolean;
};

export const SearchBoxLabel = ({
	children,
	htmlFor,
	visible,
}: SearchBoxLabelProps) => {
	return (
		<Text
			as="label"
			css={visible ? { marginBottom: mapSpacing(0.5) } : visuallyHiddenStyles}
			fontWeight="bold"
			htmlFor={htmlFor}
		>
			{children}
		</Text>
	);
};
