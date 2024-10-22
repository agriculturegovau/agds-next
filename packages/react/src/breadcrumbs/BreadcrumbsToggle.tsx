import { MouseEventHandler } from 'react';
import { BaseButton } from '../button';
import { Flex } from '../flex';
import { BreadcrumbsItem } from './BreadcrumbsItem';

export type BreadcrumbsToggleProps = {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export function BreadcrumbsToggle({ onClick }: BreadcrumbsToggleProps) {
	return (
		<BreadcrumbsItem>
			<Flex
				as={BaseButton}
				onClick={onClick}
				aria-label="Show all breadcrumbs"
				aria-expanded="false"
				alignItems="center"
				justifyContent="center"
				fontSize="sm"
				focusRingFor="keyboard"
				link
			>
				&hellip;
			</Flex>
		</BreadcrumbsItem>
	);
}
