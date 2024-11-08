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
	formSteps,
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
} from '../../../components/FormMobileFoodVendorPermit/steps/FormStep9';

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
							{ label: 'Permits', href: '/app/licences-and-permits' },
							{ label: pageTitle },
						]}
					/>
					{!isReady ? null : isValidSlug ? (
						<>
							<Stack gap={1.5}>
								<FormContainer title={pageTitle} hideRequiredFieldsMessage />
								<div>
									{formState?.completed ? (
										<StatusBadge tone="successMedium" label="Submitted" />
									) : (
										<StatusBadge tone="inProgressLow" label="In progress" />
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
										<H3>{formSteps[0].label}</H3>
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
									</Stack>

									{/** Business details */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[1].label}</H3>
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
											{formState.steps?.step2?.businessStructure ===
											'Business' ? (
												<FormDefinitionListItem
													label="Australian Business Number (ABN)"
													value={formState.steps?.step2?.abn}
												/>
											) : formState.steps?.step2?.businessStructure ===
											  'Company' ? (
												<FormDefinitionListItem
													label="Australian Company Number (ACN)"
													value={formState.steps?.step2?.acn}
												/>
											) : null}
										</FormDefinitionList>
									</Stack>

									{/** Business address */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[2].label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItemAddress
												label="Street address"
												address={formState.steps?.step3?.streetAddress}
												suburb={formState.steps?.step3?.suburbTownCity}
												state={formState.steps?.step3?.state}
												postcode={formState.steps?.step3?.postcode}
											/>
											{formState.steps?.step3
												?.isPostalAddressSameAsBusinessAddress ? (
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
									</Stack>

									{/** Vehicle registration */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[3].label}</H3>
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
									</Stack>

									{/** Trading time */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[4].label}</H3>
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
									</Stack>

									{/** Food served */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[5].label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItem
												label="Food served"
												value={formState.steps?.step6?.foodServed
													?.map((item) => item?.label)
													.join(', ')}
											/>
										</FormDefinitionList>
									</Stack>
									<Divider />
									<H2>Employee details</H2>

									{/** Employees */}
									<Stack gap={2} alignItems="flex-start">
										<H3 id="employees-heading">{formSteps[6].label}</H3>
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
									</Stack>

									{/** Food safety supervisor */}
									<Stack gap={2} alignItems="flex-start">
										<H3>{formSteps[7].label}</H3>
										<FormDefinitionList>
											<FormDefinitionListItem
												label="Food safety supervisor"
												value={formState.steps?.step8?.supervisor}
											/>
										</FormDefinitionList>
									</Stack>
									<Divider />
									<H2>Upload documents</H2>

									{/** Upload documents */}
									<Stack gap={2} alignItems="flex-start">
										<H3 id="upload-documents-heading">{formSteps[8].label}</H3>
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
										href="/app/licences-and-permits/apply/mobile-food-vendor-permit"
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
							<PageAlert tone="error" title="No matching permit found">
								<DirectionLink direction="right" href={managePermitsPage}>
									Manage existing permits
								</DirectionLink>
							</PageAlert>
						</>
					)}
				</Stack>
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					title="Are you sure you want to remove this application?"
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Yes, remove</Button>
							<Button variant="secondary" onClick={closeModal}>
								No
							</Button>
						</ButtonGroup>
					}
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
