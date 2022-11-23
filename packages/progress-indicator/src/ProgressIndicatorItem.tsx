import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	ProgressBlockedIcon,
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorItemStatus = keyof typeof statusMap;

export type ProgressIndicatorItemLinkProps = LinkProps & {
	background?: ProgressIndicatorBackground;
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
		background?: ProgressIndicatorBackground;
		status: ProgressIndicatorItemStatus;
	};

export const ProgressIndicatorItemButton = ({
	children,
	...props
}: ProgressIndicatorItemButtonProps) => (
	<ProgressIndicatorItem as={BaseButton} {...props}>
		{children}
	</ProgressIndicatorItem>
);

type ProgressIndicatorItemProps = PropsWithChildren<{
	as: ElementType;
	background?: ProgressIndicatorBackground;
	className?: string;
	status: ProgressIndicatorItemStatus;
}>;

const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	status,
	className,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const { Icon, color, label } = statusMap[status];
	return (
		<Box as="li" borderBottom>
			<Flex
				as={as}
				className={className}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				background={background}
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
						backgroundColor: hoverColorMap[background],
					},
				}}
				{...props}
			>
				<Icon size="md" color={color} />
				<Flex as="span" flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{label}
					</Text>
					{children}
				</Flex>
			</Flex>
		</Box>
	);
};

const statusMap = {
	blocked: {
		Icon: ProgressBlockedIcon,
		color: 'muted',
		label: 'Cannot start yet',
	},
	doing: { Icon: ProgressDoingIcon, label: 'In progress', color: 'action' },
	todo: { Icon: ProgressTodoIcon, label: 'Not started', color: 'action' },
	done: { Icon: SuccessFilledIcon, label: 'Completed', color: 'success' },
} as const;
