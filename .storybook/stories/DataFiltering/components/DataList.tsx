import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { StatusBadge } from '@ag.ds-next/react/badge';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { H3 } from '@ag.ds-next/react/heading';
import { SkeletonBox } from '@ag.ds-next/react/skeleton';
import { Text } from '@ag.ds-next/react/text';
import { BusinessForAuditWithIndex } from '../lib/generateBusinessData';
import { STATUS_MAP } from '../lib/utils';

type DataListProps = {
	loading: boolean;
	/** The data to display in the list */
	data: BusinessForAuditWithIndex[];
};

export const DataList: React.FC<DataListProps> = ({ loading, data }) => {
	return (
		<Stack as="ul" gap={1}>
			{loading
				? Array.from({ length: 10 }, (_, i) => i).map((i) => (
						<DataListItemSkeleton key={i} />
				  ))
				: data.map((item) => <DataListItem key={item.id} data={item} />)}
		</Stack>
	);
};

type DataListItemProps = {
	data: BusinessForAuditWithIndex;
};

const DataListItem: React.FC<DataListItemProps> = ({ data }) => {
	return (
		<Card as="li" shadow clickable>
			<CardInner>
				<Stack gap={0.5} width="100%" flexWrap="wrap">
					<H3>
						<CardLink href={`#${data.id}`}>{data.businessName}</CardLink>
					</H3>

					<Text as="p">
						<VisuallyHidden>Type: </VisuallyHidden>
						{data.assignee || 'Unassigned'}
					</Text>

					<Flex
						gap={0.5}
						flexWrap="wrap"
						justifyContent="space-between"
						alignItems="center"
					>
						<StatusBadge {...STATUS_MAP[data.status]} />
						<Text color="muted" fontSize="xs">
							<VisuallyHidden>{'CAR ID: '}</VisuallyHidden>
							{data.id}
						</Text>
					</Flex>
				</Stack>
			</CardInner>
		</Card>
	);
};

const DataListItemSkeleton = () => {
	return (
		<div>
			<VisuallyHidden>Loading</VisuallyHidden>
			<SkeletonBox height="6.5rem" />
		</div>
	);
};
