import { Text } from '@ag.ds-next/text';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';

export type SearchLabelprops = {
	children: string;
	htmlFor: string;
	visible: boolean;
};

export const SearchLabel = ({
	children,
	htmlFor,
	visible,
}: SearchLabelprops) => {
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
