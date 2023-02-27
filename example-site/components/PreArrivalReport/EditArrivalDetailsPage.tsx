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
							legend={<H2>Additional vessel information</H2>}
							hint="Supporting information for provide details subheading. All fields are required unless marked optional."
						>
							<FormStack>
								<TextInput
									label="Year built"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={data.vesselDetails.yearBuilt}
								/>
								<TextInput
									label="Gross tonnage"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={data.vesselDetails.grossTonnage}
								/>
								<TextInput
									label="Net tonnage"
									inputMode="numeric"
									pattern="[0-9]*"
									maxWidth="xl"
									value={data.vesselDetails.netTonnage}
								/>
								<TextInput
									label="Cargo docks"
									maxWidth="xl"
									value={data.vesselDetails.cargoDocks}
								/>
								<TextInput
									label="Cargo holds"
									maxWidth="xl"
									value={data.vesselDetails.cargoHolds}
								/>
								<TextInput
									label="Cargo tanks"
									maxWidth="xl"
									value={data.vesselDetails.cargoTanks}
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
