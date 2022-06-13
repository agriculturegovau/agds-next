import { Box } from '@ag.ds-next/box';
import { useLinkComponent, forwardRefWithAs } from '@ag.ds-next/core';
import { TextProps } from '@ag.ds-next/text';

export const TextLink = forwardRefWithAs<'a', TextProps>(function TextLink(
	{ as, color = 'action', ...props },
	ref
) {
	const Link = useLinkComponent();
	return <Box as={as ?? Link} ref={ref} color={color} link focus {...props} />;
});
