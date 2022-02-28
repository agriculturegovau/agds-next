import { useLinkComponent, LinkProps } from '@ag.ds-next/core';
import { linkStyles } from '@ag.ds-next/box';

export const CardLink = (props: LinkProps) => {
	const Link = useLinkComponent();
	return (
		<Link
			css={[
				linkStyles,
				{
					display: 'flex',
					justifyContent: 'space-between ',
					// NOTE: no focus styles here because the parent Card does it.
					'&:focus': {
						outline: 'none',
					},
					'&:after': {
						content: '""',
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
					},
				},
			]}
			{...props}
		/>
	);
};
