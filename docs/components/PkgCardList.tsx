import { Columns, Column } from '@ag.ds-next/columns';
import { PictogramCard } from './PictogramCard';

type Pkg = {
	slug: string;
	group: string;
	title: string;
};

export const PkgCardList = ({ items }: { items: Pkg[] }) => (
	<Columns gap={1} as="ul">
		{items.map(({ title, slug, group }) => (
			<Column
				key={slug}
				as="li"
				columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
			>
				<PictogramCard
					title={title}
					pictogram={slug}
					slug={`/packages/${group}/${slug}`}
				/>
			</Column>
		))}
	</Columns>
);
