import { Stack } from '@ag.ds-next/react/stack';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { ButtonLink } from '@ag.ds-next/react/button';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemAddress,
	FormDefinitionListItemDate,
	FormDefinitionListItemDateRange,
} from '../../FormDefinitionList';
import { useGlobalForm } from '../GlobalFormProvider';
import { ValidationSectionAlert } from '../task4/FormTask4Step1';
import { task1FormSteps } from './FormTask1Provider';
import {
	task1Step1FormSchema,
	task1Step2FormSchema,
	task1Step3FormSchema,
	task1Step4FormSchema,
	task1Step5FormSchema,
	task1Step6FormSchema,
} from './FormTask1FormState';

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

	const validation = {
		step1: task1Step1FormSchema.safeParse(formState.task1?.step1),
		step2: task1Step2FormSchema.safeParse(formState.task1?.step2),
		step3: task1Step3FormSchema.safeParse(formState.task1?.step3),
		step4: task1Step4FormSchema.safeParse(formState.task1?.step4),
		step5: task1Step5FormSchema.safeParse(formState.task1?.step5),
		step6: task1Step6FormSchema.safeParse(formState.task1?.step6),
	};

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[0].label}</HeadingComponent>
				{validation.step1.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Given names"
							value={formState.task1?.step1?.firstName}
						/>
						<FormDefinitionListItem
							label="Family name"
							value={formState.task1?.step1?.lastName}
						/>
						<FormDefinitionListItem
							label="Email address"
							value={formState.task1?.step1?.email}
						/>
						<FormDefinitionListItem
							label="Contact phone number"
							value={formState.task1?.step1?.contactPhoneNumber}
						/>
					</FormDefinitionList>
				) : (
					<ValidationSectionAlert />
				)}

				<ButtonLink variant="text" href={task1FormSteps[0].href}>
					Change owner details
				</ButtonLink>
			</Stack>
			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[1].label}</HeadingComponent>
				{validation.step2.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Business name"
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
				) : (
					<ValidationSectionAlert />
				)}
				<ButtonLink variant="text" href={task1FormSteps[1].href}>
					Change business details
				</ButtonLink>
			</Stack>
			{/** Business address */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[2].label}</HeadingComponent>
				{validation.step3.success ? (
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
				) : (
					<ValidationSectionAlert />
				)}
				<ButtonLink variant="text" href={task1FormSteps[2].href}>
					Change business address
				</ButtonLink>
			</Stack>
			{/** Vehicle registration */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[3].label}</HeadingComponent>
				{validation.step4.success ? (
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
				) : (
					<ValidationSectionAlert />
				)}
				<ButtonLink variant="text" href={task1FormSteps[3].href}>
					Change vehicle registration
				</ButtonLink>
			</Stack>
			{/** Trading time */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[4].label}</HeadingComponent>
				{validation.step5.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemDateRange
							fromLabel="Start date"
							fromValue={formState.task1?.step5?.tradingPeriod?.from}
							toLabel="End date"
							toValue={formState.task1?.step5?.tradingPeriod?.to}
						/>
						<FormDefinitionListItem
							label="Trading hours"
							value={`${formState.task1?.step5?.openingTime?.formatted} - ${formState.task1?.step5?.closingTime?.formatted}`}
						/>
					</FormDefinitionList>
				) : (
					<ValidationSectionAlert />
				)}
				<ButtonLink variant="text" href={task1FormSteps[4].href}>
					Change trading time
				</ButtonLink>
			</Stack>
			{/** Food served */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task1FormSteps[5].label}</HeadingComponent>
				{validation.step6.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food served"
							value={formState.task1?.step6?.cuisine
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidationSectionAlert />
				)}
				<ButtonLink variant="text" href={task1FormSteps[5].href}>
					Change food served
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
