import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';

export type SideBarTitleProps = PropsWithChildren<{
	id?: string;
	title: string;
	subtitle?: string;
}>;

export function SideBarTitle({ id, title, subtitle }: SideBarTitleProps) {
	return (
		<Flex
			borderBottom
			paddingBottom={1}
			justifyContent="space-between"
			alignItems="center"
			display={{ xs: 'none', md: 'flex' }}
			gap={1}
		>
			<Stack gap={0.5}>
				<Box
					as="h2"
					id={id}
					color="text"
					fontSize="lg"
					fontWeight="bold"
					lineHeight="heading"
				>
					{title}
				</Box>
				{subtitle && (
					<Text color="muted" fontSize="xs">
						{subtitle}
					</Text>
				)}
			</Stack>
		</Flex>
	);
}
