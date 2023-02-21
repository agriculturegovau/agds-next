import { useRouter } from 'next/router';
import { Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { tokens } from '@ag.ds-next/react/core';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { SideNav } from '@ag.ds-next/react/side-nav';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemAction,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';

const sideBarItems = [
	{
		href: '/pre-arrival-report/vessel-details',
		label: 'Vessel details',
		items: [
			{
				href: '/pre-arrival-report/vessel-details/edit-vessel-particulars',
				label: 'Vessel Particulars',
			},
			{
				href: '/pre-arrival-report/vessel-details/edit-additional-information',
				label: 'Additional information',
			},
			{
				href: '/pre-arrival-report/vessel-details/edit-ship-sanitation',
				label: 'Ship sanitation',
			},
			{
				href: '/pre-arrival-report/vessel-details/edit-certificate-details',
				label: 'Certificate details',
			},
		],
	},
	{
		href: '/pre-arrival-report/arrival-details',
		label: 'Arrival details',
	},
	{
		href: '/pre-arrival-report/sanitation',
		label: 'Sanitation',
	},
	{
		href: '/pre-arrival-report/#four',
		label: 'Human health',
	},
	{
		href: '/pre-arrival-report/#five',
		label: 'BioFouling',
	},
	{
		href: '/pre-arrival-report/#six',
		label: 'BioSecurity',
	},
];

export const values = {
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
		dateOfIssue: new Date(),
		certificate: 'cert.pdf',
	},
} as const;

export const labelMapper = {
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

export const FieldSetSummaryList = ({
	title,
	fields,
}: {
	title: string;
	fields: [
		field: string,
		value: string | number | boolean | undefined,
		href: string
	][];
}) => (
	<Stack gap={1.5} alignItems="flex-start">
		<H2>{title}</H2>
		<SummaryList>
			{fields.map(([field, value, href]) => (
				<SummaryListItem key={field}>
					<SummaryListItemTerm>{field}</SummaryListItemTerm>
					<SummaryListItemDescription>{value}</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href={href}>Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
			))}
		</SummaryList>
	</Stack>
);

export const PreArrivalReportLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const router = useRouter();
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<SideNav
						activePath={router.asPath}
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
								Introductory paragraph providing context for this single page of
								the multi-step form. All questions on page must be related -
								md/default (P)
							</Text>
						</Stack>
						{children}
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
};
