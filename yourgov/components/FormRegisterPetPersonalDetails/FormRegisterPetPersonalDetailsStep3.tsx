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
	useFormRegisterPetPersonalDetails,
} from './FormRegisterPetPersonalDetails';
import { FormRegisterPetPersonalDetailsContainer } from './FormRegisterPetPersonalDetailsContainer';
import { FormRegisterPetPersonalDetailsActions } from './FormRegisterPetPersonalDetailsActions';

export const FormRegisterPetPersonalDetailsStep3 = () => {
	const { formState, goToStep, next } = useFormRegisterPetPersonalDetails();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		next();
	};

	return (
		<FormRegisterPetPersonalDetailsContainer
			title="Confirm and submit"
			introduction="Check and confirm all details on this page."
		>
			{/** Summary: Step 0 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[0].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="First name"
						value={formState[0]?.firstName}
					/>
					<FormDefinitionListItem
						label="Last name"
						value={formState[0]?.lastName}
					/>
					<FormDefinitionListItem label="Email" value={formState[0]?.email} />
					<FormDefinitionListItemDate
						label="Date of birth"
						value={formState[0]?.dob}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change personal details
				</Button>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[1].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Street address"
						value={formState[1]?.streetAddress}
					/>
					<FormDefinitionListItem
						label="Suburb, town or city"
						value={formState[1]?.suburbTownCity}
					/>
					<FormDefinitionListItem label="State" value={formState[1]?.state} />
					<FormDefinitionListItem
						label="Post code"
						value={formState[1]?.postcode}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change address details
				</Button>
			</Stack>
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[2].label}</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Preferred contact method"
						value={formState[2]?.contactMethod}
					/>
					{formState[2]?.mobileNumber && (
						<FormDefinitionListItem
							label="Mobile number"
							value={formState[2].mobileNumber}
						/>
					)}
				</FormDefinitionList>

				<Button variant="text" onClick={() => goToStep(2)}>
					Change contact method
				</Button>
			</Stack>
			<form onSubmit={onSubmit}>
				<FormRegisterPetPersonalDetailsActions />
			</form>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
