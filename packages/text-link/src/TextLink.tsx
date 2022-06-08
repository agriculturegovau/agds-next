import { PropsWithChildren } from 'react';
import { forwardRefWithAs, useLinkComponent } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export type TextLinkProps = PropsWithChildren<Record<never, never>>;

export const TextLink = forwardRefWithAs<'a', TextLinkProps>(function TextLink(
	{ as, ...props },
	ref
) {
	const LinkComponent = useLinkComponent();
	return (
		<Text
			as={as || LinkComponent}
			ref={ref}
			link
			focus
			css={{
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				textAlign: 'left',
			}}
			{...props}
		/>
	);
});
