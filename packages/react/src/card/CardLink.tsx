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
					...(context?.clickable
						? {
								'&:focus, &:focus-visible': { outline: 'none' },
								'&::after': {
									bottom: 0,
									content: '""',
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
						  }
						: focusStyles),
				},
			]}
			{...props}
		/>
	);
};
