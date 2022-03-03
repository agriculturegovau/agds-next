import {
	forwardRefWithAs,
	useLinkComponent,
	LinkProps,
} from '@ag.ds-next/core';
import { Box, BoxProps, focusStyles, linkStyles } from '@ag.ds-next/box';

export type TextProps = BoxProps;

export const Text = forwardRefWithAs<'span', BoxProps>(function Text(
	{
		as = 'span',
		color = 'text',
		fontFamily = 'body',
		fontSize = 'sm',
		fontWeight = 'normal',
		lineHeight = 'default',
		...props
	},
	ref
) {
	return (
		<Box
			ref={ref}
			as={as}
			css={{
				marginTop: 0,
				marginBottom: 0,
			}}
			color={color}
			fontFamily={fontFamily}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			{...props}
		/>
	);
});

export type TextLinkProps = LinkProps;

export const TextLink = (props: TextLinkProps) => {
	const Link = useLinkComponent();
	return <Link css={[linkStyles, focusStyles]} {...props} />;
};
