import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { Stack } from '@ag.ds-next/react/stack';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { H3, Heading } from '@ag.ds-next/react/heading';
import { SkeletonHeading, SkeletonText } from '@ag.ds-next/react/skeleton';
import { Text } from '@ag.ds-next/react/text';
import { HelpIcon } from '@ag.ds-next/react/icon';
import { Button } from '@ag.ds-next/react/button';
import { BusinessForAuditWithIndex } from '../lib/generateBusinessData';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

type DataListProps = {
	loading: boolean;
	/** The data to display in the list */
	data: BusinessForAuditWithIndex[];
};

export const DataList = ({ loading, data }: DataListProps) => {
	const { resetFilters } = useSortAndFilterContext();

	if (loading) {
		return (
			<Stack as="ul" gap={1} id={tableId}>
				{Array.from({ length: 10 }, (_, i) => i).map((i) => (
					<DataListItemSkeleton key={i} />
				))}
			</Stack>
		);
	}

	if (!data.length)
		return (
			<Stack gap={2} alignItems="flex-start" id={tableId}>
				<Stack gap={1}>
					<HelpIcon size="lg" color="muted" />
					<Heading type="h2" fontSize="lg">
						No results found
					</Heading>
					<Text>Try adjusting your filter options.</Text>
				</Stack>
				<Button onClick={resetFilters}>Clear filters</Button>
			</Stack>
		);

	return (
		<Stack as="ul" gap={1} id={tableId}>
			{data.map((item) => (
				<DataListItem key={item.id} data={item} />
			))}
		</Stack>
	);
};

type DataListItemProps = {
	data: BusinessForAuditWithIndex;
};

const DataListItem = ({ data }: DataListItemProps) => {
	return (
		<Card as="li" shadow clickable>
			<CardInner>
				<Stack gap={1} width="100%" flexWrap="wrap">
					<H3>
						<CardLink href={`#${data.id}`}>{data.businessName}</CardLink>
					</H3>
					<Text>{`${data.city}, ${data.state}`}</Text>
					<Text>
						<Text fontWeight="bold">{`Destinations: `}</Text>
						{data.destinations.join(', ')}
					</Text>

					<Text>
						<Text fontWeight="bold">{`Services: `}</Text>
						{data.services.join(', ')}
					</Text>
				</Stack>
			</CardInner>
		</Card>
	);
};

const DataListItemSkeleton = () => {
	return (
		<Card as="li" shadow>
			<CardInner>
				<Stack gap={1}>
					<SkeletonHeading type="h3" width="50%" />
					<SkeletonText fontSize="sm" width="12%" />
					<SkeletonText fontSize="sm" width="25%" />
					<SkeletonText fontSize="sm" width="25%" />
					<VisuallyHidden>Loading</VisuallyHidden>
				</Stack>
			</CardInner>
		</Card>
	);
};
