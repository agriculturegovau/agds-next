import { ReactNode } from 'react';
import { InpageNavContainer } from './InpageNavContainer';
import { InpageNavItemContainer } from './InpageNavItemContainer';
import { InpageNavItem, InpageNavItemProps } from './InpageNavItem';
import { InpageNavTitle } from './InpageNavTitle';

export type InpageNavProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** The list of links. */
	links: (Omit<InpageNavItemProps, 'children'> & { label: ReactNode })[];
	/** The title to display above the list of links. */
	title?: string;
};

export const InpageNav = ({
	'aria-label': ariaLabel = 'in page',
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
