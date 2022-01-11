import type { ReactNode } from 'react';
import {
	fontGrid,
	mapSpacing,
	themeVars,
	outline,
	useLinkComponent,
} from '@ag.ds-next/core';

type LinkListProps = {
	links: { href: string; label: ReactNode }[];
	inline?: boolean;
};

export const LinkList = ({ links, inline }: LinkListProps) => {
	const Link = useLinkComponent();
	const styles = linkListStyles({ inline });
	return (
		<ul css={styles}>
			{links.map(({ href, label, ...props }, index) => (
				<li key={index}>
					<Link href={href} {...props}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};

const linkListStyles = ({ inline }: { inline?: boolean }) => {
	const display = inline ? 'inline-block' : 'block';
	return {
		display: display,
		listStyleType: 'none',
		margin: 0,
		padding: `${mapSpacing(0.25)} 0`,

		'> li': {
			display: display,
			marginTop: mapSpacing(0),
			marginBottom: inline ? 0 : mapSpacing(0.5),
			marginLeft: '0px',
			marginRight: mapSpacing(1),
			padding: 0,
			...fontGrid('sm', 'default'),
		},
		' a': {
			color: themeVars.foreground.action,
			textDecoration: 'underline',

			'&:hover': {
				color: themeVars.foreground.action,
				textDecoration: 'none',
			},

			'&:focus': outline,
		},
	};
};
