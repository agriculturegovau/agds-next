import { Stack, Flex, Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

import { HeaderContainer } from './HeaderContainer';

type HeaderProps = {
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	logo?: JSX.Element;
};

export function Header({ variant = 'dark', logo }: HeaderProps) {
	return (
		<HeaderContainer variant={variant}>
			<Flex gap={1} flexDirection={{ xs: 'column', md: 'row' }}>
				{logo}
				<Box borderRight display={{ xs: 'none', md: 'block' }} />
				<Stack justifyContent="center">
					<Heading fontSize={{ xs: 'md', md: 'xl' }}>AG Design-System</Heading>
					<Text color="muted" fontSize={{ xs: 'sm', md: 'md' }}>
						Welcome to the AG Design-System
					</Text>
				</Stack>
			</Flex>
		</HeaderContainer>
	);
}
