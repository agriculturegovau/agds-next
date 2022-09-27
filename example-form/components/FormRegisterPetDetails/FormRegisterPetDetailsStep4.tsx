import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Button } from '@ag.ds-next/button';
import { FormDefinitionList } from '../FormDefinitionList';
import { FORM_STEPS, useFormExampleMultiStep } from './FormRegisterPetDetails';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';

export const FormRegisterPetDetailsStep4 = () => {
	const { formState, goToStep, next } = useFormExampleMultiStep();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		next();
	};

	return (
		<FormRegisterPetDetailsContainer
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
							label: 'Type of pet',
							value: formState[0]?.typeOfPet,
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
							label: 'Pet name',
							value: formState[1]?.name,
						},
						{
							label: 'Breed',
							value: formState[1]?.breed,
						},
						{
							label: 'Date of birth',
							value: formState[1]?.dob.toLocaleDateString(),
						},
						{
							label: 'Sex',
							value: formState[1]?.sex,
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
							label: 'Vaccination certificate',
							value: formState[2]?.vaccinationCertificate ? 'Yes' : 'No',
						},
					]}
				/>
			</Stack>
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[3].label}</H2>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change
				</Button>
				<FormDefinitionList
					items={[
						{
							label: 'Registration start date',
							value: formState[3]?.date.toLocaleDateString(),
						},
					]}
				/>
			</Stack>
			<form onSubmit={onSubmit}>
				<FormRegisterPetDetailsActions />
			</form>
		</FormRegisterPetDetailsContainer>
	);
};
