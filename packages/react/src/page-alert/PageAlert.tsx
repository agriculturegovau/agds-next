import {
	forwardRef,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	isValidElement,
} from 'react';
import { Flex } from '../flex';
import { boxPalette, tokens } from '../core';
import {
	AlertFilledIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '../icon';
import { PageAlertTitle } from './PageAlertTitle';

export type PageAlertTone = 'success' | 'error' | 'warning' | 'info';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type PageAlertProps = PropsWithChildren<{
	id?: string;
	role?: DivProps['role'];
	tabIndex?: number;
	title?: ReactNode;
	tone: PageAlertTone;
}>;

export const PageAlert = forwardRef<HTMLDivElement, PageAlertProps>(
	function PageAlert({ id, role, children, title, tone, tabIndex }, ref) {
		const { fg, bg, icon } = pageAlertToneMap[tone];
		return (
			<Flex
				ref={ref}
				role={role}
				id={id}
				tabIndex={tabIndex}
				rounded
				focus
				highContrastOutline
				css={{ backgroundColor: bg }}
			>
				<Flex
					padding={0.5}
					alignItems="center"
					css={{
						borderTopLeftRadius: tokens.borderRadius,
						borderBottomLeftRadius: tokens.borderRadius,
						backgroundColor: fg,
						color: boxPalette.backgroundBody,
					}}
				>
					{icon}
				</Flex>
				<Flex padding={1.5} gap={1} flexDirection="column" flexGrow={1}>
					{title ? (
						isValidElement(title) ? (
							title
						) : (
							<PageAlertTitle>{title}</PageAlertTitle>
						)
					) : null}
					{children}
				</Flex>
			</Flex>
		);
	}
);

const pageAlertToneMap = {
	success: {
		fg: boxPalette.systemSuccess,
		bg: boxPalette.systemSuccessMuted,
		icon: <SuccessFilledIcon aria-hidden="false" aria-label="Success" />,
	},
	error: {
		fg: boxPalette.systemError,
		bg: boxPalette.systemErrorMuted,
		icon: <AlertFilledIcon aria-hidden="false" aria-label="Error" />,
	},
	info: {
		fg: boxPalette.systemInfo,
		bg: boxPalette.systemInfoMuted,
		icon: <InfoFilledIcon aria-hidden="false" aria-label="Information" />,
	},
	warning: {
		fg: boxPalette.systemWarning,
		bg: boxPalette.systemWarningMuted,
		icon: <WarningFilledIcon aria-hidden="false" aria-label="Warning" />,
	},
};
