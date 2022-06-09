import { useLinkComponent, forwardRefWithAs } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export const TextLink = forwardRefWithAs<'a', {}>(function TextLink(
	{ as, ...props },
	ref
) {
	const Link = useLinkComponent();
	return (
		<Text as={as ?? Link} ref={ref} color="action" link focus {...props} />
	);
});
