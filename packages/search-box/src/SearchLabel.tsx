import { Text } from '@ag.ds-next/text';

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

// Content that should be read out
// to screenreaders only
const visuallyHiddenStyles = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
} as const;
