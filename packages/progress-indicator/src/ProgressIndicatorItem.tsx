import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import { Icon } from '@ag.ds-next/icon';
import { boxPalette } from '@ag.ds-next/core';

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

export type ProgressIndicatorItemProps = {
	children: ReactNode;
	href: string;
	status: ProgressIndicatorItemStatus;
};

export const ProgressIndicatorItem = ({
	children,
	href,
	status,
}: ProgressIndicatorItemProps) => (
	<li
		css={{
			borderLeftWidth: 3,
			borderLeftStyle: 'solid',
			borderLeftColor:
				status === 'doing' ? boxPalette.foregroundAction : 'transparent',
		}}
	>
		{console.log(children, status)}
		<Flex
			as={TextLink}
			href={href}
			alignItems="center"
			gap={1}
			paddingX={0.5}
			paddingY={0.75}
			borderBottom
			css={{
				textDecoration: 'none',
				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
				},
			}}
		>
			<Icon icon={statusIconMap[status]} size={1.5} color="action" />
			<Flex flexDirection="column" gap={0}>
				<Text color="muted" lineHeight="nospace">
					{statusLabelMap[status]}
				</Text>
				<Text
					css={{ display: 'block' }}
					fontWeight={status === 'doing' ? 'bold' : 'normal'}
				>
					{children}
				</Text>
			</Flex>
		</Flex>
	</li>
);

const statusIconMap = {
	doing: 'progressDoing',
	todo: 'progressTodo',
	done: 'progressDone',
} as const;

const statusLabelMap = {
	doing: 'Doing',
	todo: 'Todo',
	done: 'Done',
} as const;
