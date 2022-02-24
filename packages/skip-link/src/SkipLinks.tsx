import React from 'react';
import { SkipLinkContainer } from './SkipLinkContainer';
import { SkipLink } from './SkipLink';

export type SkipLinksProps = {
	links: {
		href: string;
		label: string;
	}[];
};

export const SkipLinks = ({ links }: SkipLinksProps) => (
	<SkipLinkContainer>
		{links.map(({ href, label }, idx) => (
			<SkipLink key={idx} href={href}>
				{label}
			</SkipLink>
		))}
	</SkipLinkContainer>
);
