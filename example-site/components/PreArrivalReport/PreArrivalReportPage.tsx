import { Flex, Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { H2, H3 } from '@ag.ds-next/react/heading';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Prose } from '@ag.ds-next/react/prose';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/control-input';
import { StatusBadge } from '@ag.ds-next/react/badge';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { FieldMessage } from '@ag.ds-next/react/field';
import { PreArrivalReportLayout } from './PreArrivalReportLayout';
import { getFormattedLabel, PreArrivalReportDataType } from './data';

export const FieldSetSummaryList = ({
	title,
	fields,
	href,
}: {
	title: string;
	href: string;
	fields: {
		field: string;
		value: string | number | boolean | undefined;
		invalidMessage?: string;
	}[];
}) => (
	<Stack gap={1.5} alignItems="flex-start" maxWidth={tokens.maxWidth.bodyText}>
		<H3>{title}</H3>
		<SummaryList>
			{fields.map(({ field, value, invalidMessage }) => {
				return (
					<SummaryListItem key={field}>
						<SummaryListItemTerm>{field}</SummaryListItemTerm>
						<SummaryListItemDescription>
							{invalidMessage ? (
								<FieldMessage id={`${field}-error`}>
									{invalidMessage}
								</FieldMessage>
							) : (
								value
							)}
						</SummaryListItemDescription>
					</SummaryListItem>
				);
			})}
		</SummaryList>
		<TextLink href={href}>{`Update ${title}`}</TextLink>
	</Stack>
);

const badgeMapper = {
	draft: { tone: 'neutral', label: 'Draft' },
	submitted: { tone: 'success', label: 'Submitted' },
} as const;

// ## vessel-particulars
// ## arrival-details
// ## sanitation
// ## human-health
// ## biofouling
// ## biosecurity
// ## covid19

const formatValue = (value: string | number | boolean | undefined) => {
	if (typeof value === 'boolean') {
		return value ? 'Yes' : 'No';
	}

	return value;
};

export const PreArrivalReportPage = ({
	data,
}: {
	data: PreArrivalReportDataType;
}) => {
	const { tone, label } = badgeMapper[data.status];

	const sanitationFieldValues: {
		field: string;
		value: string | number | boolean | undefined;
		invalidMessage?: string;
	}[] = (
		Object.entries(data.shipSanitation) as [
			keyof typeof data.shipSanitation,
			string | boolean
		][]
	).map(([key, value]) => {
		return {
			field: getFormattedLabel(key),
			value: formatValue(value),
		};
	});

	sanitationFieldValues.push({
		field: 'Example field',
		value: undefined,
		invalidMessage: 'Field name is required',
	});

	return (
		<PreArrivalReportLayout id={data.id}>
			<Flex>
				<StatusBadge label={label} tone={tone} />
			</Flex>
			<Text maxWidth={tokens.maxWidth.bodyText}>
				It is a requirement of the Biosecurity Act 2015, Section 193 for all
				commercial vessels entering Australian waters to provide the information
				requested in this Pre-Arrival Report form 96 - 12 hours before
				anticipated vessel arrival. The vessel operator is responsible for
				providing true and correct information. False or misleading information
				may result in civil penalty. If the vessel operator becomes aware of any
				changes to the information provided, they must provide updated
				intormation immediatelv. The operator will be notified of biosecurity
				status and pratique via the MARS portal.
			</Text>

			<PageAlert tone="error" title="There is a problem">
				<Prose>
					<ul>
						<li>
							<a href="#">Full name must not be empty</a>
						</li>
						<li>
							<a href="#">Email must not be empty</a>
						</li>
						<li>
							<a href="#">Description must not be empty</a>
						</li>
					</ul>
				</Prose>
			</PageAlert>

			<H2>Summary</H2>

			<Stack gap={3}>
				<FieldSetSummaryList
					title="Vessel Particulars"
					href="/pre-arrival-report/edit-vessel-particulars"
					fields={(
						Object.entries(data.vesselDetails) as [
							keyof typeof data.vesselDetails,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>

				<FieldSetSummaryList
					title="Arrival details"
					href="/pre-arrival-report/edit-arrival-details"
					fields={(
						Object.entries(data.arrivalDetails) as [
							keyof typeof data.arrivalDetails,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>
				<FieldSetSummaryList
					title="Sanitation"
					href="/pre-arrival-report/edit-sanitation"
					fields={sanitationFieldValues}
				/>
				<FieldSetSummaryList
					title="Human health"
					href="/pre-arrival-report/edit-human-health"
					fields={(
						Object.entries(data.humanHealth) as [
							keyof typeof data.humanHealth,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>

				<FieldSetSummaryList
					title="Biofouling"
					href="/pre-arrival-report/edit-biofouling"
					fields={(
						Object.entries(data.biofouling) as [
							keyof typeof data.biofouling,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>

				<FieldSetSummaryList
					title="Biosecurity"
					href="/pre-arrival-report/edit-biosecurity"
					fields={(
						Object.entries(data.biosecurity) as [
							keyof typeof data.biosecurity,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>

				<FieldSetSummaryList
					title="COVID-19"
					href="/pre-arrival-report/edit-covid19"
					fields={(
						Object.entries(data.covid19) as [
							keyof typeof data.covid19,
							string | boolean
						][]
					).map(([key, value]) => {
						return { field: getFormattedLabel(key), value: formatValue(value) };
					})}
				/>

				<Prose>
					<h2>Submit Pre-arrival report</h2>
					<h3>Privacy notice</h3>
					<p>
						The department collects Personal Information on this form, under the
						Biosecurity Act 2015, for the purpose of assessing and managing
						potential biosecurity risks vessels coming to Australia expose In
						accordance with the Privacy Act 1988 and the Biosecurity Act 2015,
						the information provided by you may be disclosed to other relevant
						Australian govemment entities for the purposes of administering
						biosecurity: Immigration and Border Protection maritime safety, and
						human health laws. Learn more ab let our privacy policy including
						how to make a complaint. Alternatively phone the department on +61 2
						6272 3933
					</p>
				</Prose>

				<Stack gap={1}>
					<H3>Acknowledgement</H3>
					<Checkbox checked={true}>
						As an agent for this vessel, I warrant the information provided is a
						true and correct representation of the information provided to me
						and any changes have been discussed with the vessel operator.
					</Checkbox>
					<Checkbox checked={true}>
						I acknowledge that providing false or misleading information to a
						Commonwealth entity is a serious offence under the Criminal Code Act
						1995
					</Checkbox>
					<Checkbox checked={false}>
						I confirm that ballast water has not and will not be exchanged in
						the Australian Great Barrier Reef Marine Park.
					</Checkbox>
				</Stack>

				<ButtonGroup>
					<Button variant="primary">Submit</Button>
					<Button variant="secondary">Cancel</Button>
				</ButtonGroup>
			</Stack>
		</PreArrivalReportLayout>
	);
};
