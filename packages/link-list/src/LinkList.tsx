import { TextLink } from '@ag.ds-next/text-link';
import { mapSpacing } from '@ag.ds-next/core';

type LinkListProps = {
	links: { link: string; text: string }[];
	inline?: boolean;
};

// <ul className="au-link-list"
export const LinkList = ({ links, inline }: LinkListProps) => {
	const styles = linkListStyles({
		inline,
	});
	return (
		<ul css={styles}>
			{links.map(({ link, text }, index) => (
				<li key={index}>
					<TextLink href={link}>{text}</TextLink>
				</li>
			))}
		</ul>
	);
};

const linkListStyles = ({ inline }: { inline?: boolean }) => {
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
