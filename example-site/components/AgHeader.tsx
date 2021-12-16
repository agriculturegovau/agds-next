import Image from 'next/image';

import { Box, Stack } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';

import auLogo from '../public/header-logo-agov.png';

export const AgHeader = () => {
	return (
		<Stack>
			<Header
				variant="dark"
				logo={<Image src={auLogo} alt="Logo" width="256" height="62" />}
				heading="AG Design-System"
				subline="Welcome to the AG Design-System"
			/>

			{/* FIXME: NavBar this needs to be a custom thing */}
			<Box as="nav" theme="dark" background="page" color="text">
				<Box as="ul">
					<li>
						<a>Home</a>
					</li>
				</Box>
				<Box theme="dark" background="shade" paddingTop={0.5} />
			</Box>
		</Stack>
	);
};
