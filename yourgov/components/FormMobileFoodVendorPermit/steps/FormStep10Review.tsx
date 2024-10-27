import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemAddress,
	FormDefinitionListItemDate,
	FormDefinitionListItemDateRange,
} from '../../FormDefinitionList';
import { useGlobalForm } from '../GlobalFormProvider';
import { ValidateSectionAlert } from '../ValidateSectionAlert';
import { formSteps } from './FormProvider';
import {
	step1FormSchema,
	step2FormSchema,
	step3FormSchema,
	step4FormSchema,
	step5FormSchema,
	step6FormSchema,
	step7FormSchema,
	step8FormSchema,
	step9FormSchema,
} from './FormState';

type FormReviewProps = {
	headingsLevel: 'h2' | 'h3';
};

const HEADINGS_MAP = {
	h2: H2,
	h3: H3,
} as const;

export function FormStep10Review({ headingsLevel }: FormReviewProps) {
	const { formState } = useGlobalForm();
	const HeadingComponent = HEADINGS_MAP[headingsLevel];

	const validation = {
		step1: step1FormSchema.safeParse(formState.steps?.step1),
		step2: step2FormSchema.safeParse(formState.steps?.step2),
		step3: step3FormSchema.safeParse(formState.steps?.step3),
		step4: step4FormSchema.safeParse(formState.steps?.step4),
		step5: step5FormSchema.safeParse(formState.steps?.step5),
		step6: step6FormSchema.safeParse(formState.steps?.step6),
		step7: step7FormSchema.safeParse(formState.steps?.step7),
		step8: step8FormSchema.safeParse(formState.steps?.step8),
		step9: step9FormSchema.safeParse(formState.steps?.step9),
	};

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[0].label}</HeadingComponent>
				{validation.step1.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="First name"
							value={formState.steps?.step1?.firstName}
						/>
						<FormDefinitionListItem
							label="Last name"
							value={formState.steps?.step1?.lastName}
						/>
						<FormDefinitionListItem
							label="Email address"
							value={formState.steps?.step1?.email}
						/>
						<FormDefinitionListItem
							label="Contact phone number"
							value={formState.steps?.step1?.contactPhoneNumber}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}

				<ButtonLink variant="text" href={formSteps[0].href}>
					Change owner details
				</ButtonLink>
			</Stack>

			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[1].label}</HeadingComponent>
				{validation.step2.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Business name"
							value={formState.steps?.step2?.businessName}
						/>
						<FormDefinitionListItem
							label="Trading name"
							value={formState.steps?.step2?.tradingName}
						/>
						<FormDefinitionListItem
							label="Business structure"
							value={formState.steps?.step2?.businessStructure}
						/>
						{formState.steps?.step2?.businessStructure === 'Business' && (
							<FormDefinitionListItem
								label="Australian Business Number (ABN)"
								value={formState.steps?.step2?.abn}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[1].href}>
					Change business details
				</ButtonLink>
			</Stack>

			{/** Business address */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[2].label}</HeadingComponent>
				{validation.step3.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemAddress
							label="Street address"
							address={formState.steps?.step3?.streetAddress}
							suburb={formState.steps?.step3?.suburbTownCity}
							state={formState.steps?.step3?.state}
							postcode={formState.steps?.step3?.postcode}
						/>
						{formState.steps?.step3?.isPostalAddressSameAsBusinessAddress ? (
							<FormDefinitionListItem
								label="Postal address"
								value="Same as street address"
							/>
						) : (
							<FormDefinitionListItemAddress
								label="Postal address"
								address={formState.steps?.step3?.postalAddress}
								suburb={formState.steps?.step3?.postalSuburbTownCity}
								state={formState.steps?.step3?.postalState}
								postcode={formState.steps?.step3?.postalPostcode}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[2].href}>
					Change business address
				</ButtonLink>
			</Stack>

			{/** Vehicle registration */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[3].label}</HeadingComponent>
				{validation.step4.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Vehicle registration number"
							value={formState.steps?.step4?.registrationNumber}
						/>
						<FormDefinitionListItemDate
							label="Registration expiry date"
							value={formState.steps?.step4?.registrationExpiry}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[3].href}>
					Change vehicle registration
				</ButtonLink>
			</Stack>

			{/** Trading time */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[4].label}</HeadingComponent>
				{validation.step5.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemDateRange
							fromLabel="Start date"
							fromValue={formState.steps?.step5?.tradingPeriod?.from}
							toLabel="End date"
							toValue={formState.steps?.step5?.tradingPeriod?.to}
						/>
						<FormDefinitionListItem
							label="Trading hours"
							value={`${formState.steps?.step5?.openingTime?.formatted} - ${formState.steps?.step5?.closingTime?.formatted}`}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[4].href}>
					Change trading time
				</ButtonLink>
			</Stack>

			{/** Food served */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{formSteps[5].label}</HeadingComponent>
				{validation.step6.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food served"
							value={formState.steps?.step6?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[5].href}>
					Change food served
				</ButtonLink>
			</Stack>

			{/** Employees */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>TODO - {formSteps[6].label}</HeadingComponent>
				{validation.step7.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Employees"
							value={formState.steps?.step7?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[6].href}>
					Change employees
				</ButtonLink>
			</Stack>

			{/** Food safety supervisor */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>TODO - {formSteps[7].label}</HeadingComponent>
				{validation.step8.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food safety supervisor"
							value={formState.steps?.step8?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[7].href}>
					Change food safety supervisor
				</ButtonLink>
			</Stack>

			{/** Upload documents */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>TODO - {formSteps[8].label}</HeadingComponent>
				{validation.step9.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Documents"
							value={formState.steps?.step9?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={formSteps[8].href}>
					Change documents
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
