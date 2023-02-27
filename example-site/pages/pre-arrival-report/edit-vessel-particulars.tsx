import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/control-input';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import {
	useScrollAndFocusField,
	PreArrivalReportLayout,
} from '../../components/PreArrivalReport/PreArrivalReportLayout';
import { preArrivalReportData } from '../../components/PreArrivalReport/data';

export default function Page() {
	useScrollAndFocusField();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// Fake an API call
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setTimeout(() => {
			router.push('/pre-arrival-report');
			setLoading(false);
		}, 1500);
	};

	return (
		<>
			<DocumentTitle title="Vessel Particulars | Pre-arrival report" />
			<AppLayout>
				<PreArrivalReportLayout id={preArrivalReportData.id}>
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
											value={preArrivalReportData.vesselDetails.vesselName}
										/>
										<TextInput
											label="Country of registry"
											id="countryOfRegistry"
											required
											maxWidth="xl"
											value={
												preArrivalReportData.vesselDetails.countryOfRegistry
											}
										/>
										<Flex gap={1} alignItems="flex-end">
											<TextInput
												label="IMO"
												id="imo"
												required
												maxWidth="xl"
												value={preArrivalReportData.vesselDetails.imo}
											/>
											<Checkbox checked={false}>tick if none</Checkbox>
										</Flex>
										<TextInput
											label="Official registration number"
											id="registration"
											required
											maxWidth="xl"
											value={preArrivalReportData.vesselDetails.registration}
										/>
										<Select
											label="Vessel type"
											id="vesselType"
											options={[
												{ value: 'a', label: 'Container vessel' },
												{ value: 'b', label: 'Submarine' },
												{ value: 'c', label: 'Kayak' },
											]}
											value={preArrivalReportData.vesselDetails.vesselType}
											maxWidth="xl"
										/>
										<TextInput
											label="Overall length"
											id="overallLength"
											required
											maxWidth="xl"
											value={preArrivalReportData.vesselDetails.overallLength}
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
