import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Button } from '@ag.ds-next/button';
import { FormDefinitionList } from '../FormDefinitionList';
import {
	FORM_STEPS,
	useFormRegisterPetPersonalDetails,
} from './FormRegisterPetPersonalDetails';
import { FormRegisterPetPersonalDetailsContainer } from './FormRegisterPetPersonalDetailsContainer';
import { FormRegisterPetPersonalDetailsActions } from './FormRegisterPetPersonalDetailsActions';

export const FormRegisterPetPersonalDetailsStep3 = () => {
	const { formState, goToStep, completeForm } =
		useFormRegisterPetPersonalDetails();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		completeForm();
	};

	return (
		<FormRegisterPetPersonalDetailsContainer
			title="Confirm and submit"
			introduction="Check and confirm all details on this page."
		>
			{/** Summary: Step 0 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[0].label}</H2>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change
				</Button>
				<FormDefinitionList
					items={[
						{
							label: 'First name',
							value: formState[0]?.firstName,
						},
						{
							label: 'Last name',
							value: formState[0]?.lastName,
						},
						{
							label: 'Email',
							value: formState[0]?.email,
						},
						{
							label: 'Date of birth',
							value: formState[0]?.dob.toLocaleDateString(),
						},
					]}
				/>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[1].label}</H2>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change
				</Button>
				<FormDefinitionList
					items={[
						{
							label: 'Street address',
							value: formState[1]?.streetAddress,
						},
						{
							label: 'Suburb, town or city',
							value: formState[1]?.suburbTownCity,
						},
						{
							label: 'State',
							value: formState[1]?.state,
						},
						{
							label: 'Post code',
							value: formState[1]?.postcode,
						},
					]}
				/>
			</Stack>
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[2].label}</H2>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change
				</Button>
				<FormDefinitionList
					items={[
						{
							label: 'Preferred contact method',
							value: formState[2]?.contactMethod,
						},
					]}
				/>
			</Stack>
			<form onSubmit={onSubmit}>
				<FormRegisterPetPersonalDetailsActions />
			</form>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
