import { Fragment, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { useTernaryState } from '@ag.ds-next/react/core';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { DeleteIcon } from '@ag.ds-next/react/icon';
import { Modal } from '@ag.ds-next/react/modal';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
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
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import {
	GlobalFormProvider,
	useGlobalForm,
} from '../../../components/FormMobileFoodVendorPermit';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemAddress,
	FormDefinitionListItemDate,
	FormDefinitionListItemDateRange,
} from '../../../components/FormDefinitionList';
import { FormContainer } from '../../../components/FormMobileFoodVendorPermit/FormContainer';
import { PageTitle } from '../../../components/PageTitle';
import { managePermitsPage } from '../../../components/FormMobileFoodVendorPermit/utils';
import { NextPageWithLayout } from '../../_app';
import {
	Document,
	idToDocumentTypeMap,
} from '../../../components/FormMobileFoodVendorPermit/steps/StepUploadDocumentsForm';
import { stepKeyToStepDataMap } from '../../../components/FormMobileFoodVendorPermit/steps/stepsData';

const Page: NextPageWithLayout = () => {
	const { query, isReady } = useRouter();
	const { formState } = useGlobalForm();
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	const isValidSlug = query.slug && query.slug === formState.id;
	const pageTitle = isValidSlug && formState.id ? formState.id : 'View permit';

	return (
		<Fragment>
			<DocumentTitle
				title={`${
					pageTitle.startsWith('View') ? pageTitle : `View ${pageTitle}`
				} | Permits`}
			/>
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Dashboard', href: '/app/dashboard' },
							{ label: 'Permits', href: '/app/permits' },
							{ label: pageTitle },
						]}
					/>
					{!isReady ? null : isValidSlug ? (
						<>
							<Stack gap={1.5}>
								<FormContainer hideRequiredFieldsMessage title={pageTitle} />
								<div>
									{formState?.completed ? (
										<StatusBadge label="Submitted" tone="successMedium" />
									) : (
										<StatusBadge label="In progress" tone="inProgressLow" />
									)}
								</div>
							</Stack>
							<Divider />
							{formState?.completed && (
								<Button
									alignSelf="start"
									iconBefore={DeleteIcon}
									onClick={openModal}
									variant="text"
								>
									Remove application
								</Button>
							)}
							{formState?.completed ? (
								<>
									<H2>Business details</H2>

									{/** Owner details */}
									<Stack gap={2}>
										<H3>{stepKeyToStepDataMap.stepOwnerDetails.label}</H3>
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
												label="Contact phone number"
												value={
													formState.steps?.stepOwnerDetails?.contactPhoneNumber
												}
											/>
										</FormDefinitionList>
									</Stack>

									{/** Business details */}
									<Stack alignItems="flex-start" gap={2}>
										<H3>{stepKeyToStepDataMap.stepBusinessDetails.label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItem
												label="Business name"
												value={
													formState.steps?.stepBusinessDetails?.businessName
												}
											/>
											<FormDefinitionListItem
												label="Trading name"
												value={
													formState.steps?.stepBusinessDetails?.tradingName
												}
											/>
											<FormDefinitionListItem
												label="Business structure"
												value={
													formState.steps?.stepBusinessDetails
														?.businessStructure
												}
											/>
											{formState.steps?.stepBusinessDetails
												?.businessStructure === 'Business' ? (
												<FormDefinitionListItem
													label="Australian Business Number (ABN)"
													value={formState.steps?.stepBusinessDetails?.abn}
												/>
											) : formState.steps?.stepBusinessDetails
													?.businessStructure === 'Company' ? (
												<FormDefinitionListItem
													label="Australian Company Number (ACN)"
													value={formState.steps?.stepBusinessDetails?.acn}
												/>
											) : null}
										</FormDefinitionList>
									</Stack>

									{/** Business address */}
									<Stack alignItems="flex-start" gap={2}>
										<H3>{stepKeyToStepDataMap.stepBusinessAddress.label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItemAddress
												address={
													formState.steps?.stepBusinessAddress?.streetAddress
												}
												label="Street address"
												postcode={
													formState.steps?.stepBusinessAddress?.postcode
												}
												state={formState.steps?.stepBusinessAddress?.state}
												suburb={
													formState.steps?.stepBusinessAddress?.suburbTownCity
												}
											/>
											{formState.steps?.stepBusinessAddress
												?.isPostalAddressSameAsBusinessAddress ? (
												<FormDefinitionListItem
													label="Postal address"
													value="Same as street address"
												/>
											) : (
												<FormDefinitionListItemAddress
													address={
														formState.steps?.stepBusinessAddress?.postalAddress
													}
													label="Postal address"
													postcode={
														formState.steps?.stepBusinessAddress?.postalPostcode
													}
													state={
														formState.steps?.stepBusinessAddress?.postalState
													}
													suburb={
														formState.steps?.stepBusinessAddress
															?.postalSuburbTownCity
													}
												/>
											)}
										</FormDefinitionList>
									</Stack>

									{/** Vehicle registration */}
									<Stack alignItems="flex-start" gap={2}>
										<H3>
											{stepKeyToStepDataMap.stepVehicleRegistration.label}
										</H3>
										<FormDefinitionList>
											<FormDefinitionListItem
												label="Vehicle registration number"
												value={
													formState.steps?.stepVehicleRegistration
														?.registrationNumber
												}
											/>
											<FormDefinitionListItemDate
												label="Registration expiry date"
												value={
													formState.steps?.stepVehicleRegistration
														?.registrationExpiry
												}
											/>
										</FormDefinitionList>
									</Stack>

									{/** Trading time */}
									<Stack alignItems="flex-start" gap={2}>
										<H3>{stepKeyToStepDataMap.stepTradingTime.label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItemDateRange
												fromLabel="Start date"
												fromValue={
													formState.steps?.stepTradingTime?.tradingPeriod?.from
												}
												toLabel="End date"
												toValue={
													formState.steps?.stepTradingTime?.tradingPeriod?.to
												}
											/>
											<FormDefinitionListItem
												label="Trading hours"
												value={`${formState.steps?.stepTradingTime?.openingTime?.formatted} - ${formState.steps?.stepTradingTime?.closingTime?.formatted}`}
											/>
										</FormDefinitionList>
									</Stack>

									{/** Food served */}
									<Stack alignItems="flex-start" gap={2}>
										<H3>{stepKeyToStepDataMap.stepFoodServed.label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItem
												label="Food served"
												value={formState.steps?.stepFoodServed?.foodServed
													?.map((item) => item?.label)
													.join(', ')}
											/>
										</FormDefinitionList>
									</Stack>
									<Divider />
									<H2>Employee details</H2>

									{/** Employees */}
									<Stack alignItems="flex-start" gap={2}>
										<H3 id="employees-heading">
											{stepKeyToStepDataMap.stepEmployees.label}
										</H3>
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
									</Stack>

									<Divider />
									<H2>Upload documents</H2>

									{/** Upload documents */}
									<Stack alignItems="flex-start" gap={2}>
										<H3 id="upload-documents-heading">
											{stepKeyToStepDataMap.stepUploadDocuments.label}
										</H3>
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
															) as [
																Document['id'],
																{ file: string; size: string },
															][]
														)?.map(([id, { file, size }]) => (
															<TableRow key={id}>
																<TableCell>{idToDocumentTypeMap[id]}</TableCell>
																<TableCell>
																	<Text breakWords>{`${
																		file || ''
																	} (${size})`}</Text>
																</TableCell>
															</TableRow>
														))}
												</TableBody>
											</Table>
										</TableWrapper>
									</Stack>
									<H2>Declaration</H2>
									<Prose>
										<p>
											I have agreed to the{' '}
											<TextLinkExternal href="/not-found">
												Terms of Use
											</TextLinkExternal>
											, the{' '}
											<TextLinkExternal href="/not-found">
												Privacy Policy
											</TextLinkExternal>{' '}
											and the{' '}
											<TextLinkExternal href="/not-found">
												Privacy Notice
											</TextLinkExternal>
											.
										</p>
										<p>
											I have read, understood and agree to be bound by the Terms
											of Use, The Privacy Policy and the Privacy notice.
										</p>
										<p>
											I understand and agree that any information I provide to
											the Export Service may be used in relation to other
											Services in order to improve the Export Service
											experience.
										</p>
										<p>
											I understand and consent to the Department using the
											personal information, sensitive information, and/or
											relevant information (within the meaning of the Export
											Control Act 2020 (Cth) and the Privacy Act 1988 (Cth)) I
											provide for the purposes of facilitating my access to, and
											ability to perform export activities in, the Export
											Service.
										</p>
									</Prose>
								</>
							) : (
								// This is temporary until we figure out a real pattern
								<Callout title="This application is in progress" tone="info">
									<DirectionLink
										direction="right"
										href="/app/permits/apply-for-new-permit/mobile-food-vendor-permit"
									>
										Continue application
									</DirectionLink>
								</Callout>
							)}
							<Divider />
							<Button
								alignSelf="start"
								iconBefore={DeleteIcon}
								onClick={openModal}
								variant="text"
							>
								Remove application
							</Button>
						</>
					) : (
						<>
							<PageTitle title={pageTitle} />
							<PageAlert title="No matching permit found" tone="error">
								<DirectionLink direction="right" href={managePermitsPage}>
									Manage existing permits
								</DirectionLink>
							</PageAlert>
						</>
					)}
				</Stack>
				<Modal
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Yes, remove</Button>
							<Button onClick={closeModal} variant="secondary">
								No
							</Button>
						</ButtonGroup>
					}
					isOpen={isModalOpen}
					onClose={closeModal}
					title="Are you sure you want to remove this application?"
				>
					<Text as="p">
						Note: this is for demonstration purposes only and does not function.
					</Text>
				</Modal>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</AppLayout>
	);
};
