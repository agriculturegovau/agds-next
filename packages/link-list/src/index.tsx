type LinkListProps = {
	links: { href: string; label: string }[];
};

// <ul className="au-link-list"
export const LinkList = ({ links }: LinkListProps) => {
	return (
		<ul>
			{links.map(({ href, label }, index) => (
				<li key={index}>
					<a href={href}>{label}</a>
				</li>
			))}
		</ul>
	);
};
