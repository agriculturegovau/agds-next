import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Flex } from '@ag.ds-next/react/flex';
import { ChevronRightIcon } from '@ag.ds-next/react/icon';
import { LinkProps } from '@ag.ds-next/react/core';
import { getPictogram } from './pictograms';

export const PictogramCard = ({
	pictogram,
	title,
	...props
}: {
	pictogram: string;
	title: string;
} & LinkProps) => (
	<Card as="li" clickable shadow>
		<Flex
			alignItems="center"
			justifyContent="center"
			padding={1}
			background="shade"
		>
			<img src={getPictogram(pictogram).src} alt="" aria-hidden="true" />
		</Flex>
		<CardInner>
			<CardLink {...props}>
				{title}
				<ChevronRightIcon />
			</CardLink>
		</CardInner>
	</Card>
);
