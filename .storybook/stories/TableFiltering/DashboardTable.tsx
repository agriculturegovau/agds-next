import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { StatusBadge, StatusBadgeTone } from '@ag.ds-next/react/badge';
import { SkeletonText } from '@ag.ds-next/react/skeleton';
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
import { Fragment } from 'react';
import { BusinessForAudit } from './lib/generateBusinessData';

const statusMap: {
	[key: string]: {
		label: string;
		tone: StatusBadgeTone;
	};
} = {
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
};

export const DashboardTable = ({
	data,
	loading,
}: {
	data: BusinessForAudit[];
	loading?: boolean;
}) => {
	return (
		<TableWrapper>
			<Table>
				<TableCaption>Establishments</TableCaption>
				<TableHead>
					<tr>
						<TableHeader width="30%" scope="col">
							Business name
						</TableHeader>
						<TableHeader scope="col">City</TableHeader>
						<TableHeader scope="col">State</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Employees
						</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Date registered
						</TableHeader>
						<TableHeader scope="col">Status</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{loading ? (
						<Fragment>
							{Array.from(Array(10).keys()).map((i) => (
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
										<SkeletonText />
										<VisuallyHidden>Loading</VisuallyHidden>
									</TableCell>
								</tr>
							))}
						</Fragment>
					) : (
						data.map(
							({
								id,
								businessName,
								city,
								state,
								numberOfEmployees,
								dateRegistered,
								status,
							}) => {
								const { label, tone } = statusMap[status];

								return (
									<tr key={id}>
										<TableCell>
											<TextLink href={`#${id}`}>{businessName}</TextLink>
										</TableCell>
										<TableCell>{city}</TableCell>
										<TableCell>{state}</TableCell>
										<TableCell textAlign="right">{numberOfEmployees}</TableCell>
										<TableCell textAlign="right">
											{dateRegistered.toLocaleDateString()}
										</TableCell>
										<TableCell>
											<StatusBadge label={label} tone={tone} />
										</TableCell>
									</tr>
								);
							}
						)
					)}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};
