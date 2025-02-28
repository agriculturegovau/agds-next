import { type ReactNode, useState } from 'react';
import { Drawer } from '@ag.ds-next/react/drawer';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';
import { MoveRightIcon } from '@ag.ds-next/react/icon';
import { mapSpacing } from '@ag.ds-next/react/core';

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
				<MoveRightIcon
					css={{
						position: 'relative',
						top: 3,
						marginLeft: mapSpacing(0.25),
					}}
					size="sm"
					weight="regular"
				/>
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
