import { Button } from '@ag.ds-next/react/button';
import { Columns } from '@ag.ds-next/react/columns';
import { Heading } from '@ag.ds-next/react/heading';
import { HelpIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { Stack } from '@ag.ds-next/react/stack';
import { PictogramCard } from './PictogramCard';

type Pkg = {
	slug: string;
	title: string;
};

export const PkgCardList = ({ items }: { items: Pkg[] }) => (
	<Columns as="ul" cols={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
		{items.map(({ title, slug }) => (
			<PictogramCard
				title={title}
				pictogram={slug}
				href={`/components/${slug}`}
				key={slug}
			/>
		))}
	</Columns>
);

export const PkgCardListEmptyState = ({
	onClear,
}: {
	onClear?: () => void;
}) => (
	<Stack gap={2} alignItems="flex-start" role="status">
		<Stack gap={1}>
			<HelpIcon size="lg" color="muted" />
			<Heading type="h2" fontSize="lg">
				No components found
			</Heading>
			<Text>Try adjusting your filter options.</Text>
		</Stack>
		<Button onClick={onClear}>Clear filters</Button>
	</Stack>
);
