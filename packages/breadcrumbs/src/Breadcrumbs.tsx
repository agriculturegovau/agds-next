import { StackProps } from '@ag.ds-next/box';
import { Fragment, ReactNode } from 'react';

import { BreadcrumbsDivider } from './BreadcrumbsDivider';
import { BreadcrumbsGroup } from './BreadcrumbsGroup';
import { BreadcrumbsItem } from './BreadcrumbsItem';

export type BreadcrumbsProps = StackProps & {
	links: { href?: string; label: ReactNode }[];
};

export const Breadcrumbs = ({ links, ...props }: BreadcrumbsProps) => {
	return (
		<BreadcrumbsGroup {...props}>
			{links.map(({ label, ...props }, index) => (
				<Fragment key={index}>
					{index == 0 ? null : <BreadcrumbsDivider />}
					<BreadcrumbsItem {...props}>{label}</BreadcrumbsItem>
				</Fragment>
			))}
		</BreadcrumbsGroup>
	);
};
