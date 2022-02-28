import { Fragment, ReactNode } from 'react';
import { BreadcrumbsDivider } from './BreadcrumbsDivider';
import { BreadcrumbsContainer } from './BreadcrumbsContainer';
import { BreadcrumbsItem, BreadcrumbsItemProps } from './BreadcrumbsItem';

export type BreadcrumbsProps = {
	links: Omit<BreadcrumbsItemProps, 'children'> & { label: ReactNode }[];
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
