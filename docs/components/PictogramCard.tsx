import {
	Card,
	CardInner,
	CardLink,
	Flex,
	ChevronRightIcon,
	LinkProps,
} from '@ag.ds-next/react';
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
				<ChevronRightIcon size="sm" weight="bold" />
			</CardLink>
		</CardInner>
	</Card>
);
