// import type { BoxTheme, BoxThemeColors } from '@ag.ds-next/core';
import { Stack, Flex, Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

type HeaderProps = {
	theme?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	logo: JSX.Element;
};

const themeMap = {
	light: {
		theme: 'light',
		background: 'page',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
	},
} as const;

export const Header = ({ theme = 'dark', logo }: HeaderProps) => (
	<Flex
		as="header"
		theme={themeMap[theme].theme}
		background={themeMap[theme].background}
		color="text"
		paddingY={3}
		paddingX={1}
		justifyContent="center"
	>
		<Flex
			justifyContent="flex-start"
			maxWidth={{ md: 900, xl: 1200 }}
			width="100%"
		>
			<Flex gap={1} flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
				{logo}
				<Box borderRight display={{ xs: 'none', md: 'block' }} />
				<Stack justifyContent="center">
					<Heading fontSize={{ xs: 'md', md: 'xl' }}>AG Design-System</Heading>
					<Text color="muted" fontSize={{ xs: 'sm', md: 'md' }}>
						Welcome to the AG Design-System
					</Text>
				</Stack>
			</Flex>
		</Flex>
	</Flex>
);
