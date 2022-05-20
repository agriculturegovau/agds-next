import { useLinkComponent, LinkProps } from '@ag.ds-next/core';
import { focusStyles, linkStyles } from '@ag.ds-next/box';

export type TextLinkProps = LinkProps;

export const TextLink = (props: TextLinkProps) => {
	const Link = useLinkComponent();
	return <Link css={[linkStyles, focusStyles]} {...props} />;
};
