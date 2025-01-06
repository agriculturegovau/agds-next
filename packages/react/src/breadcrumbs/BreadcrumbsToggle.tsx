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
				alignItems="center"
				aria-expanded="false"
				aria-label="Show all breadcrumbs"
				as={BaseButton}
				focusRingFor="keyboard"
				fontSize="sm"
				justifyContent="center"
				link
				onClick={onClick}
			>
				&hellip;
			</Flex>
		</BreadcrumbsItem>
	);
}
