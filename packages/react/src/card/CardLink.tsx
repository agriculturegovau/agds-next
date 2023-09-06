import { useLinkComponent, LinkProps } from '../core';
import { linkStyles } from '../box';

export type CardLinkProps = LinkProps;

export const CardLink = (props: CardLinkProps) => {
	const Link = useLinkComponent();
	return (
		<Link
			css={[
				linkStyles,
				{
					display: 'flex',
					justifyContent: 'space-between',
					// NOTE: no focus styles here because the parent Card does it.
					'&:focus, &:focus-visible': { outline: 'none' },
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
