import { ChangeEventHandler } from 'react';
import { boxPalette } from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Button } from '@ag.ds-next/react/button';
import { ChevronRightIcon, CloseIcon } from '@ag.ds-next/react/icon';
import { Field } from './utils';

export type ConsignmentFieldsListItemProps = {
	field: Field;
	isFirstItem: boolean;
	isSelected: boolean;
	addField?: (field: Field) => void;
	removeField?: (field: Field) => void;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

export function FieldsListItem({
	field,
	isSelected,
	isFirstItem,
	addField,
	removeField,
	onChange,
}: ConsignmentFieldsListItemProps) {
	return (
		<Flex
			as="li"
			padding={0.75}
			borderTop={!isFirstItem}
			borderColor="muted"
			justifyContent="space-between"
			css={{
				backgroundColor: isSelected
					? boxPalette.selectedMuted
					: boxPalette.backgroundBody,
			}}
		>
			<Checkbox size="sm" checked={isSelected} onChange={onChange}>
				Example field {field.id}
			</Checkbox>
			{addField && (
				<Button
					iconAfter={ChevronRightIcon}
					variant="text"
					onClick={() => addField(field)}
				>
					Add
				</Button>
			)}
			{removeField && (
				<Button
					iconAfter={CloseIcon}
					variant="text"
					onClick={() => removeField(field)}
				>
					Remove
				</Button>
			)}
		</Flex>
	);
}
