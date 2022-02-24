import React from 'react';
import { SkipLinkContainer } from './SkipLinkContainer';
import { SkipLinkItem } from './SkipLinkItem';

export type SkipLinksProps = {
	links: {
		href: string;
		label: string;
	}[];
};

export const SkipLinks = ({ links }: SkipLinksProps) => (
	<SkipLinkContainer>
		{links.map(({ href, label }, idx) => (
			<SkipLinkItem key={idx} href={href}>
				{label}
			</SkipLinkItem>
		))}
	</SkipLinkContainer>
);
