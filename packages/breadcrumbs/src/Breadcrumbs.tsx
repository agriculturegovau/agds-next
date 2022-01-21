import { Fragment, ReactNode } from 'react';

import { BreadcrumbsDivider } from './BreadcrumbsDivider';
import { BreadcrumbsContainer } from './BreadcrumbsContainer';
import { BreadcrumbsItem } from './BreadcrumbsItem';

export type BreadcrumbsProps = {
	links: { href?: string; label: ReactNode }[];
};

export const Breadcrumbs = ({ links, ...props }: BreadcrumbsProps) => {
	return (
		<BreadcrumbsContainer {...props}>
			{links.map(({ label, ...props }, index) => (
				<Fragment key={index}>
					{index == 0 ? null : <BreadcrumbsDivider />}
					<BreadcrumbsItem {...props}>{label}</BreadcrumbsItem>
				</Fragment>
			))}
		</BreadcrumbsContainer>
	);
};
