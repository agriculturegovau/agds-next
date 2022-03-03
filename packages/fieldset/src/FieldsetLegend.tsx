import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { H1 } from '@ag.ds-next/heading';
import { PropsWithChildren } from 'react';

export type FieldsetLegendProps = PropsWithChildren<{
	asPageHeading?: boolean;
	hint?: string;
}>;

export const FieldsetLegend = ({
	children,
	asPageHeading,
	hint,
}: FieldsetLegendProps) => (
	<Stack as="legend" gap={0.75}>
		{asPageHeading ? (
			<H1>{children}</H1>
		) : (
			<Text
				display="block"
				fontWeight="bold"
				fontSize="lg"
				lineHeight="heading"
			>
				{children}
			</Text>
		)}
		{hint ? (
			<Text
				fontSize={asPageHeading ? 'md' : 'sm'}
				display="block"
				color="muted"
			>
				{hint}
			</Text>
		) : null}
	</Stack>
);
