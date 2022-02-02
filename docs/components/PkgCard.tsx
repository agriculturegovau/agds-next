import { Box, Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';

type Pkg = {
	slug: string;
	group: string;
	title: string;
};

export const PkgCard = ({ pkg }: { pkg: Pkg }) => (
	<Card as="li" clickable shadow>
		{/* Place holder - this needs to be an image */}
		<Box width={'100%'} height={100} background="shade" />
		<CardInner>
			<Flex
				as={CardLink}
				justifyContent="space-between"
				href={`/packages/${pkg.group}/${pkg.slug}`}
			>
				{pkg.title}
				<Icon icon="chevronRight" size={1} />
			</Flex>
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
