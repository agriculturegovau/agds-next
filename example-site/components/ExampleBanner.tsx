import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { DirectionLink } from '../../packages/direction-link/src';

export type ExampleBannerProps = {
	/** Pretty name of template: e.g. Multi-step form */
	templateName: string;
	/** Template slug in the docs site. e.g. multi-step-form */
	templateSlug: string;
};

export const ExampleBanner = ({
	templateName,
	templateSlug,
}: ExampleBannerProps) => {
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
				href={`https://steelthreads.github.io/agds-next/templates/${templateSlug}`}
			>{`View ${templateName} template overview`}</DirectionLink>
			<Text fontSize={['md', 'sm']} fontWeight="bold">
				{templateName}
			</Text>
		</Flex>
	);
};
