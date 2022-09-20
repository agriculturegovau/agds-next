import { Box, Flex } from '@ag.ds-next/box';
import { InfoIcon, ChevronDownIcon } from '@ag.ds-next/icon';

export type DetailProps = {
	label: string;
};

export function Detail({ label = 'Details' }: DetailProps) {
	return (
		<details
			css={{
				'&[open] summary svg:last-of-type': {
					transform: 'rotate(180deg)',
				},
				'summary::marker, summary::-webkit-details-marker': {
					display: 'none',
				},
			}}
		>
			<Flex
				as="summary"
				gap={0.5}
				link
				focus
				alignItems="center"
				fontWeight="bold"
			>
				<InfoIcon size="md" />
				{label}
				<ChevronDownIcon weight="bold" size="sm" />
			</Flex>

			<Box
				background="shade"
				padding={1.5}
				borderLeft
				borderLeftWidth="xl"
				highContrastOutline
			>
				Something small enough to escape casual notice.
			</Box>
		</details>
	);
}
