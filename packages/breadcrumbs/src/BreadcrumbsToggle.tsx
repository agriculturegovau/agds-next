import { MouseEventHandler } from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
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
				aria-label="Expand list"
				aria-expanded="false"
				alignItems="center"
				justifyContent="center"
				fontSize="sm"
				focus
				link
			>
				&hellip;
			</Flex>
		</BreadcrumbsItem>
	);
}
