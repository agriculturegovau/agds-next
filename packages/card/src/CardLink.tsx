import { ComponentProps } from 'react';
import { useLinkComponent, LinkComponent } from '@ag.ds-next/core';
import { linkStyles } from '@ag.ds-next/box';

export const CardLink = (props: ComponentProps<LinkComponent>) => {
	const Link = useLinkComponent();
	return (
		<Link
			css={[
				linkStyles,
				// NOTE: no focus styles here because the parent Card does it.
				{
					'&:after': {
						content: '""',
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
					},
				},
			]}
			{...props}
		/>
	);
};
