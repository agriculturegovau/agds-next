import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import { useTernaryState } from '@ag.ds-next/react/src/core';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import {
	Box,
	DatePicker,
	ListItem,
	PageAlert,
	SectionAlert,
	Text,
	TextInput,
	TextLink,
	UnorderedList,
} from '../../../docs/components/designSystemComponents';
import { DataTable } from './components/DataTable';

type MultiTablePageProps = {
	tableRef?: RefObject<HTMLTableElement>;
};

const locationTextInputId = 'location-text-input';
const dateOfAssessmentDatePickerId = 'date-picker';
const tableHeadingId = 'table-heading';
const tableId = 'data-table';

const defaultAssessmentFiles = [
	{
		documentType: 'RMS Vehicle registration',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'rms-vehicle-registration-upload-button',
		error: false,
	},
	{
		documentType: 'Operational Plan of Management',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'operational-plan-of-management-upload-button',
		error: false,
	},
	{
		documentType: 'Vehicle build and layout plans',
		size: '',
		label: 'Upload',
		buttonId: 'vehicle-build-and-layout-plans-upload-button',
		error: false,
	},
	{
		documentType: 'Food Safety Supervisor Certificate for Alex',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'food-safety-supervisor-certificate-for-alex-upload-button',
		error: false,
	},
	{
		documentType: 'Suggested menu or list of foods being sold',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'suggested-menu-or-list-of-foods-being-sold-upload-button',
		error: false,
	},
];
export type AssessmentFile = (typeof defaultAssessmentFiles)[number];

const locationPageError = {
	href: `#${locationTextInputId}`,
	message: 'Location of assessment',
	name: 'location' as const,
};

const datePageError = {
	href: `#${dateOfAssessmentDatePickerId}`,
	message: 'Date of assessment',
	name: 'date' as const,
};

const filesPageError = {
	href: `#section-alert`,
	message: 'Assessment files',
	name: 'files' as const,
};

type PageError =
	| typeof locationPageError
	| typeof datePageError
	| typeof filesPageError;

// const getPageErrors = ({name}: {name: PageErrors[number]['name']}) => {

// }

const sampleTableError = {
	href: '#vehicle-build-and-layout-plans-upload-button',
	message: 'Upload files',
	name: 'files',
};
type SampleTableError = typeof sampleTableError;

export const TableWithValidation = ({ tableRef }: MultiTablePageProps) => {
	const tableSectionAlertRef = useRef<HTMLDivElement>(null);

	// Input data
	const [dateValue, setDateValue] = useState<Date>();
	const [locationValue, setLocationValue] = useState('');

	// Table data
	const [assessmentFiles, setAssessmentFiles] = useState(
		defaultAssessmentFiles
	);
	const [currentAssessmentFile, setCurrentAssessmentFile] =
		useState<AssessmentFile>();

	// Errors
	const [pageErrors, setPageErrors] = useState<PageError[]>([]);
	const [tableErrors, setTableErrors] = useState<SampleTableError[]>([]);

	// Drawer state
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);

	// Action handlers (includes some mocking)
	const mockUploadFile = () => {
		const newAssessmentFiles = assessmentFiles.map((prevAssessmentFile) =>
			currentAssessmentFile?.documentType === prevAssessmentFile.documentType
				? {
						...prevAssessmentFile,
						file: 'filename.pdf',
						size: '88kb',
						error: false,
				  }
				: prevAssessmentFile
		);
		setAssessmentFiles(newAssessmentFiles);

		setTableErrors(
			newAssessmentFiles.reduce<SampleTableError[]>(
				(acc, assessmentFile) =>
					assessmentFile.file
						? acc
						: [
								...acc,
								{
									href: `#${assessmentFile.buttonId}`,
									message: `Upload a file for ${assessmentFile.documentType}`,
									name: 'files',
								},
						  ],
				[]
			)
		);
		closeDrawer();
	};

	const mockUploadError = () => {
		const newAssessmentFiles = assessmentFiles.map((prevAssessmentFile) =>
			currentAssessmentFile?.documentType === prevAssessmentFile.documentType
				? {
						...prevAssessmentFile,
						file: '',
						size: '',
						error: true,
				  }
				: prevAssessmentFile
		);
		setAssessmentFiles(newAssessmentFiles);
		setPageErrors((prevPageErrors) => {
			return Array.from(new Set([...prevPageErrors, filesPageError]));
		});
		setTableErrors(
			newAssessmentFiles.reduce<SampleTableError[]>(
				(acc, assessmentFile) =>
					assessmentFile.file
						? acc
						: [
								...acc,
								{
									href: `#${assessmentFile.buttonId}`,
									message: `Upload a file for ${assessmentFile.documentType}`,
									name: 'files',
								},
						  ],
				[]
			)
		);
		closeDrawer();
	};

	const removeFile = () => {
		setAssessmentFiles((prevAssessmentFiles) =>
			prevAssessmentFiles.map((prevAssessmentFile) =>
				currentAssessmentFile?.documentType === prevAssessmentFile.documentType
					? {
							...prevAssessmentFile,
							file: '',
							size: '',
							error: true,
					  }
					: prevAssessmentFile
			)
		);
		closeDrawer();
	};

	const onSaveAndContinue = () => {
		const nameToInputValidityMap = {
			location: !!locationValue,
			date: !!dateValue,
			files: assessmentFiles.every(({ file }) => !!file),
		};
		const newAssessmentFiles = assessmentFiles.map((assessmentFile) =>
			assessmentFile.file
				? assessmentFile
				: {
						...assessmentFile,
						error: true,
				  }
		);

		setAssessmentFiles(newAssessmentFiles);
		setTableErrors(() =>
			newAssessmentFiles.reduce<SampleTableError[]>(
				(acc, assessmentFile) =>
					assessmentFile.file
						? acc
						: [
								...acc,
								{
									href: `#${assessmentFile.buttonId}`,
									message: `Upload a file for ${assessmentFile.documentType}`,
									name: 'files',
								},
						  ],
				[]
			)
		);
		setPageErrors(() =>
			[locationPageError, datePageError, filesPageError].filter(
				({ name }) => !nameToInputValidityMap[name]
			)
		);
	};

	return (
		<Stack gap={2}>
			<H1 id={tableHeadingId}>Assessment details</H1>

			<Text fontSize="md">Upload all documents listed in the table below.</Text>

			<Text>All fields are required unless marked optional.</Text>

			{pageErrors.length >= 2 && (
				<PageAlert
					focusOnUpdate={pageErrors}
					title="There is a problem"
					tone="error"
				>
					<Text as="p">Please correct the following fields and try again</Text>
					<UnorderedList>
						{pageErrors.map(({ href, message }) => {
							return (
								<ListItem key={href}>
									<TextLink href={href}>{message}</TextLink>
								</ListItem>
							);
						})}
					</UnorderedList>
				</PageAlert>
			)}

			<TextInput
				id={locationTextInputId}
				invalid={pageErrors.some(({ name }) => name === 'location')}
				label="Location of assessment"
				message={pageErrors.find(({ name }) => name === 'location')?.message}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setLocationValue(event.target.value)
				}
				name="location"
				required
				value={locationValue}
			/>

			<DatePicker
				id={dateOfAssessmentDatePickerId}
				invalid={pageErrors.some(({ name }) => name === 'date')}
				label="Date of assessment"
				message={pageErrors.find(({ name }) => name === 'date')?.message}
				name="date"
				onChange={setDateValue}
				required
				value={dateValue}
			/>

			<Stack gap={1}>
				<H2>Assessment files</H2>

				<Box css={tableErrors.length ? undefined : { display: 'none' }}>
					<SectionAlert
						id="section-alert"
						ref={tableSectionAlertRef}
						tabIndex={-1}
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

				<DataTable
					assessmentFiles={assessmentFiles}
					ref={tableRef}
					headingId={tableHeadingId}
					tableId={tableId}
					openDrawer={(assessmentFile: AssessmentFile) => {
						openDrawer();
						setCurrentAssessmentFile(assessmentFile);
					}}
				/>
			</Stack>

			<ButtonGroup>
				<Button onClick={onSaveAndContinue}>Save and continue</Button>
				<Button variant="secondary">Save and exit</Button>
				<Button variant="text">Cancel</Button>
			</ButtonGroup>

			<>
				<Drawer
					key={pageErrors.length}
					isOpen={isDrawerOpen}
					onClose={closeDrawer}
					title="Medium Drawer"
					actions={
						<ButtonGroup>
							<Button onClick={closeDrawer}>Done</Button>
						</ButtonGroup>
					}
					elementToFocusOnClose={
						tableErrors.length ? tableSectionAlertRef.current : undefined
					}
				>
					<Stack gap={2}>
						<Text>{currentAssessmentFile?.documentType}</Text>

						<Button onClick={mockUploadFile}>Mock upload file</Button>

						<Button onClick={mockUploadError}>Mock upload error</Button>

						<Button variant="tertiary" onClick={removeFile}>
							Remove file
						</Button>
					</Stack>
				</Drawer>
			</>
		</Stack>
	);
};
