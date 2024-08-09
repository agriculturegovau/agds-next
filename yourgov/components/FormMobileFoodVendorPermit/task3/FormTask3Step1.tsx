import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';
import { z } from 'zod';
import { Callout } from '@ag.ds-next/react/callout';
import { FileWithStatus, formatFileSize } from '@ag.ds-next/react/file-upload';
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
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();

	const [isSuccessVisible, setIsSuccessVisible] = useState(
		query.success === 'true'
	);
	const [errors, setErrors] = useState<z.ZodFormattedError<Task3Step1Schema>>();
	const [lastAddedFile, setLastAddedFile] = useState<Task3FileSchema>();

	const fileCollection =
		(formState.task3?.step1
			?.fileCollection as Task3Step1Schema['fileCollection']) || {};

	function handleFileUpload(
		file: FileWithStatus,
		uploadKey: FileCode | undefined
	) {
		if (!uploadKey) {
			return;
		}

		const newFormattedFile: Task3FileSchema = {
			file,
			code: uploadKey,
			type: fileCollection[uploadKey]?.type || 'unknown',
			fileName: file.name,
			fileSize: formatFileSize(file.size),
		};

		setLastAddedFile(newFormattedFile);

		const newFormState = {
			...formState,
			task3: {
				...formState.task3,
				step1: {
					...formState.task3?.step1,
					// ...data,
					fileCollection: {
						...fileCollection,
						[uploadKey]: newFormattedFile,
					},
					completed: !isSavingBeforeExiting,
					started: true,
				},
				started: true,
			},
		};

		setFormState(newFormState);
		refreshValidation(newFormState);
	}
	function handleFileDelete(uploadKey: FileCode | undefined) {
		if (!uploadKey) {
			return;
		}

		setFormState({
			...formState,
			task3: {
				...formState.task3,
				step1: {
					...formState.task3?.step1,
					// ...data,
					fileCollection: {
						...fileCollection,
						[uploadKey]: {
							type: fileCollection[uploadKey].type,
							code: uploadKey,
						},
					},
					completed: false,
				},
			},
		});
	}

	function validate(stateToValidate = formState) {
		return task3Step1Schema.safeParse(stateToValidate?.task3?.step1);
	}

	function refreshValidation(stateToValidate = formState) {
		const validation = validate(stateToValidate);
		setErrors(validation.success ? undefined : validation.error.format());
	}

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		const validation = validate();
		event.preventDefault();

		if (!isSavingBeforeExiting && !validation.success) {
			setErrors(validation.error.format());
			return;
		}

		!isSavingBeforeExiting && (await submitStep());
		setFormState({
			...formState,
			task3: {
				...formState.task3,
				step1: {
					...formState.task3?.step1,
					// ...data,
					fileCollection,
					completed: !isSavingBeforeExiting,
					started: true,
				},
				completed: !isSavingBeforeExiting,
				started: true,
			},
		});
	};

	return (
		<FormTask3Container
			formTitle={task3FormSteps[0].label}
			formIntroduction="Upload all documents listed in the table below."
		>
			<Stack as="form" gap={2} width="100%" onSubmit={onSubmit}>
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

				<Callout
					tone="info"
					title="Based on your answers, you must provide a Food Safety Supervisor Certificate for Charlie Walker."
					variant="compact"
				/>

				<UploadsTable
					fileCollection={fileCollection}
					onFileUpload={handleFileUpload}
					onFileDelete={handleFileDelete}
					errors={errors}
				/>
				<StepActions />
			</Stack>
		</FormTask3Container>
	);
}
