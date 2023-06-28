import { Stack } from '@ag.ds-next/react/stack';
import {
	TableWrapper,
	Table,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '@ag.ds-next/react/table';
import { SkeletonText } from '@ag.ds-next/react/skeleton';
import { Text } from '@ag.ds-next/react/text';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { AlertFilledIcon, HelpIcon } from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import { ApiData, numberFormatter } from './utils';

export function DataLoadingWithTable({
	data,
	loading,
	error,
}: {
	data: ApiData | undefined;
	loading: boolean;
	error: boolean;
}) {
	if (loading) {
		return <LoadingState />;
	}

	if (error) {
		return <ErrorState />;
	}

	if (!data?.results?.length) {
		return <EmptyState />;
	}

	return <FinalState items={data.results} />;
}

const tableHeadingId = 'star-wars-planets-table-heading';

function LoadingState() {
	return (
		<Stack gap={2}>
			<Heading type="h1" id={tableHeadingId}>
				Star wars planets
			</Heading>
			<TableWrapper>
				<Table tableLayout="fixed" aria-labelledby={tableHeadingId}>
					<TableHead>
						<tr>
							<TableHeader width="10rem" scope="col">
								ID
							</TableHeader>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Climate</TableHeader>
							<TableHeader width="10rem" textAlign="right" scope="col">
								Population
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Array.from(Array(9).keys()).map((i) => (
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
							</tr>
						))}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}

function ErrorState() {
	return (
		<Stack gap={2}>
			<Heading type="h1" id={tableHeadingId}>
				Star wars planets
			</Heading>
			<Stack gap={2}>
				<Stack gap={1}>
					<AlertFilledIcon color="error" size="lg" />
					<Heading type="h2" fontSize="lg">
						Failed to load
					</Heading>
					<Text>
						There was an error loading the data. Click retry to try again.
					</Text>
				</Stack>
				<div>
					<Button>Retry</Button>
				</div>
			</Stack>
		</Stack>
	);
}

function EmptyState() {
	return (
		<Stack gap={2}>
			<Heading type="h1" id={tableHeadingId}>
				Star wars planets
			</Heading>
			<Stack gap={2}>
				<Stack gap={1}>
					<HelpIcon size="lg" color="muted" />
					<Heading type="h2" fontSize="lg">
						No planets found
					</Heading>
				</Stack>
				<div>
					<Button>Add new planet</Button>
				</div>
			</Stack>
		</Stack>
	);
}

function FinalState({ items }: { items: NonNullable<ApiData['results']> }) {
	return (
		<Stack gap={2}>
			<Heading type="h1" id={tableHeadingId}>
				Star wars planets
			</Heading>
			<TableWrapper>
				<Table tableLayout="fixed" aria-labelledby={tableHeadingId}>
					<TableHead>
						<tr>
							<TableHeader width="10rem" scope="col">
								ID
							</TableHeader>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Climate</TableHeader>
							<TableHeader width="10rem" textAlign="right" scope="col">
								Population
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{items.map((item) => {
							return (
								<tr key={item.id}>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.climate}</TableCell>
									<TableCell textAlign="right">
										{typeof item.population === 'number'
											? numberFormatter.format(item.population)
											: 'Unknown'}
									</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}
