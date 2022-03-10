import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps } from '@ag.ds-next/core';

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

export type ProgressIndicatorItemLinkProps = LinkProps & {
	status: ProgressIndicatorItemStatus;
};

export const ProgressIndicatorItemLink = ({
	children,
	...props
}: ProgressIndicatorItemLinkProps) => (
	<ProgressIndicatorItem as={TextLink} {...props}>
		{children}
	</ProgressIndicatorItem>
);

export type ProgressIndicatorItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		status: ProgressIndicatorItemStatus;
	};

export const ProgressIndicatorItemButton = ({
	children,
	...props
}: ProgressIndicatorItemButtonProps) => (
	<ProgressIndicatorItem
		as="button"
		css={{
			appearance: 'none',
			background: 'transparent',
			cursor: 'pointer',
			textAlign: 'left',
			fontSize: 'inherit',
		}}
		{...props}
	>
		{children}
	</ProgressIndicatorItem>
);

type ProgressIndicatorItemProps = PropsWithChildren<{
	as: ElementType;
	status: ProgressIndicatorItemStatus;
}>;

const ProgressIndicatorItem = ({
	as,
	children,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<li>
			<Flex
				as={as}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				color="text"
				fontFamily="body"
				fontWeight={active ? 'bold' : 'normal'}
				borderBottom
				borderLeft
				borderLeftWidth="xl"
				width="100%"
				focus
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					'&:hover': {
						textDecoration: 'underline',
						textDecorationSkipInk: 'auto',
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon size={1.5} color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					{children}
				</Flex>
			</Flex>
		</li>
	);
};

const statusIconMap = {
	doing: ProgressDoingIcon,
	todo: ProgressTodoIcon,
	done: ProgressDoneIcon,
} as const;

const statusLabelMap = {
	doing: 'Doing',
	todo: 'Todo',
	done: 'Done',
} as const;
