import { useState } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { PlusIcon } from '@ag.ds-next/react/icon';
import {
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '@ag.ds-next/react/table';
import { Field, plural } from './utils';
import { FieldsListItem } from './FieldsListItem';

export type AddedFieldsProps = {
	fields: Field[];
	removeFields: (fields: Field[]) => void;
};

export function AddedFields(props: AddedFieldsProps) {
	const [selectedFields, setSelectedFields] = useState<Field[]>([]);

	const anyRowsChecked = selectedFields.length > 0;
	const allRowsChecked = selectedFields.length === props.fields.length;

	function toggleAllRows() {
		if (anyRowsChecked) {
			setSelectedFields([]);
		} else {
			setSelectedFields(props.fields);
		}
	}

	function removeField(field: Field) {
		props.removeFields([field]);
		// Remove the field from the selection
		setSelectedFields((selectedFields) =>
			selectedFields.filter((f) => f.id !== field.id)
		);
	}

	function removeSelectedFields() {
		props.removeFields(selectedFields);
		// Remove all fields from the selection
		setSelectedFields([]);
	}

	function clearSelectedFields() {
		setSelectedFields([]);
	}

	return (
		<Stack gap={1}>
			<Text as="h3" fontWeight="bold" lineHeight="heading">
				Added fields
			</Text>
			{props.fields.length > 0 ? (
				<Stack as="ul" height="100%" background="shade" border>
					<Flex
						as="li"
						padding={0.75}
						borderBottom
						borderBottomWidth="lg"
						borderColor="muted"
					>
						<Checkbox
							size="sm"
							checked={allRowsChecked}
							indeterminate={anyRowsChecked && !allRowsChecked}
							onChange={toggleAllRows}
						>
							Select all fields
						</Checkbox>
					</Flex>
					{props.fields.map((field, idx) => {
						const isSelected = selectedFields.some(({ id }) => id === field.id);

						function onChange() {
							setSelectedFields(
								isSelected
									? (x) => x.filter((f) => f.id !== field.id)
									: (x) => [...x, field]
							);
						}

						return (
							<FieldsListItem
								key={field.id}
								field={field}
								isFirstItem={idx === 0}
								isSelected={isSelected}
								onChange={onChange}
								removeField={removeField}
							/>
						);
					})}
					{selectedFields.length > 0 && (
						<TableBatchActionsBar>
							<TableBatchActionsTitle>
								{selectedFields.length}{' '}
								{plural(selectedFields.length, 'field', 'fields')} selected
							</TableBatchActionsTitle>
							<ButtonGroup>
								<Button
									variant="secondary"
									size="sm"
									onClick={removeSelectedFields}
								>
									Remove selected{' '}
									{plural(selectedFields.length, 'field', 'fields')}
								</Button>
								<Button
									variant="tertiary"
									size="sm"
									onClick={clearSelectedFields}
								>
									Cancel
								</Button>
							</ButtonGroup>
						</TableBatchActionsBar>
					)}
				</Stack>
			) : (
				<EmptyState />
			)}
		</Stack>
	);
}

function EmptyState() {
	return (
		<Flex
			height="100%"
			background="shade"
			border
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			padding={2}
			gap={0.75}
			css={{ textAlign: 'center' }}
		>
			<PlusIcon />
			<Text fontSize="lg" lineHeight="heading" fontWeight="bold">
				Add fields
			</Text>
			<Text as="p" color="muted">
				Lorem ipsum become a registered establishment to pack and prepare your
				own products or use.
			</Text>
		</Flex>
	);
}
