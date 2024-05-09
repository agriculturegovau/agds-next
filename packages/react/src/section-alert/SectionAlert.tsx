import {
	forwardRef,
	HTMLAttributes,
	MouseEventHandler,
	ReactNode,
} from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';
import { getOptionalCloseHandler } from '../getCloseHandler';
import { useFocusOnMount } from '../core/utils/useFocusOnMount';
import { SectionAlertDismissButton } from './SectionAlertDismissButton';
import { sectionAlertIconMap, SectionAlertTone } from './utils';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type SectionAlertProps = {
	/** The title of the alert. */
	title: string;
	/** The content of the alert description. */
	children?: ReactNode;
	/** Whether the alert should be focused as soon as it's rendered. */
	focusOnMount?: boolean;
	/** The ID of the alert. */
	id?: string;
	/** The role of the alert. */
	role?: DivProps['role'];
	/** The tab index of the alert. */
	tabIndex?: number;
	/** The tone of the alert. */
	tone: SectionAlertTone;
	/** @deprecated use `onClose` instead */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: MouseEventHandler<HTMLButtonElement>;
};

export const SectionAlert = forwardRef<HTMLDivElement, SectionAlertProps>(
	function SectionAlert(
		{
			children,
			id,
			focusOnMount,
			onClose,
			onDismiss,
			role,
			tabIndex,
			title,
			tone,
			...props
		},
		forwardedRef
	) {
		const ref = useFocusOnMount<HTMLDivElement>({
			disabled: !focusOnMount,
			forwardedRef,
		});

		const Icon = sectionAlertIconMap[tone];
		const closeHandler = getOptionalCloseHandler(onClose, onDismiss);

		return (
			<Flex
				alignItems="center"
				background={tone}
				borderColor={tone}
				borderLeft
				borderLeftWidth="xl"
				gap={0.5}
				highContrastOutline
				id={id}
				focusRingFor="all"
				justifyContent="space-between"
				padding={1}
				ref={ref}
				role={role}
				rounded
				tabIndex={tabIndex || (focusOnMount ? -1 : undefined)}
				{...props}
			>
				<Flex gap={0.5}>
					{Icon}
					<Flex gap={0.25} flexDirection={'column'}>
						{title && <Text fontWeight="bold">{title}</Text>}
						{children}
					</Flex>
				</Flex>
				{closeHandler ? (
					<SectionAlertDismissButton onClick={closeHandler} />
				) : null}
			</Flex>
		);
	}
);
