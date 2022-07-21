import { Columns } from '@ag.ds-next/columns';
import { PictogramCard } from './PictogramCard';

type Pkg = {
	slug: string;
	group: string;
	title: string;
};

export const PkgCardList = ({ items }: { items: Pkg[] }) => (
	<Columns gap={1} gridTemplateColumns={{ xs: 1, sm: 2, md: 3 }} as="ul">
		{items.map(({ title, slug, group }) => (
			<PictogramCard
				title={title}
				pictogram={slug}
				href={`/packages/${group}/${slug}`}
				key={slug}
			/>
		))}
	</Columns>
);
