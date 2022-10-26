import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Box, Flex } from '../../box/src';
import { Text } from '../../text/src';
import { TextLink } from '../../text-link/src';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '../../icon/src';
import { boxPalette, LinkProps, packs } from '../../core/src';
import { BaseButton } from '../../button/src';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

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
	const Icon = statusIconMap[status];
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
				<Icon size="md" color="action" />
				<Flex as="span" flexDirection="column" gap={0}>
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
