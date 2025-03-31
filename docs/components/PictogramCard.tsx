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
	<Card
		as="li"
		clickable
		content={
			<CardInner>
				<CardLink {...props}>
					{title}
					<ChevronRightIcon />
				</CardLink>
			</CardInner>
		}
		header={
			<Flex
				alignItems="center"
				background="shade"
				justifyContent="center"
				padding={1}
			>
				<img alt="" aria-hidden src={getPictogram(pictogram).src} />
			</Flex>
		}
		shadow
	/>
);
