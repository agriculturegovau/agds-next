import {
	forwardRef,
	HTMLAttributes,
	isValidElement,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
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
import { PageAlertCloseButton } from './PageAlertCloseButton';

export type PageAlertTone = 'success' | 'error' | 'warning' | 'info';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type PageAlertProps = PropsWithChildren<{
	id?: string;
	role?: DivProps['role'];
	tabIndex?: number;
	/** The title of the alert. */
	title?: ReactNode;
	/** The tone of the alert. */
	tone: PageAlertTone;
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
}>;

export const PageAlert = forwardRef<HTMLDivElement, PageAlertProps>(
	function PageAlert(
		{ id, role, children, onDismiss, title, tone, tabIndex },
		ref
	) {
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
				css={{ backgroundColor: bg, position: 'relative' }}
			>
				<Flex
					padding={0.5}
					alignItems="center"
					css={{
						borderTopLeftRadius: tokens.borderRadius,
						borderBottomLeftRadius: tokens.borderRadius,
						backgroundColor: fg,
						color: boxPalette.foregroundInverse,
					}}
				>
					{icon}
				</Flex>
				<Flex
					padding={1.5}
					gap={1}
					flexGrow={1}
					alignItems="flex-start"
					css={{
						// When there is a dismiss button and no title
						// We need to add extra padding to avoid overlapping
						marginRight: onDismiss && !title ? '3rem' : undefined,
						[tokens.mediaQuery.min.sm]: {
							marginRight: '0',
						},
					}}
				>
					<Flex
						flexDirection="column"
						flexGrow={1}
						gap={1}
						alignItems="flex-start"
					>
						{title ? (
							isValidElement(title) ? (
								title
							) : (
								<PageAlertTitle hasDismissButton={Boolean(onDismiss)}>
									{title}
								</PageAlertTitle>
							)
						) : null}
						{children}
					</Flex>
					{onDismiss ? <PageAlertCloseButton onClick={onDismiss} /> : null}
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
