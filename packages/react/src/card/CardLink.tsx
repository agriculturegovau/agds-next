import { useContext } from 'react';
import { focusStyles, linkStyles } from '../box';
import { useLinkComponent, type LinkProps } from '../core';
import { CardContext } from './Card';

export type CardLinkProps = LinkProps;

export const CardLink = (props: CardLinkProps) => {
	const Link = useLinkComponent();
	const context = useContext(CardContext);

	return (
		<Link
			css={[
				linkStyles,
				{
					display: 'flex',
					justifyContent: 'space-between',
					// NOTE: no focus styles here because the parent Card does it.
					...(context?.clickable
						? {
								'&:focus, &:focus-visible': { outline: 'none' },
								'&::after': {
									content: '""',
									position: 'absolute',
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
								},
						  }
						: focusStyles),
				},
			]}
			{...props}
		/>
	);
};
