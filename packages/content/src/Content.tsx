import { Flex, Stack, BoxProps } from '@ag.ds-next/box';

const paddingYMap = {
	small: { xs: 1, md: 2 },
	medium: { xs: 1, md: 3 },
	large: { xs: 1, md: 4 },
} as const;

type ContentProps = {
	as?: React.ElementType;
	spacing?: keyof typeof paddingYMap;
	theme?: BoxProps['theme'];
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
		<Flex as={as} justifyContent="center" theme={theme} background={background}>
			<Stack
				width="100%"
				maxWidth={1280}
				paddingY={paddingYMap[spacing]}
				paddingX={{ xs: 1, md: 2 }}
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
}
