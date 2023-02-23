import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import {
	useScrollAndFocusField,
	PreArrivalReportLayout,
	values,
} from '../../../components/PreArrivalReportLayout';

export default function VesselDetailsCertificateDetails() {
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
							<Fieldset legend={<H2>Certificate details</H2>}>
								<FormStack>
									<FormStack>
										<Select
											label="Certificate type"
											options={[
												{ value: 'extension', label: 'Extension certificate' },
												{ value: 'b', label: 'Option B' },
												{ value: 'c', label: 'Option C' },
											]}
											value={values.certificateDetails.certificateType}
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
											value={values.certificateDetails.controlDetails}
											maxWidth="xl"
											required
										/>
										<TextInput
											label="Port of issue"
											maxWidth="xl"
											required
											value={values.certificateDetails.portOfIssue}
										/>
									</FormStack>
									<FileUpload
										label="Current Sanitation Certificate"
										accept={['application/pdf']}
										onChange={() => undefined}
										value={[]}
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
						</form>
					</Stack>
				</PreArrivalReportLayout>
			</AppLayout>
		</>
	);
}
