import { Stack } from '../../../packages/react/src/stack';
import {
	TableWrapper,
	Table,
	TableRow,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '../../../packages/react/src/table';
import { SkeletonText } from '../../../packages/react/src/skeleton';
import { Text } from '../../../packages/react/src/text';
import { VisuallyHidden } from '../../../packages/react/src/a11y';
import { AlertFilledIcon, HelpIcon } from '../../../packages/react/src/icon';
import { Heading } from '../../../packages/react/src/heading';
import { Button } from '../../../packages/react/src/button';
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
						<TableRow>
							<TableHeader width="10rem" scope="col">
								ID
							</TableHeader>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Climate</TableHeader>
							<TableHeader width="10rem" textAlign="right" scope="col">
								Population
							</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.from(Array(9).keys()).map((i) => (
							<TableRow key={i}>
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
							</TableRow>
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
						<TableRow>
							<TableHeader width="10rem" scope="col">
								ID
							</TableHeader>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Climate</TableHeader>
							<TableHeader width="10rem" textAlign="right" scope="col">
								Population
							</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((item) => {
							return (
								<TableRow key={item.id}>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.climate}</TableCell>
									<TableCell textAlign="right">
										{typeof item.population === 'number'
											? numberFormatter.format(item.population)
											: 'Unknown'}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}
