import {
	forwardRef,
	HTMLAttributes,
	MouseEventHandler,
	ReactNode,
} from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';
import { SectionAlertDismissButton } from './SectionAlertDismissButton';
import { sectionAlertIconMap, SectionAlertTone } from './utils';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type SectionAlertProps = {
	/** The title of the alert. */
	title: string;
	/** The content of the alert description. */
	children?: ReactNode;
	/** The ID of the alert. */
	id?: string;
	/** The role of the alert. */
	role?: DivProps['role'];
	/** The tab index of the alert. */
	tabIndex?: number;
	/** The tone of the alert. */
	tone: SectionAlertTone;
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
};

export const SectionAlert = forwardRef<HTMLDivElement, SectionAlertProps>(
	function SectionAlert(
		{ id, role, tabIndex, tone, title, children, onDismiss, ...props },
		ref
	) {
		const Icon = sectionAlertIconMap[tone];
		return (
			<Flex
				ref={ref}
				role={role}
				id={id}
				tabIndex={tabIndex}
				rounded
				focus
				background={tone}
				borderColor={tone}
				borderLeft
				borderLeftWidth="xl"
				highContrastOutline
				gap={0.5}
				padding={1}
				alignItems="center"
				justifyContent="space-between"
				{...props}
			>
				<Flex gap={0.5}>
					{Icon}
					<Flex gap={0.25} flexDirection={'column'}>
						{title && <Text fontWeight="bold">{title}</Text>}
						{children}
					</Flex>
				</Flex>
				{onDismiss ? <SectionAlertDismissButton onClick={onDismiss} /> : null}
			</Flex>
		);
	}
);
