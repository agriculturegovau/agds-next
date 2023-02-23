import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import {
	PreArrivalReportLayout,
	useScrollAndFocusField,
	values,
} from '../../../components/PreArrivalReportLayout';

export default function VesselDetailsVesselParticulars() {
	useScrollAndFocusField();

	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// Fake an API call
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setTimeout(() => {
			router.push('/pre-arrival-report/vessel-details');
			setLoading(false);
		}, 1500);
	};

	return (
		<>
			<DocumentTitle title="Vessel Particulars | Details | Pre-arrival report" />
			<AppLayout>
				<PreArrivalReportLayout>
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
											value={values.additionalVesselInformation.yearBuilt}
										/>
										<TextInput
											label="Gross tonnage"
											inputMode="numeric"
											pattern="[0-9]*"
											maxWidth="xl"
											value={values.additionalVesselInformation.grossTonnage}
										/>
										<TextInput
											label="Net tonnage"
											inputMode="numeric"
											pattern="[0-9]*"
											maxWidth="xl"
											value={values.additionalVesselInformation.netTonnage}
										/>
										<TextInput
											label="Cargo docks"
											maxWidth="xl"
											value={values.additionalVesselInformation.cargoDocks}
										/>
										<TextInput
											label="Cargo holds"
											maxWidth="xl"
											value={values.additionalVesselInformation.cargoHolds}
										/>
										<TextInput
											label="Cargo tanks"
											maxWidth="xl"
											value={values.additionalVesselInformation.cargoTanks}
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
			</AppLayout>
		</>
	);
}
