import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';

import { getPictogram } from './pictograms';

type Pkg = {
	slug: string;
	group: string;
	title: string;
};

const PkgCard = ({ pkg }: { pkg: Pkg }) => (
	<Card as="li" clickable shadow>
		{/* Place holder - this needs to be an image */}
		<Flex
			alignItems="center"
			justifyContent="center"
			padding={1}
			background="shade"
		>
			<img src={getPictogram(pkg.slug).src} alt={`Pictogram of ${pkg.title}`} />
		</Flex>
		<CardInner>
			<CardLink href={`/packages/${pkg.group}/${pkg.slug}`}>
				{pkg.title}
				<Icon icon="chevronRight" size={1} />
			</CardLink>
		</CardInner>
	</Card>
);

export const PkgCardList = ({ items }: { items: Pkg[] }) => (
	<Columns gap={1} flexWrap="wrap" as="ul">
		{items.map((p) => (
			<Column columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }} key={p.slug}>
				<PkgCard pkg={p} />
			</Column>
		))}
	</Columns>
);
