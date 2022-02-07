import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';

import { getPictogram } from './pictograms';

export const PictogramCard = ({
	title,
	slug,
	pictogram,
}: {
	title: string;
	slug: string;
	pictogram: string;
}) => (
	<Card clickable shadow>
		<Flex
			alignItems="center"
			justifyContent="center"
			padding={1}
			background="shade"
		>
			<img src={getPictogram(pictogram).src} alt={`Pictogram of ${title}`} />
		</Flex>
		<CardInner>
			<CardLink href={slug}>
				{title}
				<Icon icon="chevronRight" size={1} />
			</CardLink>
		</CardInner>
	</Card>
);
