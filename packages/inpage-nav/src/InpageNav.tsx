import { ReactNode } from 'react';
import { InpageNavContainer } from './InpageNavContainer';
import { InpageNavItemContainer } from './InpageNavItemContainer';
import { InpageNavItem, InpageNavItemProps } from './InpageNavItem';
import { InpageNavTitle } from './InpageNavTitle';

export type InpageNavProps = {
	'aria-label'?: string;
	links: (Omit<InpageNavItemProps, 'children'> & { label: ReactNode })[];
	title?: string;
};

export const InpageNav = ({
	'aria-label': ariaLabel = 'In page',
	links,
	title,
}: InpageNavProps) => (
	<InpageNavContainer aria-label={ariaLabel}>
		{title ? <InpageNavTitle>{title}</InpageNavTitle> : null}
		<InpageNavItemContainer>
			{links.map(({ label, ...props }, index) => (
				<InpageNavItem key={index} {...props}>
					{label}
				</InpageNavItem>
			))}
		</InpageNavItemContainer>
	</InpageNavContainer>
);
