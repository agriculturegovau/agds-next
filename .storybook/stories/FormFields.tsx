import { Autocomplete } from '@ag.ds-next/react/src/autocomplete/Autocomplete';
import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Combobox } from '@ag.ds-next/react/src/combobox';
import { ControlGroup, Checkbox, Radio } from '@ag.ds-next/react/control-input';
import { DatePicker, DateRangePicker } from '@ag.ds-next/react/date-picker';
import { FileInput } from '@ag.ds-next/react/file-input';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Select } from '@ag.ds-next/react/select';
import { Textarea } from '@ag.ds-next/react/textarea';
import { TextInput } from '@ag.ds-next/react/text-input';

export default {
	title: 'Forms/All',
};

const AllFormFields = ({
	background,
	disabled,
	invalid,
}: {
	background: 'body' | 'bodyAlt';
	disabled?: boolean;
	invalid?: boolean;
}) => {
	const commonProps = {
		disabled,
		invalid,
		message: invalid ? 'Error message' : undefined,
	};
	return (
		<Box padding={1} background={background}>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 8 }}>
					<form onSubmit={(e) => e.preventDefault}>
						<FormStack>
							<TextInput label="Name" value="John Smith" {...commonProps} />

							<Textarea
								label="Message"
								value="Lorem ipsum dolar"
								{...commonProps}
							/>

							<Select
								label="Example"
								placeholder="Please select"
								value="b"
								options={[
									{ value: 'a', label: 'Option A' },
									{ value: 'b', label: 'Option B' },
									{ value: 'c', label: 'Option C' },
								]}
								{...commonProps}
							/>

							<ControlGroup label="Control group" {...commonProps} block>
								<Radio checked={false} {...commonProps}>
									Option A
								</Radio>
								<Radio checked={true} {...commonProps}>
									Option B
								</Radio>
								<Radio checked={false} {...commonProps}>
									Option C
								</Radio>
							</ControlGroup>

							<SearchInput label="Search" value="A term" {...commonProps} />

							<DatePicker
								label="Birth date"
								value={new Date()}
								onChange={() => {}}
								{...commonProps}
							/>

							<DateRangePicker
								legend="Date range"
								value={{ from: undefined, to: undefined }}
								onChange={() => {}}
								disabled={commonProps.disabled}
								fromInvalid={commonProps.invalid}
								toInvalid={commonProps.invalid}
								message={commonProps.message}
							/>

							<FileInput label="Drivers licence" {...commonProps} />

							<FileUpload
								label="Drivers licence"
								onChange={() => {}}
								value={[]}
								{...commonProps}
							/>

							<ControlGroup label="Control group" {...commonProps} block>
								<Checkbox checked={false} {...commonProps}>
									Option A
								</Checkbox>
								<Checkbox checked={true} {...commonProps}>
									Option B
								</Checkbox>
								<Checkbox checked={false} {...commonProps}>
									Option C
								</Checkbox>
							</ControlGroup>

							<Autocomplete
								label="Find your state"
								hint="Start typing to see results"
								value={{ label: 'Tasmania', value: 'tas' }}
								loadOptions={async function loadOptions() {
									return [
										{ label: 'Australian Capital Territory', value: 'act' },
										{ label: 'New South Wales', value: 'nsw' },
										{ label: 'Northern Territory', value: 'nt' },
										{ label: 'Queensland', value: 'qld' },
										{ label: 'South Australia', value: 'sa' },
										{ label: 'Tasmania', value: 'tas' },
										{ label: 'Victoria', value: 'vic' },
										{ label: 'Western Australia', value: 'wa' },
									];
								}}
								{...commonProps}
							/>

							<Combobox
								label="Select state"
								hint="Start typing to see results"
								options={[
									{ label: 'Australian Capital Territory', value: 'act' },
									{ label: 'New South Wales', value: 'nsw' },
									{ label: 'Northern Territory', value: 'nt' },
									{ label: 'Queensland', value: 'qld' },
									{ label: 'South Australia', value: 'sa' },
									{ label: 'Tasmania', value: 'tas' },
									{ label: 'Victoria', value: 'vic' },
									{ label: 'Western Australia', value: 'wa' },
								]}
								value={{ label: 'Tasmania', value: 'tas' }}
								{...commonProps}
							/>

							<ButtonGroup>
								<Button size="md" disabled={disabled}>
									Submit
								</Button>
								<Button size="md" variant="secondary" disabled={disabled}>
									Cancel
								</Button>
							</ButtonGroup>
						</FormStack>
					</form>
				</Column>
			</Columns>
		</Box>
	);
};

export const BodyBackground = () => {
	return <AllFormFields background="body" />;
};

export const BodyAltBackground = () => {
	return <AllFormFields background="bodyAlt" />;
};

export const InvalidFields = () => {
	return <AllFormFields background="body" invalid={true} />;
};

export const DisabledFields = () => {
	return <AllFormFields background="body" disabled={true} />;
};
