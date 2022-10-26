import { Text } from '../../text/src';
import { visuallyHiddenStyles } from '../../a11y/src';
import { mapSpacing } from '../../core/src';

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
			fontWeight="bold"
			htmlFor={htmlFor}
			css={visible ? { marginBottom: mapSpacing(0.5) } : visuallyHiddenStyles}
		>
			{children}
		</Text>
	);
};
