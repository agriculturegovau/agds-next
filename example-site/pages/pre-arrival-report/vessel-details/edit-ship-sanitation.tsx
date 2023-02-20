import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { Frame, values } from '../../../components/PreArrival';

export default function VesselDetailsVesselParticulars() {
	return (
		<>
			<DocumentTitle title="Vessel Particulars | Details | Pre-arrival report" />
			<AppLayout>
				<Frame currentPath="#ship-sanitation">
					<Stack gap={3}>
						<form>
							<FormStack>
								<Fieldset legend={<H2>Ship sanitation</H2>}>
									<FormStack>
										<ControlGroup
											label="Will the vessel require a new Sanitiation Certificate at this port?"
											required
										>
											<Radio checked={true}>Yes</Radio>
											<Radio checked={false}>No</Radio>
										</ControlGroup>
										<TextInput
											label="Port agency"
											required
											maxWidth="xl"
											value={values.shipSanitation.portAgency}
										/>
										<TextInput
											label="Billing agency"
											required
											maxWidth="xl"
											value={values.shipSanitation.billingAgency}
										/>
									</FormStack>
								</Fieldset>
								<ButtonGroup>
									<Button>Submit</Button>
									<Button variant="secondary" onClick={() => {}}>
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
