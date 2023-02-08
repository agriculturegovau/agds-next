import { FormEvent } from 'react';
import format from 'date-fns/format';
import { Stack } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import { FormDefinitionList } from '../FormDefinitionList';
import {
	FORM_STEPS,
	useFormRegisterPetDetails,
} from './FormRegisterPetDetails';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';

export const FormRegisterPetDetailsStep4 = () => {
	const { formState, goToStep, next } = useFormRegisterPetDetails();

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
				<FormDefinitionList
					items={[
						{
							label: 'Type of pet',
							value: formState[0]?.typeOfPet,
						},
					]}
				/>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change type of pet
				</Button>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[1].label}</H2>
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
							value: formState[1]?.dob
								? format(formState[1].dob, 'dd/MM/yyyy')
								: undefined,
						},
						{
							label: 'Sex',
							value: formState[1]?.sex,
						},
					]}
				/>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change pet details
				</Button>
			</Stack>
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[2].label}</H2>
				<FormDefinitionList
					items={[
						{
							label: 'Vaccination certificate',
							value:
								formState[2]?.vaccinationCertificate?.[0].name ??
								'Not supplied',
						},
					]}
				/>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change proof of vaccination
				</Button>
			</Stack>
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[3].label}</H2>
				<FormDefinitionList
					items={[
						{
							label: 'Registration start date',
							value: formState[3]?.date
								? format(formState[3].date, 'dd/MM/yyyy')
								: undefined,
						},
					]}
				/>
				<Button variant="text" onClick={() => goToStep(3)}>
					Change registration start date
				</Button>
			</Stack>
			<form onSubmit={onSubmit}>
				<FormRegisterPetDetailsActions />
			</form>
		</FormRegisterPetDetailsContainer>
	);
};
