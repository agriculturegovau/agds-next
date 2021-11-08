import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { Box } from '@ag.ds-next/box';

import { Pkgs } from '../../types';

function Link({ path, children }: { path: string; children: string }) {
	const { asPath } = useRouter();

	return (
		<NextLink href={path} passHref>
			<a
				style={{
					textDecoration: path === asPath ? 'underline' : 'none',
				}}
			>
				{children}
			</a>
		</NextLink>
	);
}

type NavigationProps = {
	pkgs: Pkgs;
};

export function Navigation({ pkgs }: NavigationProps) {
	return (
		<Box
			as="nav"
			padding={2}
			style={{
				position: 'relative',
			}}
		>
			<div
				style={{
					position: 'sticky',
					top: '1rem',
				}}
			>
				<ul>
					<li>
						<Link path="/">Home</Link>
					</li>
					<li>
						<Link path="#">Github</Link>
					</li>
					<li>
						<h2
							style={{
								fontSize: '1rem',
								margin: '1rem 0 0.5rem 0',
							}}
						>
							Packages
						</h2>
						<ul>
							{pkgs.map(({ slug, name }) => (
								<li key={slug}>
									<Link path={`/packages/${slug}`}>{name}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</Box>
	);
}
