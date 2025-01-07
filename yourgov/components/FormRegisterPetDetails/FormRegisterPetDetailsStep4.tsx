import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemDate,
} from '../FormDefinitionList';
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
			introduction="Check and confirm all details on this page."
			title="Confirm and submit"
		>
			{/** Summary: Step 0 */}
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[0].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Type of pet"
						value={formState[0]?.typeOfPet}
					/>
				</FormDefinitionList>
				<Button onClick={() => goToStep(0)} variant="text">
					Change type of pet
				</Button>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[1].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem label="Pet name" value={formState[1]?.name} />
					<FormDefinitionListItem label="Breed" value={formState[1]?.breed} />
					<FormDefinitionListItemDate
						label="Date of birth"
						value={formState[1]?.dob}
					/>
					<FormDefinitionListItem label="Sex" value={formState[1]?.sex} />
				</FormDefinitionList>
				<Button onClick={() => goToStep(1)} variant="text">
					Change pet details
				</Button>
			</Stack>
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[2].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Vaccination certificate"
						value={
							formState[2]?.vaccinationCertificate?.[0].name ?? 'Not supplied'
						}
					/>
				</FormDefinitionList>
				<Button onClick={() => goToStep(2)} variant="text">
					Change proof of vaccination
				</Button>
			</Stack>
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[3].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItemDate
						label="Registration start date"
						value={formState[3]?.date}
					/>
				</FormDefinitionList>
				<Button onClick={() => goToStep(3)} variant="text">
					Change registration start date
				</Button>
			</Stack>
			<form onSubmit={onSubmit}>
				<FormRegisterPetDetailsActions />
			</form>
		</FormRegisterPetDetailsContainer>
	);
};
