import React, { ReactNode } from 'react';
import { SkipLinkContainer } from './SkipLinkContainer';
import { SkipLinkItem, SkipLinkItemProps } from './SkipLinkItem';

export type SkipLinksProps = {
	links: (Omit<SkipLinkItemProps, 'children'> & { label: ReactNode })[];
	'aria-label'?: string;
};

export const SkipLinks = ({
	links,
	'aria-label': ariaLabel = 'skip links navigation',
}: SkipLinksProps) => (
	<SkipLinkContainer aria-label={ariaLabel}>
		{links.map(({ label, ...props }, idx) => (
			<SkipLinkItem key={idx} {...props}>
				{label}
			</SkipLinkItem>
		))}
	</SkipLinkContainer>
);
