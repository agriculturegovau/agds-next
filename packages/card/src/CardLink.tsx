import { useLinkComponent, LinkProps } from '@ag.ds-next/core';
import { linkStyles } from '@ag.ds-next/box';

export type CardLinkProps = LinkProps;

export const cardLinkDataAttr = 'data-agds-card-link';

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
					'&:focus': {
						outline: 'none',
					},
				},
			]}
			{...{ [cardLinkDataAttr]: true }}
			{...props}
		/>
	);
};
