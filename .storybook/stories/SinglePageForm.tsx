import { Box, Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2, H3 } from '@ag.ds-next/react/heading';
import { AppShell } from '../components/ExampleShell';
import { Text } from '@ag.ds-next/react/text';
import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Prose } from '@ag.ds-next/react/prose';
import { useScrollToField } from '@ag.ds-next/react/field';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/control-input';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { Select } from '@ag.ds-next/react/select';
import { FormDivider } from '../components/FormDivider';
import { Header } from '@ag.ds-next/react/header';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Footer } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';

export default {
	title: 'Examples/Single Page Form',
};

const formSchema = yup
	.object({
		// business details
		abn: yup.string().required('Enter your ABN'),
		acn: yup.string().required('Enter your ACN'),
		businessName: yup.string().required('Enter your business name'),
		// entity details
		entityName: yup.string().required('Enter your entity name'),
		entityNumber: yup.string().required('Enter your entity number'),
		// street address
		streetAddress: yup.string().required('Enter your street address'),
		suburbTownCity: yup.string().required('Enter your suburb, town or city'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		// postal address
		isPostalAddressSameAsStreetAddress: yup.boolean(),
		postalAddress: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postal address'),
		}),
		postalSuburbTownCity: yup
			.string()
			.when('isPostalAddressSameAsStreetAddress', {
				is: false,
				then: yup.string().required('Enter your suburb, town or city'),
			}),
		postalState: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your state'),
		}),
		postalPostcode: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postcode'),
		}),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const SinglePageForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const errorPageAlertRef = useRef<HTMLDivElement>(null);
	const [hasFocusedErrorRef, setHasFocusedErrorRef] = useState(false);

	const scrollToField = useScrollToField();

	const {
		register,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setIsSubmitting(true);
		console.log(data);
		setTimeout(() => {
			setIsSubmitting(false);
		}, 2000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		setHasFocusedErrorRef(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (!(hasErrors || hasFocusedErrorRef)) return;
		errorPageAlertRef.current?.focus();
		setHasFocusedErrorRef(true);
	}, [hasFocusedErrorRef, hasErrors]);

	const isPostalAddressSameAsStreetAddress = watch(
		'isPostalAddressSameAsStreetAddress',
		false
	);

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [isPostalAddressSameAsStreetAddress, trigger, isSubmitted]);

	return (
		<AppShell>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{ href: '/', label: 'Home' },
									{ href: '/category', label: 'Category 1' },
									{
										href: '/category/subcategory',
										label: 'Subcategory page',
									},
									{ label: 'Single-page form' },
								]}
							/>

							<Stack gap={1.5}>
								<Stack>
									<H1>Single-page form (multi-question) xxl/display (H1)</H1>
								</Stack>

								<Text as="p" fontSize="md" color="muted">
									Introductory paragraph providing context for this single page
									of the multi-step form. All questions on page must be related
									- md/default (P)
								</Text>
							</Stack>
							<Text fontSize="xs" color="muted">
								All fields are required unless marked optional.
							</Text>
							<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
								<Stack gap={3}>
									{hasErrors && (
										<PageAlert
											ref={errorPageAlertRef}
											tabIndex={-1}
											tone="error"
											title="There is a problem"
										>
											<Prose>
												<p>Please correct the following fields and try again</p>
												<ul>
													{Object.entries(errors).map(([key, value]) => (
														<li key={key}>
															<a href={`#${key}`} onClick={scrollToField}>
																{value.message}
															</a>
														</li>
													))}
												</ul>
											</Prose>
										</PageAlert>
									)}
									<Fieldset
										legend={<H2>Business details (H2)</H2>}
										hint="Supporting information for provide details subheading - sm/default"
									>
										<FormStack>
											<TextInput
												label="Australian Business Number (ABN)"
												{...register('abn')}
												id="abn"
												invalid={Boolean(errors.abn?.message)}
												message={errors.abn?.message}
												required
												inputMode="numeric"
												pattern="[0-9]*"
											/>
											<TextInput
												label="Australian Company Number (ACN)"
												{...register('acn')}
												id="acn"
												invalid={Boolean(errors.acn?.message)}
												message={errors.acn?.message}
												required
												inputMode="numeric"
												pattern="[0-9]*"
											/>
											<TextInput
												label="Business name"
												{...register('businessName')}
												id="businessName"
												invalid={Boolean(errors.businessName?.message)}
												message={errors.businessName?.message}
												required
												maxWidth="xl"
											/>
										</FormStack>
									</Fieldset>
									<FormDivider />
									<Fieldset
										legend={<H2>Provide entity details (H2)</H2>}
										hint="Supporting information for provide details subheading - sm/default"
									>
										<FormStack>
											<TextInput
												label="Entity name"
												{...register('entityName')}
												id="entityName"
												invalid={Boolean(errors.entityName?.message)}
												message={errors.entityName?.message}
												required
											/>
											<TextInput
												label="Entity number"
												{...register('entityNumber')}
												id="entityNumber"
												invalid={Boolean(errors.entityNumber?.message)}
												message={errors.entityNumber?.message}
												required
												inputMode="numeric"
												pattern="[0-9]*"
											/>
										</FormStack>
									</Fieldset>
									<Fieldset legend={<H3>Street address (H3)</H3>}>
										<FormStack>
											<TextInput
												label="Street address"
												{...register('streetAddress')}
												id="streetAddress"
												invalid={Boolean(errors.streetAddress?.message)}
												message={errors.streetAddress?.message}
												required
												maxWidth="xl"
											/>
											<TextInput
												label="Suburb, town or city"
												{...register('suburbTownCity')}
												id="suburbTownCity"
												invalid={Boolean(errors.suburbTownCity?.message)}
												message={errors.suburbTownCity?.message}
												required
											/>
											<Select
												label="State or territory"
												{...register('state')}
												id="state"
												placeholder="Select"
												options={[
													{ label: 'NSW', value: 'nsw' },
													{ label: 'QLD', value: 'qld' },
													{ label: 'ACT', value: 'act' },
													{ label: 'VIC', value: 'vic' },
													{ label: 'TAS', value: 'tas' },
													{ label: 'NT', value: 'nt' },
													{ label: 'SA', value: 'sa' },
													{ label: 'WA', value: 'wa' },
												]}
												invalid={Boolean(errors.state?.message)}
												message={errors.state?.message}
												required
												maxWidth="md"
											/>
											<TextInput
												label="Postcode"
												{...register('postcode')}
												id="postcode"
												invalid={Boolean(errors.postcode?.message)}
												message={errors.postcode?.message}
												maxWidth="sm"
												inputMode="numeric"
												pattern="[0-9]*"
												required
											/>
										</FormStack>
									</Fieldset>
									<Fieldset legend={<H3>Postal address (H3)</H3>}>
										<FormStack>
											<Checkbox
												{...register('isPostalAddressSameAsStreetAddress')}
												id="isPostalAddressSameAsStreetAddress"
											>
												Same as street address
											</Checkbox>

											{!isPostalAddressSameAsStreetAddress && (
												<FormStack>
													<TextInput
														label="Postal address"
														{...register('postalAddress')}
														id="postalAddress"
														invalid={Boolean(errors.postalAddress?.message)}
														message={errors.postalAddress?.message}
														required
														maxWidth="xl"
													/>
													<TextInput
														label="Suburb, town or city"
														{...register('postalSuburbTownCity')}
														id="postalSuburbTownCity"
														invalid={Boolean(
															errors.postalSuburbTownCity?.message
														)}
														message={errors.postalSuburbTownCity?.message}
														required
													/>
													<Select
														label="State or territory"
														{...register('postalState')}
														id="postalState"
														placeholder="Select"
														options={[
															{ label: 'NSW', value: 'nsw' },
															{ label: 'QLD', value: 'qld' },
															{ label: 'ACT', value: 'act' },
															{ label: 'VIC', value: 'vic' },
															{ label: 'TAS', value: 'tas' },
															{ label: 'NT', value: 'nt' },
															{ label: 'SA', value: 'sa' },
															{ label: 'WA', value: 'wa' },
														]}
														invalid={Boolean(errors.postalState?.message)}
														message={errors.postalState?.message}
														required
														maxWidth="md"
													/>
													<TextInput
														label="Postcode"
														{...register('postalPostcode')}
														id="postalPostcode"
														invalid={Boolean(errors.postalPostcode?.message)}
														message={errors.postalPostcode?.message}
														maxWidth="sm"
														required
														inputMode="numeric"
														pattern="[0-9]*"
													/>
												</FormStack>
											)}
										</FormStack>
									</Fieldset>
									<FormDivider />
									<ButtonGroup>
										<Button type="submit" loading={isSubmitting}>
											Submit form
										</Button>
										<Button type="button" variant="secondary">
											Cancel
										</Button>
									</ButtonGroup>
								</Stack>
							</form>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</AppShell>
	);
};

export const ForPlayroonm = () => {
	return (
		<>
			<Box dark>
				<Header background="bodyAlt" logo={<Logo />} heading="Export Service" />
				<MainNav
					items={[{ label: 'Home', href: '/' }]}
					secondaryItems={[{ label: 'Sign in', endElement: <AvatarIcon /> }]}
				/>
			</Box>
			<PageContent as="main">
				<Prose>
					<h1>Page heading</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
						Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Integer scelerisque at
						ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
						consequat, libero justo lacinia tortor, id varius tortor ante sit
						amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia.
						Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce
						lacus mi, pharetra molestie tortor eu, finibus lacinia libero.
					</p>
					<p>
						Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
						convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
						sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
						libero nulla, cursus a turpis et, ullamcorper lobortis metus.
						Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut
						nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor
						ornare eros. Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi
						congue lectus eget massa finibus luctus. Pellentesque tempus dui vel
						auctor ullamcorper.
					</p>
				</Prose>
			</PageContent>
			<Box dark>
				<Footer background="bodyAlt">
					<nav aria-label="footer">
						<LinkList
							horizontal
							links={[
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Terms and conditions' },
								{ href: '#', label: 'Privacy policy' },
								{ href: '#', label: 'A really long link title' },
							]}
						/>
					</nav>
				</Footer>
			</Box>
		</>
	);
};
