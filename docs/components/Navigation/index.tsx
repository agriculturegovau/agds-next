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
	style?: React.CSSProperties;
};

export function Navigation({ pkgs, style }: NavigationProps) {
	return (
		<nav
			style={{
				position: 'relative',
				padding: '1rem',
				...style,
			}}
		>
			<div
				style={{
					position: 'sticky',
					top: '1rem',
				}}
			>
				<ul
					style={{
						listStyle: 'none',
						margin: 0,
						padding: 0,
						lineHeight: 1.5,
					}}
				>
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
						<ul
							style={{
								listStyle: 'none',
								margin: 0,
								padding: 0,
								paddingLeft: '0.5rem',
							}}
						>
							{pkgs.map(({ slug, name }) => (
								<li key={slug}>
									<Link path={`/packages/${slug}`}>{name}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}
