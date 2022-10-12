import {
	Card,
	CardInner,
	CardLink,
	ChevronRightIcon,
	Flex,
	LinkProps,
} from '@ag.ds-next/design-system';
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
