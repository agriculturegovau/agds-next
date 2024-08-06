import { Stack } from '../../../packages/react/src/stack';
import { SkeletonText } from '../../../packages/react/src/skeleton';
import { Text } from '../../../packages/react/src/text';
import { Card, CardInner, CardLink } from '../../../packages/react/src/card';
import { Columns } from '../../../packages/react/src/columns';
import { SkeletonHeading } from '../../../packages/react/src/skeleton';
import { Heading } from '../../../packages/react/src/heading';
import { VisuallyHidden } from '../../../packages/react/src/a11y';
import { AlertFilledIcon, HelpIcon } from '../../../packages/react/src/icon';
import { Button } from '../../../packages/react/src/button';
import { ApiData, numberFormatter } from './utils';

export function DataLoadingWithCards({
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

function LoadingState() {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<Columns as="ul" cols={[1, 2, 3, 3]}>
				{Array.from(Array(9).keys()).map((i) => (
					<Card as="li" key={i} shadow>
						<CardInner>
							<Stack gap={1}>
								<SkeletonHeading type="h2" width="50%" />
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

function ErrorState() {
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

function EmptyState() {
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

function FinalState({ items }: { items: NonNullable<ApiData['results']> }) {
	return (
		<Stack gap={2}>
			<Heading type="h1">Star wars planets</Heading>
			<Columns as="ul" cols={[1, 2, 3, 3]}>
				{items.map((item) => {
					return (
						<Card as="li" key={item.id} shadow clickable>
							<CardInner>
								<Stack gap={1}>
									<Heading as="h2" type="h3">
										<CardLink href="#">{item.name}</CardLink>
									</Heading>
									<Text as="p">
										Population:{' '}
										{typeof item.population === 'number'
											? numberFormatter.format(item.population)
											: 'Unknown'}
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
