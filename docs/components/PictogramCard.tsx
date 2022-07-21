import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Flex } from '@ag.ds-next/box';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import { LinkProps } from '@ag.ds-next/core';
import { getPictogram } from './pictograms';

export const PictogramCard = ({
	pictogram,
	title,
	...props
}: {
	pictogram: string;
	title: string;
} & LinkProps) => (
	<Card clickable shadow as="li">
		<Flex
			alignItems="center"
			justifyContent="center"
			padding={1}
			background="shade"
		>
			<img src={getPictogram(pictogram).src} alt={`Pictogram of ${title}`} />
		</Flex>
		<CardInner>
			<CardLink {...props}>
				{title}
				<ChevronRightIcon size="sm" weight="bold" />
			</CardLink>
		</CardInner>
	</Card>
);
