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
import {
	stepOwnerDetailsFormSchema,
	stepBusinessDetailsFormSchema,
	stepBusinessAddressFormSchema,
	stepVehicleRegistrationFormSchema,
	stepTradingTimeFormSchema,
	stepFoodServedFormSchema,
	stepEmployeesFormSchema,
	stepUploadDocumentsFormSchema,
} from './FormState';
import { Document, idToDocumentTypeMap } from './StepUploadDocumentsForm';
import { stepKeyToStepDataMap } from './stepsData';

export function ReviewAndSubmitStepsSummary() {
	const { formState } = useGlobalForm();

	const validation = {
		stepOwnerDetails: stepOwnerDetailsFormSchema.safeParse(
			formState.steps?.stepOwnerDetails
		),
		stepBusinessDetails: stepBusinessDetailsFormSchema.safeParse(
			formState.steps?.stepBusinessDetails
		),
		stepBusinessAddress: stepBusinessAddressFormSchema.safeParse(
			formState.steps?.stepBusinessAddress
		),
		stepVehicleRegistration: stepVehicleRegistrationFormSchema.safeParse(
			formState.steps?.stepVehicleRegistration
		),
		stepTradingTime: stepTradingTimeFormSchema.safeParse(
			formState.steps?.stepTradingTime
		),
		stepFoodServed: stepFoodServedFormSchema.safeParse(
			formState.steps?.stepFoodServed
		),
		stepEmployees: {
			success: formState.steps?.stepEmployees?.employee?.every((employee) =>
				stepEmployeesFormSchema.safeParse(employee)
			),
		},
		stepUploadDocuments: stepUploadDocumentsFormSchema.safeParse(
			formState.steps?.stepUploadDocuments
		),
	};

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepOwnerDetails.label}</H2>
				{validation.stepOwnerDetails.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="First name"
							value={formState.steps?.stepOwnerDetails?.firstName}
						/>
						<FormDefinitionListItem
							label="Last name"
							value={formState.steps?.stepOwnerDetails?.lastName}
						/>
						<FormDefinitionListItem
							label="Email address"
							value={formState.steps?.stepOwnerDetails?.email}
						/>
						<FormDefinitionListItem
							label="Mobile number"
							value={formState.steps?.stepOwnerDetails?.mobileNumber}
						/>
						<FormDefinitionListItem
							label="Preferred contact method"
							value={formState.steps?.stepOwnerDetails?.contactMethod}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}

				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepOwnerDetails.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepOwnerDetails.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Business details */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepBusinessDetails.label}</H2>
				{validation.stepBusinessDetails.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Business name"
							value={formState.steps?.stepBusinessDetails?.businessName}
						/>
						<FormDefinitionListItem
							label="Trading name"
							value={formState.steps?.stepBusinessDetails?.tradingName}
						/>
						<FormDefinitionListItem
							label="Business structure"
							value={formState.steps?.stepBusinessDetails?.businessStructure}
						/>
						{formState.steps?.stepBusinessDetails?.businessStructure ===
						'Business' ? (
							<FormDefinitionListItem
								label="Australian Business Number (ABN)"
								value={formState.steps?.stepBusinessDetails?.abn}
							/>
						) : formState.steps?.stepBusinessDetails?.businessStructure ===
						  'Company' ? (
							<FormDefinitionListItem
								label="Australian Company Number (ACN)"
								value={formState.steps?.stepBusinessDetails?.acn}
							/>
						) : null}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepBusinessDetails.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepBusinessDetails.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Business address */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepBusinessAddress.label}</H2>
				{validation.stepBusinessAddress.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemAddress
							address={formState.steps?.stepBusinessAddress?.streetAddress}
							label="Street address"
							postcode={formState.steps?.stepBusinessAddress?.postcode}
							state={formState.steps?.stepBusinessAddress?.state}
							suburb={formState.steps?.stepBusinessAddress?.suburbTownCity}
						/>
						{formState.steps?.stepBusinessAddress
							?.isPostalAddressSameAsBusinessAddress ? (
							<FormDefinitionListItem
								label="Postal address"
								value="Same as street address"
							/>
						) : (
							<FormDefinitionListItemAddress
								address={formState.steps?.stepBusinessAddress?.postalAddress}
								label="Postal address"
								postcode={formState.steps?.stepBusinessAddress?.postalPostcode}
								state={formState.steps?.stepBusinessAddress?.postalState}
								suburb={
									formState.steps?.stepBusinessAddress?.postalSuburbTownCity
								}
							/>
						)}
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepBusinessAddress.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepBusinessAddress.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Vehicle registration */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepVehicleRegistration.label}</H2>
				{validation.stepVehicleRegistration.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Vehicle registration number"
							value={
								formState.steps?.stepVehicleRegistration?.registrationNumber
							}
						/>
						<FormDefinitionListItemDate
							label="Registration expiry date"
							value={
								formState.steps?.stepVehicleRegistration?.registrationExpiry
							}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepVehicleRegistration.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepVehicleRegistration.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Trading time */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepTradingTime.label}</H2>
				{validation.stepTradingTime.success ? (
					<FormDefinitionList>
						<FormDefinitionListItemDateRange
							fromLabel="Start date"
							fromValue={formState.steps?.stepTradingTime?.tradingPeriod?.from}
							toLabel="End date"
							toValue={formState.steps?.stepTradingTime?.tradingPeriod?.to}
						/>
						<FormDefinitionListItem
							label="Trading hours"
							value={`${formState.steps?.stepTradingTime?.openingTime?.formatted} - ${formState.steps?.stepTradingTime?.closingTime?.formatted}`}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepTradingTime.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepTradingTime.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Food served */}
			<Stack gap={1.5}>
				<H2>{stepKeyToStepDataMap.stepFoodServed.label}</H2>
				{validation.stepFoodServed.success ? (
					<FormDefinitionList>
						<FormDefinitionListItem
							label="Food served"
							value={formState.steps?.stepFoodServed?.foodServed
								?.map((item) => item?.label)
								.join(', ')}
						/>
					</FormDefinitionList>
				) : (
					<ValidateSectionAlert />
				)}
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepFoodServed.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepFoodServed.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Employees */}
			<Stack gap={1.5}>
				<H2 id="employees-heading">
					{stepKeyToStepDataMap.stepEmployees.label}
				</H2>
				{validation.stepEmployees.success ? (
					<TableWrapper>
						<Table aria-labelledby="employees-heading">
							<TableHead>
								<TableRow>
									<TableHeader width="33%">Employee name</TableHeader>
									<TableHeader>Email address</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{formState.steps?.stepEmployees?.employee?.map(
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
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepEmployees.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepEmployees.changeLabel}
				</ButtonLink>
			</Stack>

			{/** Upload documents */}
			<Stack gap={1.5}>
				<H2 id="upload-documents-heading">
					{stepKeyToStepDataMap.stepUploadDocuments.label}
				</H2>
				{validation.stepUploadDocuments.success ? (
					<TableWrapper>
						<Table aria-labelledby="upload-documents-heading">
							<TableHead>
								<TableRow>
									<TableHeader width="33%">Document type</TableHeader>
									<TableHeader>File</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{formState.steps?.stepUploadDocuments?.files &&
									(
										Object.entries(
											formState.steps.stepUploadDocuments.files
										) as [Document['id'], { file: string; size: string }][]
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
				<ButtonLink
					alignSelf="start"
					href={stepKeyToStepDataMap.stepUploadDocuments.changeHref}
					variant="text"
				>
					{stepKeyToStepDataMap.stepUploadDocuments.changeLabel}
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
