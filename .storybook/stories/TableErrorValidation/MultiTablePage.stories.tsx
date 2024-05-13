import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
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
	PageContent,
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
	},
	{
		documentType: 'Operational Plan of Management',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'operational-plan-of-management-upload-button',
	},
	{
		documentType: 'Vehicle build and layout plans',
		file: 'filename.pdf',
		size: '',
		label: 'Upload',
		buttonId: 'vehicle-build-and-layout-plans-upload-button',
		error: true,
	},
	{
		documentType: 'Food Safety Supervisor Certificate for Alex',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'food-safety-supervisor-certificate-for-alex-upload-button',
	},
	{
		documentType: 'Suggested menu or list of foods being sold',
		file: 'filename.pdf',
		size: '88kb',
		label: 'Upload',
		buttonId: 'suggested-menu-or-list-of-foods-being-sold-upload-button',
	},
];

const samplePageErrors = [
	{
		href: `#${locationTextInputId}`,
		message: 'Location of assessment',
		name: 'location' as const,
	},
	{
		href: `#${dateOfAssessmentDatePickerId}`,
		message: 'Date of assessment',
		name: 'date' as const,
	},
	{
		href: `#section-alert`,
		message: 'Assessment files',
		name: 'files' as const,
	},
];
type SamplePageErrors = typeof samplePageErrors;

const sampleTableErrors = [
	{
		href: '#vehicle-build-and-layout-plans-upload-button',
		message: 'Upload files',
		name: 'files',
	},
];
type SampleTableErrors = typeof sampleTableErrors;

export const TableWithValidation = ({ tableRef }: MultiTablePageProps) => {
	const pageAlertRef = useRef<HTMLDivElement>(null);
	const [dateValue, setDateValue] = useState<Date>();
	const [locationValue, setLocationValue] = useState<string>();
	const [pageErrors, setPageErrors] = useState<SamplePageErrors>([]);
	const [tableErrors, setTableErrors] = useState<SampleTableErrors>([]);
	const [assessmentFiles, setAssessmentFiles] = useState(
		defaultAssessmentFiles
	);

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);

	const onSaveAndContinue = () => {
		const nameToValidityMap = {
			date: !!dateValue,
			files: assessmentFiles.every(({ error }) => !error),
			location: !!locationValue,
		};
		setTableErrors((prevTableErrors) =>
			assessmentFiles.every(({ error }) => !error) ? [] : prevTableErrors
		);
		setPageErrors((prevPageErrors) =>
			prevPageErrors.filter(({ name }) => !nameToValidityMap[name])
		);
	};

	const mockUploadFile = () => {
		setAssessmentFiles((prevAssessmentFiles) =>
			prevAssessmentFiles
				.filter(({ error }) => !error)
				.concat([
					{
						documentType: 'Vehicle build and layout plans',
						file: 'filename.pdf',
						size: '88kb',
						label: 'Upload',
						buttonId: 'vehicle-build-and-layout-plans-upload-button',
						error: true,
					},
				])
		);
		setPageErrors([samplePageErrors[2]]);
		closeDrawer();
	};

	return (
		<Stack gap={2}>
			<H1 id={tableHeadingId}>Assessment details</H1>

			<Text fontSize="md">Upload all documents listed in the table below.</Text>

			<Text>All fields are required unless marked optional.</Text>

			<Box css={pageErrors.length ? undefined : { display: 'none' }}>
				<PageAlert
					ref={pageAlertRef}
					tabIndex={-1}
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
			</Box>

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

				{!!tableErrors.length && (
					<SectionAlert
						id="section-alert"
						title="You must provide decisions for each change in the table below"
						tone="error"
						tabIndex={-1}
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
				)}

				<DataTable
					assessmentFiles={assessmentFiles}
					ref={tableRef}
					headingId={tableHeadingId}
					tableId={tableId}
					openDrawer={openDrawer}
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
					elementToFocusOnClose={pageAlertRef.current}
				>
					<Button onClick={mockUploadFile}>Mock upload file</Button>
				</Drawer>
			</>
		</Stack>
	);
};

const meta: Meta<typeof TableWithValidation> = {
	title: 'Patterns/Multi Table Page/Table',
	component: TableWithValidation,
	render: (args) => (
		<PageContent>
			<TableWithValidation {...args} />
		</PageContent>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof TableWithValidation>;

export const Basic: Story = {
	name: 'Data loading with Table',
	render: function Render() {
		return (
			<PageContent>
				<TableWithValidation />
			</PageContent>
		);
	},
};
