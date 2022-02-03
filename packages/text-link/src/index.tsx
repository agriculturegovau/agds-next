import { HTMLProps } from 'react';

import { useLinkComponent } from '@ag.ds-next/core';
import { focusStyles, linkStyles } from '@ag.ds-next/box';

type TextLinkProps = HTMLProps<HTMLAnchorElement>;

export const TextLink = (props: TextLinkProps) => {
	const Link = useLinkComponent();
	return <Link css={[linkStyles, focusStyles]} {...props} />;
};
