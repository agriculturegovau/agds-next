import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';
import { z } from 'zod';
import { FileWithStatus } from '@ag.ds-next/react/file-upload';
import { H2 } from '@ag.ds-next/react/heading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask3Container } from './FormTask3Container';
import {
	FileCode,
	Task3FileSchema,
	Task3Step1Schema,
	task3Step1Schema,
} from './FormTask3FormState';
import { task3FormSteps, useFormTask3Context } from './FormTask3Provider';
import { UploadsTable } from './UploadsTable';

export function FormTask3Step1() {
	const { query } = useRouter();
	const { submitStep } = useFormTask3Context();
	const { formState, setFormState } = useGlobalForm();

	const [isSuccessVisible, setIsSuccessVisible] = useState(
		query.success === 'true'
	);
	const [errors, setErrors] = useState<z.ZodFormattedError<Task3Step1Schema>>();
	const [lastAddedFile, setLastAddedFile] = useState<Task3FileSchema>();

	const fileCollection = formState.task3?.step1
		?.fileCollection as Task3Step1Schema['fileCollection'];
	const hasFiles = Object.values(fileCollection).filter(Boolean).length > 0;

	function handleFileUpload(
		file: FileWithStatus,
		openDrawer: FileCode | undefined
	) {
		if (!openDrawer) {
			return;
		}

		const newFormattedFile: Task3FileSchema = {
			file,
			code: openDrawer,
			size: file.size.toString(),
			type: fileCollection[openDrawer]?.type || 'unknown',
		};

		setLastAddedFile(newFormattedFile);
		setFormState({
			...formState,
			task3: {
				...formState.task3,
				step1: {
					...formState.task3?.step1,
					// ...data,
					fileCollection: {
						...fileCollection,
						[openDrawer]: newFormattedFile,
					},
					completed: true,
				},
			},
		});
	}

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		const validation = task3Step1Schema.safeParse(formState.task3?.step1);
		event.preventDefault();

		if (!validation.success) {
			setErrors(validation.error.format());
			return;
		}

		await submitStep();
		setFormState({
			...formState,
			task3: {
				...formState.task3,
				step1: {
					...formState.task3?.step1,
					// ...data,
					fileCollection,
					completed: true,
				},
			},
		});
	};

	return (
		<FormTask3Container
			formTitle={task3FormSteps[0].label}
			formIntroduction="Add your employee details."
		>
			<Stack as="form" gap={2} width="100%" onSubmit={onSubmit}>
				{errors?.fileCollection?._errors && (
					<PageAlert tone="error" title={errors.fileCollection?._errors[0]}>
						<Text>Files need to be uploaded.</Text>
					</PageAlert>
				)}

				<H2>List of employees</H2>

				{isSuccessVisible && lastAddedFile && (
					<PageAlert
						tone="success"
						title={`${lastAddedFile?.type} has been added`}
						onClose={() => {
							setIsSuccessVisible(false);
							setLastAddedFile(undefined);
						}}
					>
						<Text>{lastAddedFile?.file.name} has been added.</Text>
					</PageAlert>
				)}

				{hasFiles && (
					<UploadsTable
						fileCollection={fileCollection}
						onFileUpload={handleFileUpload}
					/>
				)}
				<StepActions />
			</Stack>
		</FormTask3Container>
	);
}
