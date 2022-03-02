import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import { Icon } from '@ag.ds-next/icon';
import { boxPalette, forwardRefWithAs, LinkProps } from '@ag.ds-next/core';

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

export type ProgressIndicatorItemLinkProps = LinkProps & {
	status: ProgressIndicatorItemStatus;
};

export const ProgressIndicatorItemLink = ({
	children,
	...props
}: ProgressIndicatorItemLinkProps) => {
	return (
		<ProgressIndicatorItem as={TextLink} {...props}>
			{children}
		</ProgressIndicatorItem>
	);
};

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
	status: ProgressIndicatorItemStatus;
}>;

const ProgressIndicatorItem = forwardRefWithAs<
	'div',
	ProgressIndicatorItemProps
>(function ProgressIndicatorItem({ children, as, status, ...props }) {
	const active = status === 'doing';
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
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon icon={statusIconMap[status]} size={1.5} color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					{children}
				</Flex>
			</Flex>
		</li>
	);
});

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
