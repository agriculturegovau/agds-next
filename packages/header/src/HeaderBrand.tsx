import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

type HeaderBrandProps = {
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
				<Flex
					alignItems="flex-start"
					css={{
						' img': { maxWidth: 266 },
						' svg': { maxWidth: 266, width: '100%' },
					}}
				>
					{logo}
				</Flex>
			) : null}
			{logo ? <Box borderRight display={{ xs: 'none', md: 'block' }} /> : null}
			<Stack justifyContent="flex-start">
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
