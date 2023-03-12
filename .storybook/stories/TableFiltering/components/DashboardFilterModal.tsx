import { Stack } from '@ag.ds-next/react/box';
import { GetDataFilters } from '../lib/getData';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { FilterStatusSelect } from './FilterStatusSelect';
import { Fragment, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalCover } from '@ag.ds-next/react/src/modal/ModalCover';
import { Checkbox, ControlGroup } from '@ag.ds-next/react/control-input';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';
import { FilterModal, LockScroll } from './FilterModal';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormDivider } from '../../../../example-site/components/FormDivider';
import { FormStack } from '@ag.ds-next/react/form-stack';

export const DashboardFilterModal = ({
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
	const [selectedFilters, setSelectedFilters] =
		useState<GetDataFilters>(filters);

	const handleApply = () => {
		setFilters(selectedFilters);
		resetPagination();
		onDismiss();
	};

	useEffect(() => {
		setSelectedFilters(filters);
	}, [isOpen, filters]);

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
				<FilterModal onDismiss={onDismiss} onApply={handleApply} title={title}>
					<Stack gap={2}>
						<Fieldset legend="Fieldset">
							<FormStack>
								<FilterStatusSelect
									filters={selectedFilters}
									setFilters={setSelectedFilters}
								/>
								<FilterStateSelect
									filters={selectedFilters}
									setFilters={setSelectedFilters}
								/>
							</FormStack>
						</Fieldset>
						<FormDivider />
						<Fieldset legend="Fieldset">
							<FormStack>
								<FilterAssigneeSelect
									filters={selectedFilters}
									setFilters={setSelectedFilters}
								/>
								<DateRangePicker
									fromLabel="Registered from"
									toLabel="Registered to"
									onChange={(value) =>
										setFilters({
											...filters,
											requestDate: value,
										})
									}
									value={filters.requestDate}
								/>
								<ControlGroup label="Contact method" block>
									<Checkbox checked>SMS</Checkbox>
									<Checkbox checked={false}>Phone call</Checkbox>
									<Checkbox checked={false}>Email</Checkbox>
									<Checkbox checked={false}>Mail</Checkbox>
								</ControlGroup>
							</FormStack>
						</Fieldset>
					</Stack>
				</FilterModal>
			</ModalCover>
		</Fragment>,
		document.body
	);
};
