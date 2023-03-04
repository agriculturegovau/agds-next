import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { StatusBadge, StatusBadgeTone } from '@ag.ds-next/react/badge';
import { SkeletonBox, SkeletonText } from '@ag.ds-next/react/skeleton';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { Fragment } from 'react';
import { format } from 'date-fns';
import { BusinessForAudit } from '../lib/generateBusinessData';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Flex } from '@ag.ds-next/react/box';

const DashboardTableRowAssignee = ({
	assignee,
}: {
	/** The name of the assignee, if set */
	assignee: string | undefined;
}) => {
	if (!assignee) {
		return <TableCell>-</TableCell>;
	}

	return (
		<TableCell>
			<Flex alignItems="center" gap={0.25}>
				<Avatar name={assignee} size="sm" />
				<Text>{assignee}</Text>
			</Flex>
		</TableCell>
	);
};

export const DashboardTable = ({
	caption,
	data,
	loading,
	itemsPerPage = 10,
}: {
	caption: string;
	data: BusinessForAudit[];
	loading?: boolean;
	itemsPerPage?: number;
}) => {
	if (!loading && data.length === 0) {
		return <Text>No results</Text>;
	}

	return (
		<TableWrapper>
			<Table>
				<TableCaption>{caption}</TableCaption>
				<TableHead>
					<tr>
						<TableHeader width="25%" scope="col">
							Business name
						</TableHeader>
						<TableHeader scope="col" width="15%">
							Assignee
						</TableHeader>
						<TableHeader scope="col" width="20%">
							City
						</TableHeader>
						<TableHeader textAlign="right" scope="col" width="10%">
							Employees
						</TableHeader>
						<TableHeader textAlign="right" scope="col" width="15%">
							Date registered
						</TableHeader>
						<TableHeader scope="col" width="15%">
							Status
						</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{loading ? (
						<Fragment>
							{Array.from(Array(itemsPerPage).keys()).map((i) => (
								<tr key={i}>
									<TableCell>
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
									<TableCell>
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
									<TableCell>
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
									<TableCell>
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
									<TableCell>
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
									<TableCell>
										<SkeletonBox height={32} />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
								</tr>
							))}
						</Fragment>
					) : (
						<Fragment>
							{data.map(
								({
									id,
									assignee,
									businessName,
									city,
									state,
									numberOfEmployees,
									requestDate,
									status,
								}) => {
									return (
										<tr key={id}>
											<TableCell>
												<TextLink href={`#${id}`}>{businessName}</TextLink>
											</TableCell>
											<DashboardTableRowAssignee assignee={assignee} />
											<TableCell>
												{city}, {state}
											</TableCell>
											<TableCell textAlign="right">
												{numberOfEmployees}
											</TableCell>
											<TableCell textAlign="right">
												{format(requestDate, 'dd/MM/yyyy')}
											</TableCell>
											<TableCell>
												<StatusBadge {...STATUS_MAP[status]} />
											</TableCell>
										</tr>
									);
								}
							)}
						</Fragment>
					)}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};

const STATUS_MAP = {
	notBooked: {
		label: 'Not booked',
		tone: 'neutral',
	},
	booked: {
		label: 'Booked',
		tone: 'info',
	},
	completed: {
		label: 'Completed',
		tone: 'success',
	},
	cancelled: {
		label: 'Cancelled',
		tone: 'error',
	},
} as const;
