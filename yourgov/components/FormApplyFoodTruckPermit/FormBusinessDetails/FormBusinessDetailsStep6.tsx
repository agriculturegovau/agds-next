import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import {
	FormDefinitionList,
	FormDefinitionListItem,
	FormDefinitionListItemAddress,
	FormDefinitionListItemDate,
	FormDefinitionListItemDateRange,
} from '../../FormDefinitionList';
import { FormApplyFoodTruckActions } from '../FormApplyFoodTruckActions';
import { useFormBusinessDetails } from './FormBusinessDetails';
import { FormBusinessDetailsContainer } from './FormBusinessDetailsContainer';

export const FormBusinessDetailsStep6 = () => {
	const { formState, goToStep, next } = useFormBusinessDetails();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		next();
	};

	return (
		<FormBusinessDetailsContainer
			title="Confirm and submit"
			introduction="Check and confirm all details on this page."
		>
			{/** Owner details */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Owner details</H2>
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
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change owner details
				</Button>
			</Stack>

			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Business details</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Business or company name"
						value={formState[1]?.businessName}
					/>
					<FormDefinitionListItem
						label="Trading name"
						value={formState[1]?.tradingName}
					/>
					<FormDefinitionListItem
						label="Business structure"
						value={formState[1]?.businessStructure}
					/>
					{formState[1]?.businessStructure === 'Business' && (
						<FormDefinitionListItem
							label="Australian Business Number (ABN)"
							value={formState[1]?.abn}
						/>
					)}
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change business details
				</Button>
			</Stack>

			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Business address</H2>
				<FormDefinitionList>
					<FormDefinitionListItemAddress
						label="Street address"
						address={formState[2]?.streetAddress}
						suburb={formState[2]?.suburbTownCity}
						state={formState[2]?.state}
						postcode={formState[2]?.postcode}
					/>
					{formState[2]?.isPostalAddressSameAsStreetAddress ? (
						<FormDefinitionListItem
							label="Postal address"
							value="Same as street address"
						/>
					) : (
						<FormDefinitionListItemAddress
							label="Postal address"
							address={formState[2]?.postalAddress}
							suburb={formState[2]?.postalSuburbTownCity}
							state={formState[2]?.postalState}
							postcode={formState[2]?.postalPostcode}
						/>
					)}
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change business details
				</Button>
			</Stack>

			{/** Vehicle registration */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Vehicle registration</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Vehicle registration number"
						value={formState[3]?.registrationNumber}
					/>
					<FormDefinitionListItemDate
						label="Vehicle registration expiry"
						value={formState[3]?.registrationExpiry}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(3)}>
					Change vehicle registration
				</Button>
			</Stack>

			{/** Trading time */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Trading time</H2>
				<FormDefinitionList>
					<FormDefinitionListItemDateRange
						label="Period active"
						from={formState[4]?.tradingPeriod?.from}
						to={formState[4]?.tradingPeriod?.to}
					/>
					<FormDefinitionListItem
						label="Opening time"
						value={formState[4]?.openingTime}
					/>
					<FormDefinitionListItem
						label="Closing time"
						value={formState[4]?.closingTime}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(4)}>
					Change trading time
				</Button>
			</Stack>

			{/** Food served */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Food served</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Cuisine"
						value={formState[5]?.cuisine?.label}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(5)}>
					Change food served
				</Button>
			</Stack>

			<form onSubmit={onSubmit}>
				<FormApplyFoodTruckActions />
			</form>
		</FormBusinessDetailsContainer>
	);
};
