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
import { taskFormSteps } from './FormProvider';
import {
	step1FormSchema,
	step2FormSchema,
	step3FormSchema,
	step4ReviewSchema,
	step5ReviewSchema,
	step6FormSchema,
} from './FormState';

type FormReviewProps = {
	headingsLevel: 'h2' | 'h3';
};

const HEADINGS_MAP = {
	h2: H2,
	h3: H3,
} as const;

export function FormStep7Review({ headingsLevel }: FormReviewProps) {
	const { formState } = useGlobalForm();
	const HeadingComponent = HEADINGS_MAP[headingsLevel];

	const validation = {
		step1: step1FormSchema.safeParse(formState.task?.step1),
		step2: step2FormSchema.safeParse(formState.task?.step2),
		step3: step3FormSchema.safeParse(formState.task?.step3),
		step4: step4ReviewSchema.safeParse(formState.task?.step4),
		step5: step5ReviewSchema.safeParse(formState.task?.step5),
		step6: step6FormSchema.safeParse(formState.task?.step6),
	};

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[0].label}</HeadingComponent>
				{validation.step1.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="First name"
							value={formState.task?.step1?.firstName}
						/>
						<FormDefinitionListItem
							label="Last name"
							value={formState.task?.step1?.lastName}
						/>
						<FormDefinitionListItem
							label="Email address"
							value={formState.task?.step1?.email}
						/>
						<FormDefinitionListItem
							label="Contact phone number"
							value={formState.task?.step1?.contactPhoneNumber}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}

				<ButtonLink variant="text" href={taskFormSteps[0].href}>
					Change owner details
				</ButtonLink>
			</Stack>
			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[1].label}</HeadingComponent>
				{validation.step2.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Business name"
							value={formState.task?.step2?.businessName}
						/>
						<FormDefinitionListItem
							label="Trading name"
							value={formState.task?.step2?.tradingName}
						/>
						<FormDefinitionListItem
							label="Business structure"
							value={formState.task?.step2?.businessStructure}
						/>
						{formState.task?.step2?.businessStructure === 'Business' && (
							<FormDefinitionListItem
								label="Australian Business Number (ABN)"
								value={formState.task?.step2?.abn}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={taskFormSteps[1].href}>
					Change business details
				</ButtonLink>
			</Stack>
			{/** Business address */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[2].label}</HeadingComponent>
				{validation.step3.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemAddress
							label="Street address"
							address={formState.task?.step3?.streetAddress}
							suburb={formState.task?.step3?.suburbTownCity}
							state={formState.task?.step3?.state}
							postcode={formState.task?.step3?.postcode}
						/>
						{formState.task?.step3?.isPostalAddressSameAsBusinessAddress ? (
							<FormDefinitionListItem
								label="Postal address"
								value="Same as street address"
							/>
						) : (
							<FormDefinitionListItemAddress
								label="Postal address"
								address={formState.task?.step3?.postalAddress}
								suburb={formState.task?.step3?.postalSuburbTownCity}
								state={formState.task?.step3?.postalState}
								postcode={formState.task?.step3?.postalPostcode}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={taskFormSteps[2].href}>
					Change business address
				</ButtonLink>
			</Stack>
			{/** Vehicle registration */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[3].label}</HeadingComponent>
				{validation.step4.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Vehicle registration number"
							value={formState.task?.step4?.registrationNumber}
						/>
						<FormDefinitionListItemDate
							label="Registration expiry date"
							value={formState.task?.step4?.registrationExpiry}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={taskFormSteps[3].href}>
					Change vehicle registration
				</ButtonLink>
			</Stack>
			{/** Trading time */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[4].label}</HeadingComponent>
				{validation.step5.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemDateRange
							fromLabel="Start date"
							fromValue={formState.task?.step5?.tradingPeriod?.from}
							toLabel="End date"
							toValue={formState.task?.step5?.tradingPeriod?.to}
						/>
						<FormDefinitionListItem
							label="Trading hours"
							value={`${formState.task?.step5?.openingTime?.formatted} - ${formState.task?.step5?.closingTime?.formatted}`}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={taskFormSteps[4].href}>
					Change trading time
				</ButtonLink>
			</Stack>
			{/** Food served */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{taskFormSteps[5].label}</HeadingComponent>
				{validation.step6.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food served"
							value={formState.task?.step6?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink variant="text" href={taskFormSteps[5].href}>
					Change food served
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
