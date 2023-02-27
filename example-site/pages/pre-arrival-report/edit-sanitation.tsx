import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { Select } from '@ag.ds-next/react/select';
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
			<DocumentTitle title="Sanitation | Pre-arrival report" />
			<AppLayout>
				<PreArrivalReportLayout id={preArrivalReportData.id}>
					<Stack gap={3}>
						<form onSubmit={onSubmit}>
							<FormStack>
								<Fieldset legend={<H2>Ship sanitation</H2>}>
									<FormStack>
										<Select
											label="Certificate type"
											options={[
												{ value: 'extension', label: 'Extension certificate' },
												{ value: 'b', label: 'Option B' },
												{ value: 'c', label: 'Option C' },
											]}
											value={
												preArrivalReportData.shipSanitation.certificateType
											}
											maxWidth="xl"
											required
										/>
										<Select
											label="Control details"
											options={[
												{ value: 'Mosquito vector', label: 'Mosquito vector' },
												{ value: 'b', label: 'Option B' },
												{ value: 'c', label: 'Option C' },
											]}
											value={preArrivalReportData.shipSanitation.controlDetails}
											maxWidth="xl"
											required
										/>
										<TextInput
											label="Port of issue"
											maxWidth="xl"
											required
											value={preArrivalReportData.shipSanitation.portOfIssue}
										/>
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
											value={preArrivalReportData.shipSanitation.portAgency}
										/>
										<TextInput
											label="Billing agency"
											required
											maxWidth="xl"
											value={preArrivalReportData.shipSanitation.billingAgency}
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
