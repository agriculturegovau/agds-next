import { Text } from '@ag.ds-next/text';

// FIXME This needs to be replaced with an Icon
export const BreadcrumbsDivider = () => (
	<Text
		as="span"
		aria-hidden="true"
		fontSize="xs"
		lineHeight="nospace"
		color="muted"
	>
		&#x3e;
	</Text>
);
