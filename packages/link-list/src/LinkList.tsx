import { TextLink } from '@ag.ds-next/text-link';
import { mapSpacing } from '@ag.ds-next/core';

type LinkProps = { link: string; text: string };
type LinkListProps = {
	links: { link: string; text: string }[];
	inline?: boolean;
	linkComponent?: ({ link, text }: LinkProps) => JSX.Element;
};

const DefaultLink = ({ link, text }: LinkProps) => {
	return <TextLink href={link}>{text}</TextLink>;
};

export const LinkList = ({
	links,
	inline,
	linkComponent: Link = DefaultLink,
}: LinkListProps) => {
	const styles = linkListStyles({ inline });
	return (
		<ul css={styles}>
			{links.map(({ link, text }, index) => (
				<li key={index}>
					<Link link={link} text={text} />
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
