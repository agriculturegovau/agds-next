import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { useLinkComponent } from '@ag.ds-next/core';

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
	const Link = useLinkComponent();

	return (
		<Flex
			as={Link}
			href={href}
			flexDirection={{ xs: 'column', md: 'row' }}
			color="text"
			gap={1}
			focus
			alignItems="stretch"
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
					maxWidth={{ xs: '12rem', sm: '16rem' }}
					css={{
						' img, svg': { width: '100%' },
					}}
				>
					{logo}
				</Flex>
			) : null}
			{logo ? <Box borderRight display={{ xs: 'none', md: 'block' }} /> : null}
			<Stack justifyContent="center">
				<Text
					lineHeight="heading"
					fontSize={{ xs: 'md', sm: 'xl' }}
					fontWeight="bold"
				>
					{heading}
				</Text>
				{subline && (
					<Text color="muted" fontSize={{ xs: 'sm', sm: 'md' }}>
						{subline}
					</Text>
				)}
			</Stack>
		</Flex>
	);
}
