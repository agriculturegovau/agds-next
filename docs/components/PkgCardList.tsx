import { Columns } from '@ag.ds-next/react';
import { PictogramCard } from './PictogramCard';

type Pkg = {
	slug: string;
	title: string;
};

export const PkgCardList = ({ items }: { items: Pkg[] }) => (
	<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
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
