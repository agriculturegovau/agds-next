import { Stack } from '../stack';
import {
	FeatureLinkListItem,
	FeatureLinkListItemProps,
} from './FeatureLinkListItem';
import { FeatureLinkListBackground } from './utils';

export type FeatureLinkListProps = {
	links: Omit<FeatureLinkListItemProps, 'children'>[];
	background?: FeatureLinkListBackground;
};

export const FeatureLinkList = ({
	links,
	background,
	...props
}: FeatureLinkListProps) => {
	return (
		<Stack {...props} as="ul" borderTop>
			{links.map((props, index) => (
				<FeatureLinkListItem background={background} key={index} {...props} />
			))}
		</Stack>
	);
};
