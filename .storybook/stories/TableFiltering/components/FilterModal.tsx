import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Select } from '@ag.ds-next/react/select';
import { GetDataFilters, GetDataSort } from '../lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { DashboardFilterStatus } from './DashboardFilterStatus';
import { assignees } from '../lib/generateBusinessData';
import {
	Fragment,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import { animated, useSpring } from '@react-spring/web';
import {
	mapSpacing,
	tokens,
	usePrefersReducedMotion,
} from '@ag.ds-next/react/core';
import { ModalTitle } from '@ag.ds-next/react/src/modal/ModalTitle';
import { CloseIcon } from '@ag.ds-next/react/icon';
import { ModalCover } from '@ag.ds-next/react/src/modal/ModalCover';
import { Checkbox, ControlGroup } from '@ag.ds-next/react/control-input';

export type ModalDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the modal is closed. */
	onDismiss: () => void;
	/** The title of the modal dialog. It can span lines but should not be too long. */
	title: string;
}>;

const AnimatedStack = animated(Stack);

export const ModalDialog = ({
	actions,
	children,
	title,
	onDismiss,
}: ModalDialogProps) => {
	// const { titleId } = useModalId()
	const titleId = 'modal-title';

	const prefersReducedMotion = usePrefersReducedMotion();
	const animationStyles = useSpring({
		from: { y: 20, opacity: 0 },
		to: { y: 0, opacity: 1 },
		immediate: prefersReducedMotion,
	});

	return (
		<FocusLock returnFocus>
			<AnimatedStack
				role="dialog"
				aria-modal="true"
				background="body"
				aria-labelledby={titleId}
				rounded
				focus
				padding={1.5}
				gap={1}
				maxWidth={tokens.maxWidth.modalDialog}
				css={{
					position: 'relative',
					margin: '0 auto',
					minHeight: '100vh',
					[tokens.mediaQuery.min.sm]: {
						margin: `${mapSpacing(6)} auto ${mapSpacing(1)}`,
						minHeight: 'auto',
					},
				}}
				style={animationStyles}
			>
				<ModalTitle id={titleId}>{title}</ModalTitle>
				<Box
				// scrolls
				>
					{children}
				</Box>

				<Box paddingTop={1} css={{ marginTop: 'auto' }}>
					<ButtonGroup>
						<Button onClick={onDismiss}>Apply filters</Button>
						<Button variant="tertiary" onClick={onDismiss}>
							Cancel
						</Button>
					</ButtonGroup>
				</Box>

				<Button
					variant="tertiary"
					aria-label="Close modal"
					onClick={onDismiss}
					iconAfter={CloseIcon}
					css={{
						position: 'absolute',
						top: mapSpacing(0.5),
						right: mapSpacing(0.5),
					}}
				>
					Close
				</Button>
			</AnimatedStack>
		</FocusLock>
	);
};

export const FilterModal = ({
	isOpen,
	onDismiss,
	filters,
	setFilters,
	resetPagination,
}: {
	isOpen: boolean;
	onDismiss: () => void;
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetPagination: () => void;
}) => {
	const title = 'Filter by';
	const coverRef = useRef<HTMLDivElement>(null);

	// Close the modal when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen && e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				onDismiss();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onDismiss]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isOpen || !coverRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === coverRef.current) return;
			const attr = node.getAttribute('aria-hidden');
			const alreadyHidden = attr !== null && attr !== 'false';
			if (alreadyHidden) return;
			rootNodes.push(node);
			originalAttrs.push(attr);
			node.setAttribute('aria-hidden', 'true');
		});

		return () => {
			rootNodes.forEach((node, index) => {
				const originalValue = originalAttrs[index];
				if (originalValue === null) {
					node.removeAttribute('aria-hidden');
				} else {
					node.setAttribute('aria-hidden', originalValue);
				}
			});
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<Fragment>
			<LockScroll />
			<ModalCover ref={coverRef}>
				<ModalDialog onDismiss={onDismiss} title={title}>
					<Stack gap={1}>
						<Select
							label="State"
							placeholder="All"
							hideOptionalLabel
							options={[
								{ value: 'act', label: 'ACT' },
								{ value: 'nsw', label: 'NSW' },
								{ value: 'nt', label: 'NT' },
								{ value: 'qld', label: 'QLD' },
								{ value: 'sa', label: 'SA' },
								{ value: 'tas', label: 'TAS' },
								{ value: 'vic', label: 'VIC' },
								{ value: 'wa', label: 'WA' },
							]}
							value={filters.state || ''}
							onChange={(e) => {
								const value = e.target.value;
								resetPagination();
								setFilters({
									...filters,
									state: value === '' ? undefined : value,
								});
							}}
						/>
						<DashboardFilterStatus
							filters={filters}
							setFilters={setFilters}
							resetPagination={resetPagination}
						/>
						<Select
							label="Assignee"
							placeholder="All"
							hideOptionalLabel
							options={assignees.map((option) => ({
								label: option,
								value: option,
							}))}
							value={filters.assignee || ''}
							onChange={(e) => {
								const value = e.target.value;
								resetPagination();
								setFilters({
									...filters,
									assignee: value === '' ? undefined : value,
								});
							}}
						/>
						<DateRangePicker
							fromLabel="Registered from"
							toLabel="Registered to"
							onChange={(value) => {
								resetPagination();
								setFilters({
									...filters,
									requestDate: value,
								});
							}}
							value={filters.requestDate}
						/>
						<ControlGroup label="Contact method" block>
							<Checkbox checked>SMS</Checkbox>
							<Checkbox checked={false}>Phone call</Checkbox>
							<Checkbox checked={false}>Email</Checkbox>
							<Checkbox checked={false}>Mail</Checkbox>
						</ControlGroup>
					</Stack>
				</ModalDialog>
			</ModalCover>
		</Fragment>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;
