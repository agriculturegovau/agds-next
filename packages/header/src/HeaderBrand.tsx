import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

type HeaderBrandProps = {
	// variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	href?: string;
	heading: string;
	subline?: string;
	logo?: JSX.Element;
};

export function HeaderBrand({
	href = '/',
	logo,
	heading,
	subline,
}: HeaderBrandProps) {
	return (
		<Flex
			as="a"
			href={href}
			flexDirection={{ xs: 'column', md: 'row' }}
			color="text"
			gap={1}
			focus
			css={{
				textDecoration: 'none',
				':hover': {
					textDecoration: 'underline',
					textDecorationSkipInk: 'auto',
				},
			}}
		>
			{logo ? (
				<Box css={{ ' img': { maxWidth: 266 } }} borderRight paddingRight={1}>
					{logo}
				</Box>
			) : null}
			<Stack justifyContent="center">
				<Heading fontSize={{ xs: 'md', md: 'xl' }}>{heading}</Heading>
				{subline && (
					<Text color="muted" fontSize={{ xs: 'sm', md: 'md' }}>
						{subline}
					</Text>
				)}
			</Stack>
		</Flex>
	);
}
