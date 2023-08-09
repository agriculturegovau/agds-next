import { Flex } from '../flex';
import { Text } from '../text';

export type SideBarTitleProps = {
	title: string;
	subtitle?: string;
};

export function CollapsingSideBarTitle({ title, subtitle }: SideBarTitleProps) {
	return (
		<Flex display={{ xs: 'none', md: 'flex' }} flexDirection="column" gap={0.5}>
			<Text
				as="h2"
				color="text"
				fontSize="md"
				fontWeight="bold"
				lineHeight="heading"
			>
				{title}
			</Text>
			{subtitle && (
				<Text color="muted" fontSize="xs">
					{subtitle}
				</Text>
			)}
		</Flex>
	);
}
