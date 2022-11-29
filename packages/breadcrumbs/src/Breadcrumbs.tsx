import { ReactNode, useRef, useState } from 'react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { BreadcrumbsContainer } from './BreadcrumbsContainer';
import { BreadcrumbsItem, BreadcrumbsItemProps } from './BreadcrumbsItem';
import { BreadcrumbsToggle } from './BreadcrumbsToggle';

type BreadcrumbsLink = Omit<BreadcrumbsItemProps, 'children'> & {
	label: ReactNode;
};

export type BreadcrumbsProps = {
	'aria-label'?: string;
	links: BreadcrumbsLink[];
};

export const Breadcrumbs = ({
	'aria-label': ariaLabel = 'breadcrumb',
	links: linksProp,
}: BreadcrumbsProps) => {
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const { label: firstLinkLabel, ...firstLink } = linksProp[0];
	const { label: lastLinkLabel, ...lastLink } = linksProp[linksProp.length - 1];
	const links = linksProp.filter(
		(_, index) => !(index === 0 || index === linksProp.length - 1)
	);

	const onToggleClick = () => {
		setIsExpanded(true);
		firstLinkRef.current?.focus();
	};

	return (
		<BreadcrumbsContainer isExpanded={isExpanded} aria-label={ariaLabel}>
			<BreadcrumbsItem ref={firstLinkRef} {...firstLink}>
				{firstLinkLabel}
			</BreadcrumbsItem>
			{!isExpanded && <BreadcrumbsToggle onClick={onToggleClick} />}
			{links.map(({ label, ...props }, index) => (
				<BreadcrumbsItem key={index} {...props}>
					{label}
				</BreadcrumbsItem>
			))}
			<BreadcrumbsItem {...lastLink}>
				{lastLinkLabel}
				<VisuallyHidden> (current page)</VisuallyHidden>
			</BreadcrumbsItem>
		</BreadcrumbsContainer>
	);
};
