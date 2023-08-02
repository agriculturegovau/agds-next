import { format } from 'date-fns';
import { H2 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { Box } from '@ag.ds-next/react/box';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Combobox } from '@ag.ds-next/react/combobox';
import { tokens } from '@ag.ds-next/react/core';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { STATUS_MAP } from '../../DataFiltering/lib/utils';
import { assignees } from '../../DataFiltering/lib/generateBusinessData';
import { ITEM_SECTION_ID, LIST_SECTION_ID } from '../lib/utils';
import { useDataContext } from '../../DataFiltering/lib/contexts';
import { useSelectedItemContext } from '../lib/context';
import { ErrorBoundary } from './ErrorBoundary';

const CommentBox = () => (
	<Box background="bodyAlt" rounded paddingY={3} paddingX={1}>
		Comment
	</Box>
);

export const ItemDetails = () => {
	const { selectedItemIndex } = useSelectedItemContext();
	const { data } = useDataContext();

	const card = data[selectedItemIndex];

	if (!card) {
		return <Text>Skeleton</Text>;
	}

	return (
		<Stack gap={2}>
			<Stack gap={0.5}>
				<Text fontWeight="bold" color="muted" fontSize="sm">
					{card.id}
				</Text>
				<H2>{card.businessName}</H2>
			</Stack>
			<StatusBadge weight="subtle" {...STATUS_MAP[card.status]} />

			<div>
				<Combobox
					label="Assigned to"
					hideOptionalLabel
					value={
						card.assignee
							? { label: card.assignee, value: card.assignee }
							: undefined
					}
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onChange={() => {}}
					options={assignees.map((option) => ({
						label: option,
						value: option,
					}))}
				/>
			</div>

			<SummaryList>
				<SummaryListItem>
					<SummaryListItemTerm>Business name</SummaryListItemTerm>
					<SummaryListItemDescription>
						{card.businessName}
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Location</SummaryListItemTerm>
					<SummaryListItemDescription>
						{card.city}, {card.state}
					</SummaryListItemDescription>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Request date</SummaryListItemTerm>
					<SummaryListItemDescription>
						{format(card.requestDate, 'dd/MM/yyyy')}
					</SummaryListItemDescription>
				</SummaryListItem>
			</SummaryList>

			<Stack gap={1}>
				<CommentBox />
				<CommentBox />
				<CommentBox />
			</Stack>

			<DirectionLink direction="up" href={`#${ITEM_SECTION_ID}`}>
				Back to top
			</DirectionLink>

			<SkipLinks
				links={[{ href: `#${LIST_SECTION_ID}`, label: 'Back to list' }]}
			/>
		</Stack>
	);
};

export const ItemDetailsPanel = () => {
	return (
		<Box
			as="main"
			aria-label="Item details"
			padding={2}
			borderLeft={true}
			borderTop={true}
			id={ITEM_SECTION_ID}
			tabIndex={-1}
			css={{
				overflowY: 'scroll',
				height: '100%',
				// maxHeight: 'calc(60vh - 100px)',
				// [tokens.mediaQuery.min.md]: {
				// 	maxHeight: 'calc(50vh - 100px)',
				// },
				// [tokens.mediaQuery.min.xxl]: {
				// 	maxHeight: 'calc(100vh - 100px)',
				// },
			}}
		>
			<ErrorBoundary>
				<ItemDetails />
			</ErrorBoundary>
		</Box>
	);
};
