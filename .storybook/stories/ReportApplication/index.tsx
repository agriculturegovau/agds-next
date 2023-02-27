import { Flex, Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Checkbox, ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import { tokens } from '@ag.ds-next/react/core';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { SideNav } from '@ag.ds-next/react/side-nav';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemAction,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { PageTemplate } from '../../components/PageTemplate';

export default {
	title: 'Examples/Report Application',
};

const sideBarItems = [
	{
		href: '#vessel-details',
		label: 'Vessel details',
		items: [
			{
				href: '#vessel-particulars',
				label: 'Vessel Particulars',
			},
			{
				href: '#additional-information',
				label: 'Additional information',
			},
			{
				href: '#ship-sanitation',
				label: 'Ship sanitation',
			},
			{
				href: '#certificate-details',
				label: 'Certificate details',
			},
		],
	},
	{
		href: '#one',
		label: 'Arrival details',
	},
	{ href: '#three', label: 'Sanitation' },
	{
		href: '#four',
		label: 'Human health',
	},
	{
		href: '#five',
		label: 'BioFouling',
	},
	{
		href: '#six',
		label: 'BioSecurity',
	},
];

const values = {
	vesselParticulars: {
		vesselName: 'Boaty McBoatface',
		countryOfRegistry: 'United Kingdom',
		imo: '1234567',
		registration: '89101112',
		vesselType: 'Container vessel',
		overallLength: '123m',
	},
	additionalVesselInformation: {
		yearBuilt: '1995',
		grossTonnage: '1000',
		netTonnage: '900',
		cargoDocks: '2',
		cargoHolds: '3',
		cargoTanks: '4',
	},
	shipSanitation: {
		requiresSanitationCertificate: true,
		portAgency: 'Acme Port Agency',
		billingAgency: 'Acme Billing Agency',
	},
	certificateDetails: {
		certificateType: 'extension',
		controlDetails: 'Mosquito vector',
		portOfIssue: 'Sydney',
		certificate: 'cert.pdf',
	},
} as const;

const labelMapper = {
	vesselName: 'Vessel name',
	countryOfRegistry: 'Country of registry',
	imo: 'IMO',
	registration: 'Official registration number',
	vesselType: 'Vessel type',
	overallLength: 'Overall length',
	yearBuilt: 'Year built',
	grossTonnage: 'Gross tonnage',
	netTonnage: 'Net tonnage',
	cargoDocks: 'Cargo docks',
	cargoHolds: 'Cargo holds',
	cargoTanks: 'Cargo tanks',
	requiresSanitationCertificate: 'Requires sanitation certificate',
	portAgency: 'Port agency',
	billingAgency: 'Billing agency',
	certificateType: 'Certificate type',
	controlDetails: 'Control details',
	portOfIssue: 'Port of issue',
	certificate: 'Current Sanitation Certificate',
} as const;

const FieldSetSummaryList = ({
	title,
	fields,
}: {
	title: string;
	fields: [field: string, value: string | number | boolean | undefined][];
}) => (
	<Stack gap={1.5} alignItems="flex-start">
		<H2>{title}</H2>
		<SummaryList>
			{fields.map(([field, value]) => (
				<SummaryListItem>
					<SummaryListItemTerm>{field}</SummaryListItemTerm>
					<SummaryListItemDescription>{value}</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href="#">Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
			))}
		</SummaryList>
	</Stack>
);

const Frame = ({
	children,
	currentPath,
}: {
	children: React.ReactNode;
	currentPath: string;
}) => {
	return (
		<PageTemplate>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
						<SideNav
							activePath={currentPath}
							title="Pre-arrival report"
							collapseTitle="In this section"
							titleLink="#"
							items={sideBarItems}
						/>
					</Column>
					<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{ href: '#', label: 'Home' },
									{ href: '#', label: 'Pre-arrival reports' },
									{ label: '#PA123456789' },
								]}
							/>
							<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
								<Stack>
									<Text
										fontSize="sm"
										color="muted"
										fontWeight="bold"
										lineHeight="heading"
									>
										PA123456789
									</Text>
									<H1 as="h2">Vessel Details</H1>
								</Stack>
								<Text as="p" fontSize="md" color="muted">
									Introductory paragraph providing context for this single page
									of the multi-step form. All questions on page must be related
									- md/default (P)
								</Text>
							</Stack>

							{children}
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</PageTemplate>
	);
};

export const EditVesselParticulars = () => {
	return (
		<Frame currentPath="#vessel-particulars">
			<Stack gap={3}>
				<form>
					<FormStack>
						<Fieldset
							legend={<H2>Vessel Particulars</H2>}
							hint="Supporting information for provide details subheading. All fields are required unless marked optional."
						>
							<FormStack>
								<TextInput
									label="Vessel name"
									required
									maxWidth="xl"
									value={values.vesselParticulars.vesselName}
								/>
								<TextInput
									label="Country of registry"
									required
									maxWidth="xl"
									value={values.vesselParticulars.countryOfRegistry}
								/>
								<Flex gap={1} alignItems="flex-end">
									<TextInput
										label="IMO"
										id="businessName"
										required
										maxWidth="xl"
										value={values.vesselParticulars.imo}
									/>
									<Checkbox checked={false}>tick if none</Checkbox>
								</Flex>
								<TextInput
									label="Official registration number"
									required
									maxWidth="xl"
									value={values.vesselParticulars.registration}
								/>
								<Select
									label="Vessel type"
									options={[
										{ value: 'a', label: 'Container vessel' },
										{ value: 'b', label: 'Submarine' },
										{ value: 'c', label: 'Kayak' },
									]}
									value={values.vesselParticulars.vesselType}
									maxWidth="xl"
								/>
								<TextInput
									label="Overall length"
									required
									maxWidth="xl"
									value={values.vesselParticulars.overallLength}
								/>
							</FormStack>
						</Fieldset>
						<ButtonGroup>
							<Button>Submit</Button>
							<Button variant="secondary" onClick={() => {}}>
								Discard
							</Button>
						</ButtonGroup>
					</FormStack>
				</form>
			</Stack>
		</Frame>
	);
};

export const EditAdditionalVesselInformation = () => {
	return (
		<Frame currentPath="#additional-information">
			<Stack gap={3}>
				<form>
					<FormStack>
						<Fieldset
							legend={<H2>Additional vessel information</H2>}
							hint="Supporting information for provide details subheading. All fields are required unless marked optional."
						>
							<FormStack>
								<TextInput
									label="Year built"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={values.additionalVesselInformation.yearBuilt}
								/>
								<TextInput
									label="Gross tonnage"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={values.additionalVesselInformation.grossTonnage}
								/>
								<TextInput
									label="Net tonnage"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={values.additionalVesselInformation.netTonnage}
								/>
								<TextInput
									label="Cargo docks"
									maxWidth="xl"
									value={values.additionalVesselInformation.cargoDocks}
								/>
								<TextInput
									label="Cargo holds"
									maxWidth="xl"
									value={values.additionalVesselInformation.cargoHolds}
								/>
								<TextInput
									label="Cargo tanks"
									maxWidth="xl"
									value={values.additionalVesselInformation.cargoTanks}
								/>
							</FormStack>
						</Fieldset>
						<ButtonGroup>
							<Button>Submit</Button>
							<Button variant="secondary" onClick={() => {}}>
								Discard
							</Button>
						</ButtonGroup>
					</FormStack>
				</form>
			</Stack>
		</Frame>
	);
};

export const EditShipSanitation = () => {
	return (
		<Frame currentPath="#ship-sanitation">
			<Stack gap={3}>
				<form>
					<FormStack>
						<Fieldset legend={<H2>Ship sanitation</H2>}>
							<FormStack>
								<ControlGroup
									label="Will the vessel require a new Sanitiation Certificate at this port?"
									required
								>
									<Radio checked={true}>Yes</Radio>
									<Radio checked={false}>No</Radio>
								</ControlGroup>
								<TextInput
									label="Port agency"
									required
									maxWidth="xl"
									value={values.shipSanitation.portAgency}
								/>
								<TextInput
									label="Billing agency"
									required
									maxWidth="xl"
									value={values.shipSanitation.billingAgency}
								/>
							</FormStack>
						</Fieldset>
						<ButtonGroup>
							<Button>Submit</Button>
							<Button variant="secondary" onClick={() => {}}>
								Discard
							</Button>
						</ButtonGroup>
					</FormStack>
				</form>
			</Stack>
		</Frame>
	);
};

export const EditCertificateDetails = () => {
	return (
		<Frame currentPath="#certificate-details">
			<Stack gap={3}>
				<form>
					<Fieldset legend={<H2>Certificate details</H2>}>
						<FormStack>
							<FormStack>
								<Select
									label="Certificate type"
									options={[
										{ value: 'extension', label: 'Extension certificate' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
									]}
									maxWidth="xl"
									required
								/>{' '}
								<Select
									label="Control details"
									options={[
										{ value: 'Mosquito vector', label: 'Mosquito vector' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
									]}
									maxWidth="xl"
									required
								/>
								<TextInput label="Port of issue" maxWidth="xl" required />
								<DatePicker
									label="Date of issue"
									value={new Date()}
									onChange={() => {}}
									maxWidth="xl"
								/>
							</FormStack>
							<FileUpload
								label="Current Sanitation Certificate"
								accept={['application/pdf']}
								onChange={() => {}}
								value={[]}
							/>
						</FormStack>
					</Fieldset>
				</form>
			</Stack>
		</Frame>
	);
};
