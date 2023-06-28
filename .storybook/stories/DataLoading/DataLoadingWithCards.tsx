import { Stack } from '@ag.ds-next/react/stack';
import { SkeletonText } from '@ag.ds-next/react/skeleton';
import { Text } from '@ag.ds-next/react/text';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SkeletonHeading } from '@ag.ds-next/react/skeleton';
import { Heading } from '@ag.ds-next/react/heading';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { AlertFilledIcon, HelpIcon } from '@ag.ds-next/react/icon';
import { Button } from '@ag.ds-next/react/button';
import { numberFormatter, useFetchStarWarsAPI } from './utils';

export function DataLoadingWithCards() {
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
			<Columns as="ul" cols={[1, 2, 3, 3]}>
				{Array.from(Array(9).keys()).map((i) => (
					<Card as="li" key={i} shadow>
						<CardInner>
							<Stack gap={1}>
								<SkeletonHeading type="h3" width="50%" />
								<SkeletonText fontSize="sm" width="25%" />
								<VisuallyHidden>Loading</VisuallyHidden>
							</Stack>
						</CardInner>
					</Card>
				))}
			</Columns>
		</Stack>
	);
}

export function ErrorState({}: {}) {
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

export function FinalState({
	items,
}: {
	items: { population: string; name: string }[];
}) {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<Columns as="ul" cols={[1, 2, 3, 3]}>
				{items.map((item) => {
					const parsedPopulation = parseInt(item.population);
					return (
						<Card as="li" key={item.name} shadow clickable>
							<CardInner>
								<Stack gap={1}>
									<Heading type="h3">
										<CardLink href="#">{item.name}</CardLink>
									</Heading>
									<Text as="p">
										Population:{' '}
										{isNaN(parsedPopulation)
											? 'Unknown'
											: numberFormatter.format(parsedPopulation)}
									</Text>
								</Stack>
							</CardInner>
						</Card>
					);
				})}
			</Columns>
		</Stack>
	);
}
