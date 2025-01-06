import { type ReactNode, useState } from 'react';
import { Drawer } from '@ag.ds-next/react/drawer';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';

type HelpReferenceProps = {
	drawerContent: ReactNode;
	linkContent: ReactNode;
	linkHref: string;
};

export function HelpReference({
	drawerContent,
	linkContent,
	linkHref,
}: HelpReferenceProps) {
	const [drawIsOpen, setDrawIsOpen] = useState(false);
	return (
		<>
			<TextLink
				href={linkHref}
				onClick={(event) => {
					if (event.metaKey) return;
					event.preventDefault();
					setDrawIsOpen(true);
				}}
			>
				{linkContent}
			</TextLink>
			<Drawer
				actions={
					<TextLinkExternal href={linkHref}>
						Open in new window
					</TextLinkExternal>
				}
				isOpen={drawIsOpen}
				onClose={() => {
					setDrawIsOpen(false);
				}}
				title="Help"
				width="lg"
			>
				{drawerContent}
			</Drawer>
		</>
	);
}
