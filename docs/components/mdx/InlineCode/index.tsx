import { Box } from '@ag.ds-next/box';

type InlineCodeProps = React.AllHTMLAttributes<HTMLSpanElement>;
export function InlineCode({ children }: InlineCodeProps) {
	return (
		<Box
			as="span"
			display="inline-block"
			border
			rounded
			background="shade"
			paddingX={0.25}
			fontSize="xs"
			fontFamily="monospace"
			css={{
				wordBreak: 'break-all',
			}}
		>
			{children}
		</Box>
	);
}
