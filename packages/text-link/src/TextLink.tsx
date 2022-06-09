import { useLinkComponent, forwardRefWithAs } from '@ag.ds-next/core';
import { Text } from '../../../docs/playroom/components';

export const TextLink = forwardRefWithAs<'a', {}>(function TextLink(
	{ as, ...props },
	ref
) {
	const Link = useLinkComponent();
	return (
		<Text
			as={as || Link}
			ref={ref}
			color="action"
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

function MyComponent() {
	return <TextLink onClick={console.log}></TextLink>;
}
