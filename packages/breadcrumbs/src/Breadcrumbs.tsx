import { ReactNode, useRef, useState } from 'react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { BreadcrumbsContainer } from './BreadcrumbsContainer';
import { BreadcrumbsItem, BreadcrumbsItemProps } from './BreadcrumbsItem';
import { BreadcrumbsToggle } from './BreadcrumbsToggle';

type BreadcrumbsLink = Omit<BreadcrumbsItemProps, 'children'> & {
	label: ReactNode;
};

export type BreadcrumbsProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** The list of links. Minimum of 2 links are required. */
	links: [BreadcrumbsLink, BreadcrumbsLink, ...BreadcrumbsLink[]];
};

export const Breadcrumbs = ({
	'aria-label': ariaLabel = 'breadcrumb',
	links,
}: BreadcrumbsProps) => {
	const firstLinkRef = useRef<HTMLAnchorElement>(null);

	const { label: firstLinkLabel, ...firstLink } = links[0];
	const { label: lastLinkLabel, ...lastLink } = links[links.length - 1];
	const middleLinks = links.filter(
		(_, idx, arr) => !(idx === 0 || idx === arr.length - 1)
	);

	const [isExpanded, setIsExpanded] = useState(!middleLinks.length);

	const onToggleClick = () => {
		setIsExpanded(true);
		firstLinkRef.current?.focus();
	};

	return (
		<BreadcrumbsContainer isExpanded={isExpanded} aria-label={ariaLabel}>
			<BreadcrumbsItem ref={firstLinkRef} {...firstLink}>
				{firstLinkLabel}
			</BreadcrumbsItem>
			{!isExpanded && middleLinks.length ? (
				<BreadcrumbsToggle onClick={onToggleClick} />
			) : null}
			{middleLinks.map(({ label, ...props }, index) => (
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
