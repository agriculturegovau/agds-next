import { VisuallyHidden } from '../../../../packages/react/src/a11y';
import { Stack } from '../../../../packages/react/src/stack';
import { Card, CardInner, CardLink } from '../../../../packages/react/src/card';
import { H3, Heading } from '../../../../packages/react/src/heading';
import {
	SkeletonHeading,
	SkeletonText,
} from '../../../../packages/react/src/skeleton';
import { Text } from '../../../../packages/react/src/text';
import { HelpIcon } from '../../../../packages/react/src/icon';
import { Button } from '../../../../packages/react/src/button';
import { BusinessForAuditWithIndex } from '../lib/generateBusinessData';
import { useSortAndFilterContext } from '../lib/contexts';
import { tableId } from './DataTable';

type DataListProps = {
	loading: boolean;
	/** The data to display in the list */
	data: BusinessForAuditWithIndex[];
};

export const DataList = ({ loading, data }: DataListProps) => {
	const { pagination, resetFilters } = useSortAndFilterContext();

	return (
		<div id={tableId}>
			{loading ? (
				<Stack as="ul" gap={1}>
					{Array.from(Array(pagination.perPage).keys()).map((i) => (
						<DataListItemSkeleton key={i} />
					))}
				</Stack>
			) : (
				data.length > 0 && (
					<Stack as="ul" gap={1}>
						{data.map((item) => (
							<DataListItem data={item} key={item.id} />
						))}
					</Stack>
				)
			)}

			<Stack alignItems="flex-start" gap={2} role="alert">
				{!loading && data.length === 0 && (
					<>
						<Stack gap={1}>
							<HelpIcon color="muted" size="lg" />
							<Heading fontSize="lg" type="h2">
								No results found
							</Heading>
							<Text>Try adjusting your filter options.</Text>
						</Stack>
						<Button onClick={resetFilters}>Clear filters</Button>
					</>
				)}
			</Stack>
		</div>
	);
};

type DataListItemProps = {
	data: BusinessForAuditWithIndex;
};

const DataListItem = ({ data }: DataListItemProps) => {
	return (
		<Card as="li" clickable shadow>
			<CardInner>
				<Stack flexWrap="wrap" gap={1} width="100%">
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
