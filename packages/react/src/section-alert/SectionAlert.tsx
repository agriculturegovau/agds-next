import {
	forwardRef,
	HTMLAttributes,
	MouseEventHandler,
	ReactNode,
} from 'react';
import { useId } from '../core';
import { useFocus } from '../core/utils/useFocus';
import { Flex } from '../flex';
import { getOptionalCloseHandler } from '../getCloseHandler';
import { Text } from '../text';
import { SectionAlertDismissButton } from './SectionAlertDismissButton';
import { sectionAlertIconMap, type SectionAlertTone } from './utils';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type SectionAlertProps = {
	/** The title of the alert. */
	title: string;
	/** The content of the alert description. */
	children?: ReactNode;
	/** Whether the alert should be focused as soon as it's rendered. */
	focusOnMount?: boolean;
	/** Focus the alert when a value in this array updates. */
	focusOnUpdate?: ReadonlyArray<unknown> | string | number;
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
			focusOnMount,
			focusOnUpdate,
			id,
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
		const ref = useFocus<HTMLDivElement>({
			focusOnMount,
			focusOnUpdate,
			forwardedRef,
		});
		const { childrenId, iconId, titleId } = useSectionAlertIds(id);

		const Icon = sectionAlertIconMap[tone];
		const closeHandler = getOptionalCloseHandler(onClose, onDismiss);

		return (
			<Flex
				{...props}
				alignItems="center"
				aria-labelledby={`${iconId} ${titleId} ${children ? childrenId : ''}`}
				background={tone}
				borderColor={tone}
				borderLeft
				borderLeftWidth="xl"
				focusRingFor="all"
				gap={0.5}
				highContrastOutline
				id={id}
				justifyContent="space-between"
				padding={1}
				ref={ref}
				role={role || 'region'}
				rounded
				tabIndex={tabIndex ?? (focusOnMount || focusOnUpdate ? -1 : undefined)}
			>
				<Flex gap={0.5}>
					<Icon id={iconId} />
					<Flex flexDirection="column" gap={0.25}>
						{title && (
							<Text fontWeight="bold" id={titleId}>
								{title}
							</Text>
						)}
						{children && <div id={childrenId}>{children}</div>}
					</Flex>
				</Flex>
				{closeHandler ? (
					<SectionAlertDismissButton onClick={closeHandler} />
				) : null}
			</Flex>
		);
	}
);

function useSectionAlertIds(idProp?: string) {
	const autoId = useId(idProp);
	const childrenId = `section-alert-children-${autoId}`;
	const iconId = `section-alert-icon-${autoId}`;
	const titleId = `section-alert-title-${autoId}`;
	return { childrenId, iconId, titleId };
}
