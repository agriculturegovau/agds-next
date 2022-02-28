import React, { ReactNode } from 'react';
import { SkipLinkContainer } from './SkipLinkContainer';
import { SkipLinkItem, SkipLinkItemProps } from './SkipLinkItem';

export type SkipLinksProps = {
	links: (Omit<SkipLinkItemProps, 'children'> & { label: ReactNode })[];
};

export const SkipLinks = ({ links }: SkipLinksProps) => (
	<SkipLinkContainer>
		{links.map(({ label, ...props }, idx) => (
			<SkipLinkItem key={idx} {...props}>
				{label}
			</SkipLinkItem>
		))}
	</SkipLinkContainer>
);
