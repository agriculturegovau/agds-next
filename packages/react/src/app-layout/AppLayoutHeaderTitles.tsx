import { Flex } from '../box';
import { Text } from '../text';

export type AppLayoutHeaderTitlesProps = {
	/** Title of the application.*/
	title: string;
	/** Subtitle of the application. */
	subTitle: string;
};

export function AppLayoutHeaderTitles({
	title,
	subTitle,
}: AppLayoutHeaderTitlesProps) {
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems={{ xs: 'center', lg: 'flex-start' }}
			flexGrow={{ xs: 1, md: 0 }}
			css={{ marginRight: 'auto' }}
		>
			<Text fontSize={{ xs: 'md', sm: 'lg' }} fontWeight="bold">
				{title}
			</Text>
			<Text color="muted" fontSize="xs" display={{ xs: 'none', lg: 'block' }}>
				{subTitle}
			</Text>
		</Flex>
	);
}
