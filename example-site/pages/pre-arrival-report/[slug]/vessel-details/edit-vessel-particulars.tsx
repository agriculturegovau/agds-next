import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/control-input';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { Frame, values } from '../../../../components/PreArrivalReportLayout';

export default function VesselDetailsVesselParticulars() {
	return (
		<>
			<DocumentTitle title="Vessel Particulars | Details | Pre-arrival report" />
			<AppLayout>
				<Frame currentPath="#vessel-particulars">
					<Stack gap={3}>
						<form>
							<FormStack>
								<Fieldset
									legend={<H2>Vessel Particulars</H2>}
									hint="Supporting information for provide details subheading. All fields are required unless marked optional."
								>
									<FormStack>
										<TextInput
											label="Vessel name"
											required
											maxWidth="xl"
											value={values.vesselParticulars.vesselName}
										/>
										<TextInput
											label="Country of registry"
											required
											maxWidth="xl"
											value={values.vesselParticulars.countryOfRegistry}
										/>
										<Flex gap={1} alignItems="flex-end">
											<TextInput
												label="IMO"
												id="businessName"
												required
												maxWidth="xl"
												value={values.vesselParticulars.imo}
											/>
											<Checkbox checked={false}>tick if none</Checkbox>
										</Flex>
										<TextInput
											label="Official registration number"
											required
											maxWidth="xl"
											value={values.vesselParticulars.registration}
										/>
										<Select
											label="Vessel type"
											options={[
												{ value: 'a', label: 'Container vessel' },
												{ value: 'b', label: 'Submarine' },
												{ value: 'c', label: 'Kayak' },
											]}
											value={values.vesselParticulars.vesselType}
											maxWidth="xl"
										/>
										<TextInput
											label="Overall length"
											required
											maxWidth="xl"
											value={values.vesselParticulars.overallLength}
										/>
									</FormStack>
								</Fieldset>
								<ButtonGroup>
									<Button>Submit</Button>
									<Button variant="secondary" onClick={() => undefined}>
										Discard
									</Button>
								</ButtonGroup>
							</FormStack>
						</form>
					</Stack>
				</Frame>
			</AppLayout>
		</>
	);
}
