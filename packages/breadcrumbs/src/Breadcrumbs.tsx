import { Fragment, ReactNode } from 'react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { BreadcrumbsDivider } from './BreadcrumbsDivider';
import { BreadcrumbsContainer } from './BreadcrumbsContainer';
import { BreadcrumbsItem, BreadcrumbsItemProps } from './BreadcrumbsItem';

export type BreadcrumbsProps = {
	'aria-label'?: string;
	links: Omit<BreadcrumbsItemProps, 'children'> & { label: ReactNode }[];
};

export const Breadcrumbs = ({
	'aria-label': ariaLabel = 'breadcrumb',
	links,
}: BreadcrumbsProps) => (
	<BreadcrumbsContainer aria-label={ariaLabel}>
		{links.map(({ label, ...props }, index) => (
			<Fragment key={index}>
				{index == 0 ? null : <BreadcrumbsDivider />}
				<BreadcrumbsItem {...props}>
					{label}
					{index === links.length - 1 ? (
						<VisuallyHidden>(Current page)</VisuallyHidden>
					) : null}
				</BreadcrumbsItem>
			</Fragment>
		))}
	</BreadcrumbsContainer>
);
