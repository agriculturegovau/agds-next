import { RefObject, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@ag.ds-next/react/stack';
// import { useTernaryState } from '@ag.ds-next/react/core';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import {
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
// import { DashboardFilterDrawer } from './components/DashboardFilterDrawer';

type MultiTablePageProps = {
	tableRef?: RefObject<HTMLTableElement>;
};

const locationTextInputId = 'location-text-input';
const dateOfAssessmentDatePickerId = 'date-picker';
const tableHeadingId = 'table-heading';
const tableId = 'data-table';

const defaultPageErrors = [
	{
		href: `#${locationTextInputId}`,
		message: 'Location of assessment',
		name: 'location',
	},
	{
		href: `#${dateOfAssessmentDatePickerId}`,
		message: 'Date of assessment',
		name: 'date',
	},
	{
		href: `#${tableId}`,
		message: 'Assessment files',
		name: 'files',
	},
];
type DefaultPageErrors = typeof defaultPageErrors;

const defaultTableErrors = [
	{
		href: `#${tableId}`,
		message: 'Upload files',
		name: 'files',
	},
];
type DefaultTableErrors = typeof defaultTableErrors;

export const MultiTablePage = ({ tableRef }: MultiTablePageProps) => {
	const [dateValue, setDateValue] = useState<Date>();
	const [pageErrors, setPageErrors] =
		useState<DefaultPageErrors>(defaultPageErrors);
	const [tableErrors, setTableErrors] =
		useState<DefaultTableErrors>(defaultTableErrors);

	// const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	return (
		<Stack gap={2}>
			<H1 id={tableHeadingId}>Assessment details</H1>

			<Text fontSize="md">Upload all documents listed in the table below.</Text>

			<Text>All fields are required unless marked optional.</Text>

			{!!pageErrors.length && (
				<PageAlert tone="error" title="There is a problem">
					<Text as="p">Please correct the following fields and try again</Text>
					<UnorderedList>
						{pageErrors.map(({ href, message }) => (
							<ListItem key={href}>
								<TextLink href={href}>{message}</TextLink>
							</ListItem>
						))}
					</UnorderedList>
				</PageAlert>
			)}

			<TextInput
				id={locationTextInputId}
				invalid={pageErrors.some(({ name }) => name === 'location')}
				label="Location of assessment"
				message={pageErrors.find(({ name }) => name === 'location')?.message}
				name="location"
				required
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

				<SectionAlert
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

				<DataTable
					ref={tableRef}
					headingId={tableHeadingId}
					tableId={tableId}
				/>
			</Stack>

			<ButtonGroup>
				<Button>Save and continue</Button>
				<Button variant="secondary">Save and exit</Button>
				<Button variant="text">Cancel</Button>
			</ButtonGroup>
		</Stack>
	);
};

const meta: Meta<typeof MultiTablePage> = {
	title: 'Patterns/Data loading/Table',
	component: MultiTablePage,
	render: (args) => (
		<PageContent>
			<MultiTablePage {...args} />
		</PageContent>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof MultiTablePage>;

export const Basic: Story = {
	name: 'Data loading with Table',
	render: function Render() {
		return (
			<PageContent>
				<MultiTablePage />
			</PageContent>
		);
	},
};
