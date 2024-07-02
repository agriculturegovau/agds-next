import { Flex } from '../flex';
import { Text } from '../text';

export type SideBarTitleProps = {
	title: string;
	subtitle?: string;
};

export function CollapsingSideBarTitle({ title, subtitle }: SideBarTitleProps) {
	return (
		<Flex flexDirection="column" gap={0.5}>
			<Text
				as="h2"
				color="text"
				fontSize="md"
				fontWeight="bold"
				lineHeight="heading"
			>
				{title}csbt
			</Text>
			{subtitle && (
				<Text color="muted" fontSize="xs">
					{subtitle}csbs
				</Text>
			)}
		</Flex>
	);
}
