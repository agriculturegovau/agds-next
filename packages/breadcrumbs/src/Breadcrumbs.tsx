import { ReactNode } from 'react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
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
			<BreadcrumbsItem key={index} {...props}>
				{label}
				{index === links.length - 1 ? (
					<VisuallyHidden> (current page)</VisuallyHidden>
				) : null}
			</BreadcrumbsItem>
		))}
	</BreadcrumbsContainer>
);
