import { FormEvent, useEffect, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { H2 } from '@ag.ds-next/react/heading';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageContent } from '@ag.ds-next/react/content';
import { ConsignmentFieldsPageLoading } from './ConsignmentFieldsPageLoading';
import { AvailableFields } from './AvailableFields';
import { AddedFields } from './AddedFields';
import { Field } from './utils';

type LoadedData = {
	availableFields: Field[];
	addedFields: Field[];
};

export function ConsignmentFieldsPage() {
	const [data, setData] = useState<LoadedData>();

	// This replicates a fetch request to go and get some data from the server
	useEffect(() => {
		setTimeout(() => {
			setData({
				availableFields: Array.from(Array(10).keys()).map((index) => ({
					id: `some-id-${index}`,
				})),
				addedFields: [],
			});
		}, 5000);
	});

	const loading = !data;

	return (
		<PageContent>
			<Stack gap={3}>
				<Stack gap={1.5}>
					<H2>Add consignment fields</H2>
					<Text as="p">
						Select the fields relevant to the entire consignment that will be
						populated in the XML based on the information input by the exporter
						when submitting their REX.
					</Text>
				</Stack>
				{loading ? (
					<ConsignmentFieldsPageLoading />
				) : (
					<ConsignmentFieldsForm data={data} />
				)}
			</Stack>
		</PageContent>
	);
}

function ConsignmentFieldsForm({ data }: { data: LoadedData }) {
	const [availableFields, setAvailableFields] = useState(
		data.availableFields ?? []
	);

	const [addedFields, setAddedFields] = useState<Field[]>(
		data.addedFields ?? []
	);

	function addFields(fieldsToAdd: Field[]) {
		// Add the field
		setAddedFields((f) => [...f, ...fieldsToAdd]);
		// Remove the field from available fields
		const idsToAdd = fieldsToAdd.map((field) => field.id);
		setAvailableFields((f) => f.filter((f) => !idsToAdd.includes(f.id)));
	}

	function removeFields(fieldsToRemove: Field[]) {
		// Add the field
		setAvailableFields((f) => [...f, ...fieldsToRemove]);
		// Remove the field from available fields
		const idsToAdd = fieldsToRemove.map((field) => field.id);
		setAddedFields((f) => f.filter((f) => !idsToAdd.includes(f.id)));
	}

	const [isSubmitting, setIsSubmitting] = useState(false);

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log('Data to submit to server', {
			availableFields,
			addedFields,
		});
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
		}, 3000);
	}

	return (
		<form onSubmit={onSubmit}>
			<FormStack>
				<Columns cols={{ xs: 1, md: 2 }}>
					<AvailableFields fields={availableFields} addFields={addFields} />
					<AddedFields fields={addedFields} removeFields={removeFields} />
				</Columns>
				<ButtonGroup>
					<Button type="submit" loading={isSubmitting}>
						Save and continue
					</Button>
				</ButtonGroup>
			</FormStack>
		</form>
	);
}
