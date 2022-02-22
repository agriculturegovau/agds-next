import { Text } from '@ag.ds-next/text';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';

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
			htmlFor={htmlFor}
			css={visible ? undefined : visuallyHiddenStyles}
		>
			{children}
		</Text>
	);
};
