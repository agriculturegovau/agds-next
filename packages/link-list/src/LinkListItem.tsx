import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';

export const LinkListItem = (
	props: PropsWithChildren<{
		href: string;
	}>
) => (
	<Box as="li">
		<TextLink {...props} />
	</Box>
);
