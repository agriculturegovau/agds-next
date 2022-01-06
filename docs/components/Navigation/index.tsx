import { useRouter } from 'next/router';
import NextLink from 'next/link';

import type { NavItems } from '../../lib/mdxUtils';

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
	navItems: NavItems;
	style?: React.CSSProperties;
};

export function Navigation({ navItems, style }: NavigationProps) {
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
						<Link path="/storybook/index.html">Storybook</Link>
					</li>
					<li>
						<Link path="/playroom/index.html">Playroom</Link>
					</li>

					<li>
						<h2
							style={{
								fontSize: '1rem',
								margin: '1rem 0 0.5rem 0',
							}}
						>
							<Link path="/packages">Packages</Link>
						</h2>
						<ul
							style={{
								listStyle: 'none',
								margin: 0,
								padding: 0,
								paddingLeft: '0.5rem',
							}}
						>
							{navItems.pkgList.map(({ slug, title }) => (
								<li key={slug}>
									<Link path={`/packages/${slug}`}>{title}</Link>
								</li>
							))}
						</ul>
					</li>
					<li>
						<h2
							style={{
								fontSize: '1rem',
								margin: '1rem 0 0.5rem 0',
							}}
						>
							<Link path="/releases">Releases</Link>
						</h2>
						<ul
							style={{
								listStyle: 'none',
								margin: 0,
								padding: 0,
								paddingLeft: '0.5rem',
							}}
						>
							{navItems.releaseList.map(({ slug, title }) => (
								<li key={slug}>
									<Link path={`/releases/${slug}`}>{title}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}
