import { ButtonLink } from '@ag.ds-next/react/button';
import { H2 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
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
import { Document, idToDocumentTypeMap } from './FormStep9';

export function FormStep10Review() {
	const { formState } = useGlobalForm();

	const validation = {
		step1: step1FormSchema.safeParse(formState.steps?.step1),
		step2: step2FormSchema.safeParse(formState.steps?.step2),
		step3: step3FormSchema.safeParse(formState.steps?.step3),
		step4: step4FormSchema.safeParse(formState.steps?.step4),
		step5: step5FormSchema.safeParse(formState.steps?.step5),
		step6: step6FormSchema.safeParse(formState.steps?.step6),
		step7: {
			success: formState.steps?.step7?.employee?.every((employee) =>
				step7FormSchema.safeParse(employee)
			),
		},
		step8: step8FormSchema.safeParse(formState.steps?.step8),
		step9: step9FormSchema.safeParse(formState.steps?.step9),
	};

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5}>
				<H2>{formSteps[0].label}</H2>
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

				<ButtonLink alignSelf="start" href={formSteps[0].href} variant="text">
					Change owner details
				</ButtonLink>
			</Stack>

			{/** Business details */}
			<Stack gap={1.5}>
				<H2>{formSteps[1].label}</H2>
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
						{formState.steps?.step2?.businessStructure === 'Business' ? (
							<FormDefinitionListItem
								label="Australian Business Number (ABN)"
								value={formState.steps?.step2?.abn}
							/>
						) : formState.steps?.step2?.businessStructure === 'Company' ? (
							<FormDefinitionListItem
								label="Australian Company Number (ACN)"
								value={formState.steps?.step2?.acn}
							/>
						) : null}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[1].href} variant="text">
					Change business details
				</ButtonLink>
			</Stack>

			{/** Business address */}
			<Stack gap={1.5}>
				<H2>{formSteps[2].label}</H2>
				{validation.step3.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemAddress
							address={formState.steps?.step3?.streetAddress}
							label="Street address"
							postcode={formState.steps?.step3?.postcode}
							state={formState.steps?.step3?.state}
							suburb={formState.steps?.step3?.suburbTownCity}
						/>
						{formState.steps?.step3?.isPostalAddressSameAsBusinessAddress ? (
							<FormDefinitionListItem
								label="Postal address"
								value="Same as street address"
							/>
						) : (
							<FormDefinitionListItemAddress
								address={formState.steps?.step3?.postalAddress}
								label="Postal address"
								postcode={formState.steps?.step3?.postalPostcode}
								state={formState.steps?.step3?.postalState}
								suburb={formState.steps?.step3?.postalSuburbTownCity}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[2].href} variant="text">
					Change business address
				</ButtonLink>
			</Stack>

			{/** Vehicle registration */}
			<Stack gap={1.5}>
				<H2>{formSteps[3].label}</H2>
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
				<ButtonLink alignSelf="start" href={formSteps[3].href} variant="text">
					Change vehicle registration
				</ButtonLink>
			</Stack>

			{/** Trading time */}
			<Stack gap={1.5}>
				<H2>{formSteps[4].label}</H2>
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
				<ButtonLink alignSelf="start" href={formSteps[4].href} variant="text">
					Change trading time
				</ButtonLink>
			</Stack>

			{/** Food served */}
			<Stack gap={1.5}>
				<H2>{formSteps[5].label}</H2>
				{validation.step6.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food served"
							value={formState.steps?.step6?.foodServed
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[5].href} variant="text">
					Change food served
				</ButtonLink>
			</Stack>

			{/** Employees */}
			<Stack gap={1.5}>
				<H2 id="employees-heading">{formSteps[6].label}</H2>
				{validation.step7.success ? (
					<TableWrapper>
						<Table aria-labelledby="employees-heading">
							<TableHead>
								<TableRow>
									<TableHeader width="33%">Employee name</TableHeader>
									<TableHeader>Email address</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{formState.steps?.step7?.employee?.map(
									(employee) =>
										employee?.id && (
											<TableRow key={employee.id}>
												<TableCell>
													{employee.firstName} {employee.lastName}
												</TableCell>
												<TableCell>{employee.email}</TableCell>
											</TableRow>
										)
								)}
							</TableBody>
						</Table>
					</TableWrapper>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[6].href} variant="text">
					Change employees
				</ButtonLink>
			</Stack>

			{/** Food safety supervisor */}
			<Stack gap={1.5}>
				<H2>{formSteps[7].label}</H2>
				{validation.step8.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food safety supervisor"
							value={formState.steps?.step8?.supervisor}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[7].href} variant="text">
					Change food safety supervisor
				</ButtonLink>
			</Stack>

			{/** Upload documents */}
			<Stack gap={1.5}>
				<H2 id="upload-documents-heading">{formSteps[8].label}</H2>
				{validation.step9.success ? (
					<TableWrapper>
						<Table aria-labelledby="upload-documents-heading">
							<TableHead>
								<TableRow>
									<TableHeader width="33%">Document type</TableHeader>
									<TableHeader>File</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{formState.steps?.step9?.files &&
									(
										Object.entries(formState.steps.step9.files) as [
											Document['id'],
											{ file: string; size: string },
										][]
									)?.map(([id, { file, size }]) => (
										<TableRow key={id}>
											<TableCell>{idToDocumentTypeMap[id]}</TableCell>
											<TableCell>
												<Text breakWords>{`${file || ''} (${size})`}</Text>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableWrapper>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink alignSelf="start" href={formSteps[8].href} variant="text">
					Change documents
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
