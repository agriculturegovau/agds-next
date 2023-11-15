import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Callout } from '@ag.ds-next/react/callout';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormApplyFoodTruckActions } from '../FormApplyFoodTruckActions';
import { useFormEmployeeDetails } from './FormEmployeeDetails';
import { FormEmployeeDetailsContainer } from './FormEmployeeDetailsContainer';

export const formSchema = yup
	.object({
		foodSafetySupervisor: yup
			.array()
			.of(yup.string().required())
			.typeError('Choose at least 1 food safety supervisor.'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormEmployeeDetailsStep2 = () => {
	const { next, stepFormState } = useFormEmployeeDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	console.log({ errors });

	return (
		<FormEmployeeDetailsContainer
			title="Business details"
			introduction="Your business details must match your business registration."
			callToAction={<FormRequiredFieldsMessage />}
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
						>
							<Text as="p">
								Please correct the following fields and try again
							</Text>
							<UnorderedList>
								{Object.entries(errors).map(([key, value]) => (
									<ListItem key={key}>
										<TextLink href={`#${key}`} onClick={scrollToField}>
											{value.message}
										</TextLink>
									</ListItem>
								))}
							</UnorderedList>
						</PageAlert>
					)}
					<ControlGroup
						id="checkbox"
						label="Who is the appointed Food Safety Supervisor for this business?"
						hint="You may choose more than one"
						invalid={Boolean(errors.foodSafetySupervisor)}
						message={errors.foodSafetySupervisor?.message}
						required
						block
					>
						{foodSafetyOfficers.map((officer) => (
							<Checkbox
								key={officer}
								{...register('foodSafetySupervisor')}
								value={officer}
							>
								{officer}
							</Checkbox>
						))}
					</ControlGroup>

					<Callout
						title="Food Safety Supervisor Certificate(s) required"
						tone="info"
					>
						<Text>
							You will be required to upload a Food Safety Supervisor
							Certificate for each staff member appointed as a Food Safety
							Supervisor in the ‘Upload documents’ task of this application.
						</Text>
					</Callout>
				</FormStack>
				<FormApplyFoodTruckActions />
			</Stack>
		</FormEmployeeDetailsContainer>
	);
};

const foodSafetyOfficers = [
	'Barney Gumble (business owner)',
	'Homer Jay Simpson',
	'Marjorie Jacqueline Simpson',
	'Abraham Jebediah Simpson',
];
