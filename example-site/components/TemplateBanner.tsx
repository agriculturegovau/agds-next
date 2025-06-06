import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';
import { DirectionLink } from '@ag.ds-next/react/direction-link';

export type TemplateBannerProps = {
	/** Pretty name of template: e.g. Multi-page form */
	name: string;
	/** Template slug in the docs site. e.g. multi-page-form */
	slug: string;
};

export const TemplateBanner = ({ name, slug }: TemplateBannerProps) => {
	return (
		<Flex
			background="body"
			flexDirection={['column', 'row']}
			gap={[2, 1]}
			id="template-banner"
			padding={1}
			palette="dark"
		>
			<DirectionLink
				direction="left"
				href={`https://design-system.agriculture.gov.au/templates/${slug}`}
			>
				View {name} pattern overview
			</DirectionLink>
			<Text fontSize={['md', 'sm']} fontWeight="bold">
				{name}
			</Text>
		</Flex>
	);
};
