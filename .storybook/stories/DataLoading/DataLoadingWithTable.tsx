import { Stack } from '@ag.ds-next/react/stack';
import {
	TableWrapper,
	Table,
	TableCaption,
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
import { ApiData, numberFormatter, useFetchStarWarsAPI } from './utils';

export function DataLoadingWithTables() {
	const { data, loading, error } = useFetchStarWarsAPI();

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

export function LoadingState() {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<TableWrapper>
				<Table>
					<TableHead>
						<tr>
							<TableHeader width="20%" scope="col">
								Name
							</TableHeader>
							<TableHeader width="60%" scope="col">
								Climate
							</TableHeader>
							<TableHeader width="20%" textAlign="right" scope="col">
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
									<SkeletonText width="50%" />
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

export function ErrorState() {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
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

export function EmptyState() {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<Stack gap={1}>
				<HelpIcon size="lg" color="muted" />
				<Heading type="h1" fontSize="lg">
					No results found
				</Heading>
			</Stack>
		</Stack>
	);
}

export function FinalState({ items }: { items: ApiData['results'] }) {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<TableWrapper>
				<Table>
					<TableCaption>Star wars planets</TableCaption>
					<TableHead>
						<tr>
							<TableHeader width="20%" scope="col">
								Name
							</TableHeader>
							<TableHeader width="60%" scope="col">
								Climate
							</TableHeader>
							<TableHeader width="20%" textAlign="right" scope="col">
								Population
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{items.map((item) => {
							const parsedPopulation = parseInt(item.population);
							return (
								<tr key={item.name}>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.climate}</TableCell>
									<TableCell textAlign="right">
										{isNaN(parsedPopulation)
											? 'Unknown'
											: numberFormatter.format(parsedPopulation)}
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
