import { MouseEventHandler } from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { Text } from '@ag.ds-next/text';
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
				alignItems="center"
				justifyContent="center"
				onClick={onClick}
				focus
			>
				<Text color="action">&hellip;</Text>
			</Flex>
		</BreadcrumbsItem>
	);
}
