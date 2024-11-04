import { FormEventHandler, useRef, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import { useTernaryState } from '@ag.ds-next/react/src/core';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import { Box } from '@ag.ds-next/react/src/box';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { FileUpload, FileWithStatus } from '@ag.ds-next/react/file-upload';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { UploadFileTable } from '../UploadFileTable';
import { useFormContext } from './FormProvider';
import { FormContainer } from './FormContainer';

const tableHeadingId = 'upload-documents-heading';
const tableId = 'upload-file-table';

const documentRows = [
	{
		documentType: 'RMS Vehicle registration',
		file: '',
		size: '',
		id: 'rms-vehicle-registration',
		error: false,
	},
	{
		documentType: 'Food Safety Supervisor Certificate for Charlie Walker',
		file: '',
		size: '',
		id: 'food-safety-certificate',
		error: false,
	},
	{
		documentType: 'Suggested menu or list of foods being sold',
		file: '',
		size: '',
		id: 'suggested-menu-or-list-of-foods-being-sold',
		error: false,
	},
] as const;

export type Document = Pick<
	(typeof documentRows)[number],
	'documentType' | 'id'
> & {
	file: string;
	size: string;
	error: boolean;
};

type SampleTableError = {
	documentType: Document['documentType'];
	href: string;
	message: string;
	name: string;
};

export function FormStep9() {
	const { step9GetState, step9SetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const tableSectionAlertRef = useRef<HTMLDivElement>(null);

	const { files = {} } = step9GetState() || {};

	// Table data
	const [documents, setDocuments] = useState<Document[]>(
		documentRows.map((documentRow) => ({
			...documentRow,
			file: files?.[documentRow.id]?.file || '',
			size: files?.[documentRow.id]?.size || '',
		}))
	);
	const [currentDocument, setCurrentDocument] = useState<Document>();

	// Errors
	const [tableErrors, setTableErrors] = useState<SampleTableError[]>([]);

	// Drawer state
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const [uploadedFile, setUploadedFile] = useState<FileWithStatus[]>([]);

	// Action handlers
	const closeDrawerAndClearForm = () => {
		setUploadedFile([]);
		closeDrawer();
	};

	const uploadFile = () => {
		const documentsWithNewFile = documents.map((prevDocument) =>
			currentDocument?.documentType === prevDocument.documentType
				? {
						...prevDocument,
						file: uploadedFile[0]?.name || '',
						size: uploadedFile[0]
							? `${Math.round(uploadedFile[0].size / 1000)}kB`
							: '',
						error: false,
				  }
				: prevDocument
		);
		setDocuments(documentsWithNewFile);

		setTableErrors(
			tableErrors.filter(
				(tableError) =>
					tableError.documentType !== currentDocument?.documentType
			)
		);
		closeDrawerAndClearForm();
	};

	const removeFile = (document: Document) => {
		setDocuments((prevDocuments) =>
			prevDocuments.map((prevDocument) =>
				document?.documentType === prevDocument.documentType
					? {
							...prevDocument,
							file: '',
							size: '',
					  }
					: prevDocument
			)
		);
		closeDrawerAndClearForm();
	};

	const onSaveAndContinue = () => {
		const documentsWithErrors = documents.map((document) =>
			document.file
				? document
				: {
						...document,
						error: true,
				  }
		);
		const tableErrors = documentsWithErrors.reduce<SampleTableError[]>(
			(acc, document) =>
				document.file
					? acc
					: [
							...acc,
							{
								documentType: document.documentType,
								href: `#${document.id}`,
								message: `Upload a file for ${document.documentType}`,
								name: 'files',
							},
					  ],
			[]
		);

		setDocuments(documentsWithErrors);
		setTableErrors(tableErrors);

		return {
			hasErrors: documentsWithErrors.some(({ error }) => error),
		};
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event?.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}
		const { hasErrors } = onSaveAndContinue();
		if (hasErrors) return;

		await submitStep();

		step9SetState({
			files: Object.fromEntries(
				documents.map(({ file, id, size }) => [id, { file, size }])
			) as Record<Document['id'], { file: string; size: string }>,
			completed: !isSavingBeforeExiting,
		});
	};

	return (
		<FormContainer
			formTitle="Upload documents"
			formIntroduction="Upload all documents listed in the table below."
		>
			<Stack gap={2}>
				<Stack gap={1}>
					<Box css={tableErrors.length ? undefined : { display: 'none' }}>
						<SectionAlert
							focusOnUpdate={tableErrors}
							title="You must provide decisions for each change in the table below"
							tone="error"
						>
							<Stack gap={0.5} alignItems="flex-start">
								<UnorderedList>
									{tableErrors.map(({ href, message }) => (
										<ListItem key={href}>
											<TextLink href={href}>{message}</TextLink>
										</ListItem>
									))}
								</UnorderedList>
							</Stack>
						</SectionAlert>
					</Box>

					<UploadFileTable
						documents={documents}
						headingId={tableHeadingId}
						openDrawer={(document: Document) => {
							openDrawer();
							setCurrentDocument(document);
						}}
						removeFile={removeFile}
						tableId={tableId}
					/>
				</Stack>

				<Drawer
					isOpen={isDrawerOpen}
					onClose={closeDrawerAndClearForm}
					title="Upload documents"
					actions={
						<ButtonGroup>
							<Button form="upload-document-form" onClick={uploadFile}>
								Upload file
							</Button>

							<Button onClick={closeDrawerAndClearForm}>Cancel</Button>
						</ButtonGroup>
					}
					elementToFocusOnClose={
						tableErrors.length ? tableSectionAlertRef.current : undefined
					}
				>
					<Stack as="form" id="upload-document-form">
						<FileUpload
							accept={['image/jpeg', 'image/png']}
							hideOptionalLabel
							label={`Upload ${currentDocument?.documentType}`}
							maxSize={2000}
							onChange={(file) => setUploadedFile(file)}
							value={uploadedFile}
						/>
					</Stack>
				</Drawer>
			</Stack>

			<Stack as="form" gap={3} onSubmit={onSubmit} noValidate>
				<StepActions />
			</Stack>
		</FormContainer>
	);
}
