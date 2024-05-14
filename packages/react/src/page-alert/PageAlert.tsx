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
import { getOptionalCloseHandler } from '../getCloseHandler';
import { useFocus } from '../core/utils/useFocus';
import { PageAlertTitle } from './PageAlertTitle';
import { PageAlertCloseButton } from './PageAlertCloseButton';

export type PageAlertTone = keyof typeof pageAlertToneMap;

type DivProps = HTMLAttributes<HTMLDivElement>;

export type PageAlertProps = PropsWithChildren<{
	/** The tone of the alert. */
	tone: PageAlertTone;
	/** Whether the alert should be focused as soon as it's rendered. */
	focusOnMount?: boolean;
	/** Focus the alert when a value in this array updates. */
	focusOnUpdate?: ReadonlyArray<unknown>;
	/** The id of the alert. */
	id?: string;
	/** The WAI-ARIA role. */
	role?: DivProps['role'];
	/** Tab index order. */
	tabIndex?: number;
	/** The title of the alert. */
	title?: ReactNode;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: MouseEventHandler<HTMLButtonElement>;
	/** @deprecated use `onClose` instead */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
}>;

export const PageAlert = forwardRef<HTMLDivElement, PageAlertProps>(
	function PageAlert(
		{
			id,
			focusOnMount,
			focusOnUpdate,
			role,
			children,
			onClose,
			onDismiss,
			title,
			tone,
			tabIndex,
		},
		forwardedRef
	) {
		const ref = useFocus<HTMLDivElement>({
			disabled: !focusOnMount && !focusOnUpdate,
			forwardedRef,
			focusOnUpdate,
		});

		const closeHandler = getOptionalCloseHandler(onClose, onDismiss);
		const { fg, bg, icon } = pageAlertToneMap[tone];

		return (
			<Flex
				css={{
					backgroundColor: bg,
					position: 'relative',
				}}
				focusRingFor="all"
				highContrastOutline
				id={id}
				ref={ref}
				role={role}
				rounded
				tabIndex={tabIndex || (focusOnMount || focusOnUpdate ? -1 : undefined)}
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
				<Flex
					padding={1.5}
					gap={1}
					flexGrow={1}
					alignItems="flex-start"
					css={{
						// When there is a dismiss button and no title
						// We need to add extra padding to avoid overlapping
						marginRight: closeHandler && !title ? '3rem' : undefined,
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
								<PageAlertTitle hasCloseButton={Boolean(closeHandler)}>
									{title}
								</PageAlertTitle>
							)
						) : null}
						{children}
					</Flex>
					{closeHandler ? (
						<PageAlertCloseButton onClick={closeHandler} />
					) : null}
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
