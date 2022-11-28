import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
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

const ProgressIndicatorItemTimeline = () => (
	<div
		css={{
			width: 2,
			backgroundColor: boxPalette.border,
			flex: 1,
		}}
	/>
);

const ProgressIndicatorItemIcon = ({
	status,
}: {
	status: ProgressIndicatorItemStatus;
}) => {
	const { icon: Icon, iconColor } = statusMap[status];
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			width="46px"
		>
			<ProgressIndicatorItemTimeline />
			<Icon size="md" color={iconColor} />
			<ProgressIndicatorItemTimeline />
		</Flex>
	);
};

const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	status,
	className,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const { label } = statusMap[status];
	return (
		<Flex
			as="li"
			background={background}
			css={{
				'&:first-of-type ': {
					'> div:first-of-type > div:first-of-type': {
						opacity: 0,
					},
				},
				'&:last-of-type': {
					'> div:first-of-type > div:last-of-type': {
						opacity: 0,
					},
					'> button, &:last-of-type > a': {
						borderBottomWidth: 0,
					},
				},
			}}
		>
			<ProgressIndicatorItemIcon status={status} />
			<Flex
				as={as}
				className={className}
				alignItems="center"
				gap={0.75}
				paddingY={0.75}
				color="text"
				fontFamily="body"
				fontWeight={active ? 'bold' : 'normal'}
				borderBottom
				width="100%"
				focus
				css={{
					'.title': {
						...packs.underline,
					},
					'&:hover': {
						backgroundColor: hoverColorMap[background],
						'.title': {
							textDecoration: 'none',
						},
					},
				}}
				{...props}
			>
				<Flex as="span" flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{label}
					</Text>
					<Text
						className="title"
						color="action"
						fontWeight={active ? 'bold' : 'normal'}
					>
						{children}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

const statusMap = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'action',
	},
	todo: {
		label: 'Not started',
		icon: ProgressTodoIcon,
		iconColor: 'border',
	},
	done: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
} as const;
