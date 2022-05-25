import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

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
	className?: string;
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
		<Box as="li" borderBottom>
			<Flex
				as={as}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				color="text"
				fontFamily="body"
				fontWeight={active ? 'bold' : 'normal'}
				borderLeft
				borderLeftWidth="xl"
				width="100%"
				focus
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					'&:hover': {
						...packs.underline,
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon size="md" color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					{children}
				</Flex>
			</Flex>
		</Box>
	);
};

const statusIconMap = {
	doing: ProgressDoingIcon,
	todo: ProgressTodoIcon,
	done: ProgressDoneIcon,
} as const;

const statusLabelMap = {
	doing: 'Doing',
	todo: 'To do',
	done: 'Done',
} as const;
