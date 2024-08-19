import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { useScrollToField } from '@ag.ds-next/react/field';
import { H2 } from '@ag.ds-next/react/heading';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { globalFormTasks } from '../globalFormTasks';
import { FormTask1Review } from '../task1/FormTask1Review';
import { FormTask2Review } from '../task2/FormTask2Review';
import { FormTask3Review } from '../task3/FormTask3Review';
import { FormTask4Container } from './FormTask4Container';
import {
	Task4Step1FormSchema,
	task4Step1FormSchema,
} from './FormTask4FormState';
import { useFormTask4Context } from './FormTask4Provider';

export function ValidationSectionAlert() {
	return (
		<SectionAlert
			title="Errors detected. Please edit your answers to this section."
			tone="error"
		/>
	);
}

export function FormTask4Step1() {
	const { submitStep } = useFormTask4Context();
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task4Step1FormSchema>({
		defaultValues: formState.task4?.step1,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(task4Step1FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});
	const scrollToField = useScrollToField();

	const onSubmit: SubmitHandler<Task4Step1FormSchema> = async (data) => {
		!isSavingBeforeExiting && (await submitStep());
		setFormState({
			...formState,
			task4: {
				...formState.task4,
				step1: {
					declarations: data.declarations,
					completed: !isSavingBeforeExiting,
					started: true,
				},
				completed: !isSavingBeforeExiting,
				started: true,
			},
		});
	};

	return (
		<FormTask4Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			{/** Provide business details */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[0].label}</H2>
				<FormTask1Review headingsLevel="h3" />
			</Stack>
			{/** Provide employee details */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[1].label}</H2>
				<FormTask2Review headingsLevel="h3" />
			</Stack>
			{/** Upload documents */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[2].label}</H2>
				<FormTask3Review />
			</Stack>
			<Stack gap={3} as="form" onSubmit={handleSubmit(onSubmit)}>
				<Stack gap={1.5}>
					<H2>Declaration</H2>
					{errors.declarations && (
						<SectionAlert tone="error" title="Declarations are required">
							<UnorderedList>
								{Object.entries(errors.declarations || {}).map(
									([key, value]) => (
										<ListItem key={key}>
											<TextLink href={`#${key}`} onClick={scrollToField}>
												{value.message}
											</TextLink>
										</ListItem>
									)
								)}
							</UnorderedList>
						</SectionAlert>
					)}
					<Text as="p">
						You must agree to the{' '}
						<TextLinkExternal href="#">Terms of Use</TextLinkExternal>, the{' '}
						<TextLinkExternal href="#">Privacy Policy</TextLinkExternal> and the{' '}
						<TextLinkExternal href="#">Privacy Notice</TextLinkExternal> to
						continue.
					</Text>
					<ControlGroup label="Example" block required>
						<Checkbox
							id="agreeToTerms"
							value="agreeToTerms"
							invalid={Boolean(errors.declarations?.agreeToTerms)}
							{...register('declarations.agreeToTerms')}
						>
							I have read, understood and agree to be bound bu the Terms of Use,
							The Privacy Policy and the Privacy notice.
						</Checkbox>
						<Checkbox
							id="isTrueInformation"
							value="isTrueInformation"
							invalid={Boolean(errors.declarations?.isTrueInformation)}
							{...register('declarations.isTrueInformation')}
						>
							I understand and agree that any information I provide to the
							Export Service may be used in relation to other Services in order
							to improve the Export Service experience.
						</Checkbox>
						<Checkbox
							id="allowUseOfPersonalData"
							value="allowUseOfPersonalData"
							invalid={Boolean(errors.declarations?.allowUseOfPersonalData)}
							{...register('declarations.allowUseOfPersonalData')}
						>
							I understand and consent to the Department using the personal
							information, sensitive information, and/or relevant information
							(within the meaning of the Export Control Act 2020 (Cth) and the
							Privacy Act 1988 (Cth)) I provide for the purposes of facilitating
							my access to, and ability to perform export activities in, the
							Export Service.
						</Checkbox>
					</ControlGroup>
				</Stack>
				<StepActions submitText="Submit application" />
			</Stack>
		</FormTask4Container>
	);
}
