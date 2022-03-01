import { ReactNode } from 'react';
import { InpageNavContainer } from './InpageNavContainer';
import { InpageNavItemContainer } from './InpageNavItemContainer';
import { InpageNavItem, InpageNavItemProps } from './InpageNavItem';
import { InpageNavTitle } from './InpageNavTitle';

export type InpageNavProps = {
	title?: string;
	links: (Omit<InpageNavItemProps, 'children'> & { label: ReactNode })[];
};

export const InpageNav = ({ title, links, ...props }: InpageNavProps) => (
	<InpageNavContainer {...props}>
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
