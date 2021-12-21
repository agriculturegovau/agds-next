import { Box } from '@ag.ds-next/box';

export function MainNav({
	children,
}: React.PropsWithChildren<{
	variant: 'dark' | 'darkAlt' | 'light' | 'lightAlt';
}>) {
	return (
		<Box as="nav">
			<ul>{children}</ul>
		</Box>
	);
}
