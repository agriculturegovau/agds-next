import { Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { Frame, values } from '../../../components/PreArrival';

export default function VesselDetailsVesselParticulars() {
	return (
		<>
			<DocumentTitle title="Vessel Particulars | Details | Pre-arrival report" />
			<AppLayout>
				<Frame currentPath="#certificate-details">
					<Stack gap={3}>
						<form>
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
											maxWidth="xl"
											required
										/>
										<TextInput label="Port of issue" maxWidth="xl" required />
										<DatePicker
											label="Date of issue"
											value={new Date()}
											onChange={() => {}}
											maxWidth="xl"
										/>
									</FormStack>
									<FileUpload
										label="Current Sanitation Certificate"
										accept={['application/pdf']}
										onChange={() => {}}
										value={[]}
									/>
								</FormStack>
							</Fieldset>
						</form>
					</Stack>
				</Frame>
			</AppLayout>
		</>
	);
}
