import { FormEvent } from 'react';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { Checkbox } from '@ag.ds-next/react/control-input';
import { Select } from '@ag.ds-next/react/select';
import { PreArrivalReportLayout } from './PreArrivalReportLayout';
import { PreArrivalReportDataType } from './data';

export const EditVesselDetailsPage = ({
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
							legend={<H2>Vessel Particulars</H2>}
							hint="Supporting information for provide details subheading. All fields are required unless marked optional."
						>
							<FormStack>
								<TextInput
									label="Vessel name"
									id="vesselName"
									required
									maxWidth="xl"
									value={data.vesselDetails.vesselName}
								/>
								<TextInput
									label="Country of registry"
									id="countryOfRegistry"
									required
									maxWidth="xl"
									value={data.vesselDetails.countryOfRegistry}
								/>
								<Flex gap={1} alignItems="flex-end">
									<TextInput
										label="IMO"
										id="imo"
										required
										maxWidth="xl"
										value={data.vesselDetails.imo}
									/>
									<Checkbox checked={false}>tick if none</Checkbox>
								</Flex>
								<TextInput
									label="Official registration number"
									id="registration"
									required
									maxWidth="xl"
									value={data.vesselDetails.registration}
								/>
								<Select
									label="Vessel type"
									id="vesselType"
									options={[
										{ value: 'a', label: 'Container vessel' },
										{ value: 'b', label: 'Submarine' },
										{ value: 'c', label: 'Kayak' },
									]}
									value={data.vesselDetails.vesselType}
									maxWidth="xl"
								/>
								<TextInput
									label="Overall length"
									id="overallLength"
									required
									maxWidth="xl"
									value={data.vesselDetails.overallLength}
								/>
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
