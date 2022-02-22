import { Text } from '@ag.ds-next/text';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { mapSpacing } from '@ag.ds-next/core';

export type SearchBoxLabelprops = {
	children: string;
	htmlFor: string;
	visible: boolean;
};

export const SearchBoxLabel = ({
	children,
	htmlFor,
	visible,
}: SearchBoxLabelprops) => {
	return (
		<Text
			as="label"
			fontWeight="bold"
			htmlFor={htmlFor}
			css={visible ? { marginBottom: mapSpacing(0.5) } : visuallyHiddenStyles}
		>
			{children}
		</Text>
	);
};
