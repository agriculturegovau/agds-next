import { Stack } from '@ag.ds-next/react/stack';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { ButtonLink } from '@ag.ds-next/react/button';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemAddress,
	FormDefinitionListItemDate,
	FormDefinitionListItemDateRange,
} from '../FormDefinitionList';
import { useGlobalForm } from './GlobalFormProvider';
import { task1FormSteps } from './FormTask1Provider';

type FormTask1ReviewProps = {
	headingsLevel: 'h2' | 'h3';
};

const HEADINGS_MAP = {
	h2: H2,
	h3: H3,
} as const;

export function FormTask1Review({ headingsLevel }: FormTask1ReviewProps) {
	const { formState } = useGlobalForm();
	const HeadingComponent = HEADINGS_MAP[headingsLevel];
	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[0].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="First name"
						value={formState.task1?.step1?.firstName}
					/>
					<FormDefinitionListItem
						label="Last name"
						value={formState.task1?.step1?.lastName}
					/>
					<FormDefinitionListItem
						label="Email"
						value={formState.task1?.step1?.email}
					/>{' '}
					<FormDefinitionListItem
						label="Contact number"
						value={formState.task1?.step1?.contactPhoneNumber}
					/>
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[0].href}>
					Change owner details
				</ButtonLink>
			</Stack>
			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[1].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Business or company name"
						value={formState.task1?.step2?.businessName}
					/>
					<FormDefinitionListItem
						label="Trading name"
						value={formState.task1?.step2?.tradingName}
					/>
					<FormDefinitionListItem
						label="Business structure"
						value={formState.task1?.step2?.businessStructure}
					/>
					{formState.task1?.step2?.businessStructure === 'Business' && (
						<FormDefinitionListItem
							label="Australian Business Number (ABN)"
							value={formState.task1?.step2?.abn}
						/>
					)}
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[1].href}>
					Change business details
				</ButtonLink>
			</Stack>
			{/** Business address */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[2].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItemAddress
						label="Street address"
						address={formState.task1?.step3?.streetAddress}
						suburb={formState.task1?.step3?.suburbTownCity}
						state={formState.task1?.step3?.state}
						postcode={formState.task1?.step3?.postcode}
					/>
					{formState.task1?.step3?.isPostalAddressSameAsStreetAddress ? (
						<FormDefinitionListItem
							label="Postal address"
							value="Same as street address"
						/>
					) : (
						<FormDefinitionListItemAddress
							label="Postal address"
							address={formState.task1?.step3?.postalAddress}
							suburb={formState.task1?.step3?.postalSuburbTownCity}
							state={formState.task1?.step3?.postalState}
							postcode={formState.task1?.step3?.postalPostcode}
						/>
					)}
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[2].href}>
					Change business address
				</ButtonLink>
			</Stack>
			{/** Vehicle registration */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[3].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Vehicle registration number"
						value={formState.task1?.step4?.registrationNumber}
					/>
					<FormDefinitionListItemDate
						label="Vehicle registration expiry"
						value={formState.task1?.step4?.registrationExpiry}
					/>
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[3].href}>
					Change vehicle registration
				</ButtonLink>
			</Stack>
			{/** Trading time */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[4].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItemDateRange
						label="Period active"
						from={formState.task1?.step5?.tradingPeriod?.from}
						to={formState.task1?.step5?.tradingPeriod?.to}
					/>
					<FormDefinitionListItem
						label="Opening time"
						value={formState.task1?.step5?.openingTime}
					/>
					<FormDefinitionListItem
						label="Closing time"
						value={formState.task1?.step5?.closingTime}
					/>
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[4].href}>
					Change trading time
				</ButtonLink>
			</Stack>
			{/** Food served */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[5].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Cuisine"
						value={formState.task1?.step6?.cuisine?.label}
					/>
				</FormDefinitionList>
				<ButtonLink variant="text" href={task1FormSteps[5].href}>
					Change food services
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
