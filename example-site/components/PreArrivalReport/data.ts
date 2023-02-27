export const preArrivalReportData = {
	id: 'PA123456789',
	status: 'draft' as 'draft' | 'submitted',
	vesselDetails: {
		vesselName: 'Boaty McBoatface',
		countryOfRegistry: 'United Kingdom',
		imo: '1234567',
		registration: '89101112',
		vesselType: 'Container vessel',
		overallLength: '123m',
		yearBuilt: '1995',
		grossTonnage: '1000',
		netTonnage: '900',
		cargoDocks: '2',
		cargoHolds: '3',
		cargoTanks: '4',
		vesselEmail: 'boaty@boatface.com',
	},
	arrivalDetails: {
		voyage: '123456789',
		lastPortOfCall: 'Hong Kong',
		dateDepartedLastPort: '2021-01-01',
		firstPortOfCall: 'Sydney',
		estimatedArrivalDate: '2021-01-01',
		estimatedDepartureDate: '2021-01-01',
		berthName: 'Berth 1',
	},
	shipSanitation: {
		certificateType: 'Control Certificate',
		controlDetails: 'Documentation',
		portOfIssue: 'Sydney',
		certificate: 'cert.pdf',
		issueDate: '2023-01-01',
		requiresSanitationCertificate: true,
		portAgency: 'Acme Port Agency',
		billingAgency: 'Acme Billing Agency',
	},
	humanHealth: {
		hasAnyoneDied: false,
		hasAnyoneBeenSick: false,
	},
	biofouling: {
		hasBiofoulingManagementPlan: true,
	},
	biosecurity: {
		pets: false,
		hitchhikingAnimals: false,
	},
	livestock: {},
	covid19: {},
} as const;

export type PreArrivalReportDataType = typeof preArrivalReportData;

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

export const getFormattedLabel = (label: string) => {
	if (labelMapper[label] === undefined) {
		return label;
	}

	return labelMapper[label] || label;
};
