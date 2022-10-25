import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { DirectionLink } from '@ag.ds-next/direction-link';

export type TemplateBannerProps = {
	/** Pretty name of template: e.g. Multi-page form */
	name: string;
	/** Template slug in the docs site. e.g. multi-page-form */
	slug: string;
};

export const TemplateBanner = ({ name, slug }: TemplateBannerProps) => {
	return (
		<Flex
			gap={[2, 1]}
			palette="dark"
			background="shade"
			padding={1}
			flexDirection={['column', 'row']}
		>
			<DirectionLink
				direction="left"
				href={`https://steelthreads.github.io/agds-next/templates/${slug}`}
			>
				View {name} template overview
			</DirectionLink>
			<Text fontSize={['md', 'sm']} fontWeight="bold">
				{name}
			</Text>
		</Flex>
	);
};
