import { Flex } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { DirectionLink } from '@ag.ds-next/react/direction-link';

export type PatternBannerProps = {
	/** Pretty name of template: e.g. Multi-page form */
	name: string;
	/** Template slug in the docs site. e.g. multi-page-form */
	slug: string;
};

export const PatternBanner = ({ name, slug }: PatternBannerProps) => {
	return (
		<Flex
			gap={[2, 1]}
			palette="dark"
			background="body"
			padding={1}
			flexDirection={['column', 'row']}
		>
			<DirectionLink
				direction="left"
				href={`https://design-system.agriculture.gov.au/patterns/${slug}`}
			>
				View {name} pattern overview
			</DirectionLink>
			<Text fontSize={['md', 'sm']} fontWeight="bold">
				{name}
			</Text>
		</Flex>
	);
};
