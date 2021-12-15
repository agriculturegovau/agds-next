import Image from 'next/image';

import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

import auLogo from '../public/header-logo-agov.png';

export const Header = () => {
	return (
		<Box>
			<Flex
				as="header"
				theme="dark"
				background="page"
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
						<Image src={auLogo} alt="Logo" width="256" height="62" />
						<Box borderRight display={{ xs: 'none', md: 'block' }} />
						<Stack justifyContent="center">
							<Heading fontSize={{ xs: 'md', md: 'xl' }}>
								AG Design-System
							</Heading>
							<Text color="muted" fontSize={{ xs: 'sm', md: 'md' }}>
								Welcome to the AG Design-System
							</Text>
						</Stack>
					</Flex>
				</Flex>
			</Flex>

			{/* FIXME: NavBar this needs to be a custom thing */}
			<Box as="nav" theme="dark" background="page" color="text">
				<Box as="ul">
					<li>
						<a>Home</a>
					</li>
				</Box>
				<Box theme="dark" background="shade" paddingTop={0.5} />
			</Box>
		</Box>
	);
};
