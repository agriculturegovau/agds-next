import { ReactNode } from 'react';
import { SkipLinkContainer } from './SkipLinkContainer';
import { SkipLinkItem } from './SkipLinkItem';

export type SkipLinksProps = {
	links: { label: ReactNode; href: string }[];
	'aria-label'?: string;
};

export const SkipLinks = ({
	links,
	'aria-label': ariaLabel = 'skip links',
}: SkipLinksProps) => (
	<SkipLinkContainer aria-label={ariaLabel}>
		{links.map(({ label, ...props }, idx) => (
			<SkipLinkItem key={idx} {...props}>
				{label}
			</SkipLinkItem>
		))}
	</SkipLinkContainer>
);
