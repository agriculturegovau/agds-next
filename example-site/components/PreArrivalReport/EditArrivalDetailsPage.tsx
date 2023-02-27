import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { PreArrivalReportLayout } from './PreArrivalReportLayout';
import { PreArrivalReportDataType } from './data';

export const EditArrivalDetailsPage = ({
	data,
	loading,
	onSubmit,
}: {
	data: PreArrivalReportDataType;
	loading: boolean;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<PreArrivalReportLayout id={data.id}>
			<Stack gap={3}>
				<form onSubmit={onSubmit}>
					<FormStack>
						<Fieldset
							legend={<H2>Arrival details</H2>}
							hint="Supporting information for provide details subheading. All fields are required unless marked optional."
						>
							<FormStack>
								<TextInput
									label="Voyage ID"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={data.arrivalDetails.voyage}
								/>
								<TextInput
									label="Last port of call"
									maxWidth="xl"
									value={data.arrivalDetails.lastPortOfCall}
								/>
								<TextInput
									label="Date departed last port"
									type="date"
									maxWidth="xl"
									value={data.arrivalDetails.dateDepartedLastPort}
								/>
								<TextInput
									label="First port of call"
									maxWidth="xl"
									value={data.arrivalDetails.firstPortOfCall}
								/>
								<TextInput
									label="Estimated arrival date"
									type="date"
									maxWidth="xl"
									value={data.arrivalDetails.estimatedArrivalDate}
								/>
								<TextInput
									label="Estimated departure date"
									type="date"
									maxWidth="xl"
									value={data.arrivalDetails.estimatedDepartureDate}
								/>
								<TextInput
									label="Berth name"
									maxWidth="xl"
									value={data.arrivalDetails.berthName}
								/>
							</FormStack>
						</Fieldset>
						<ButtonGroup>
							<Button type="submit" loading={loading}>
								Submit
							</Button>
							<Button variant="secondary" onClick={() => undefined}>
								Discard
							</Button>
						</ButtonGroup>
					</FormStack>
				</form>
			</Stack>
		</PreArrivalReportLayout>
	);
};
