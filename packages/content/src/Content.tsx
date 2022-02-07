import { Flex, Stack, BoxProps } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';

const paddingYMap = {
	small: { xs: 1, md: 2 },
	medium: { xs: 1, md: 3 },
	large: { xs: 1, md: 4 },
} as const;

type ContentProps = {
	as?: React.ElementType;
	spacing?: keyof typeof paddingYMap;
	theme?: BoxProps['palette'];
	background?: BoxProps['background'];
};

export function Content({
	as = 'section',
	spacing = 'small',
	theme,
	background,
	children,
}: React.PropsWithChildren<ContentProps>) {
	return (
		<Flex
			as={as}
			justifyContent="center"
			palette={theme}
			background={background}
		>
			<Stack
				width="100%"
				maxWidth={tokens.maxWidth.container}
				paddingY={paddingYMap[spacing]}
				paddingX={tokens.containerPadding}
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
}
