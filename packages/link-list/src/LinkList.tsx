import { TextLink } from '@ag.ds-next/text-link';
import { mapSpacing } from '@ag.ds-next/core';

type LinkListProps = {
	links: { href: string; label: string }[];
	inline: boolean;
};

// <ul className="au-link-list"
export const LinkList = ({ links, inline }: LinkListProps) => {
	const styles = linkListStyles({
		inline,
	});
	return (
		<ul css={styles}>
			{links.map(({ href, label }, index) => (
				<li key={index}>
					<TextLink href={href}>{label}</TextLink>
				</li>
			))}
		</ul>
	);
};

const linkListStyles = ({ inline }: { inline: boolean }) => {
	const display = inline ? 'inline-block' : 'block';
	return {
		// @include AU-fontgrid( sm ),
		display: display,
		listStyleType: 'none',
		margin: 0,
		padding: mapSpacing(0.25),

		'.au-body &': {
			margin: 0,
			padding: mapSpacing(0.25),
		},

		'> li': {
			display: display,
			margin: mapSpacing(0.25),
		},
	};
};
