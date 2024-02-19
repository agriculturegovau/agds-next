import { StoryObj, Meta } from '@storybook/react';
import { Autocomplete } from '@ag.ds-next/react/autocomplete';
import { Combobox, ComboboxMulti } from '@ag.ds-next/react/combobox';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PasswordInput } from '@ag.ds-next/react/password-input';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Select } from '@ag.ds-next/react/select';
import { Textarea } from '@ag.ds-next/react/textarea';
import { TextInput } from '@ag.ds-next/react/text-input';
import { GroupedFields } from './GroupedFields';

const meta: Meta<typeof GroupedFields> = {
	title: 'Forms/GroupedFields',
	component: GroupedFields,
};

export default meta;

type Story = StoryObj<typeof GroupedFields>;

export const Basic: Story = {
	render: () => (
		<GroupedFields legend="Grouped fields">
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const HideOptionalLabel: Story = {
	render: () => (
		<GroupedFields hideOptionalLabel legend="Grouped fields">
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const Required: Story = {
	render: () => (
		<GroupedFields legend="Grouped fields" required>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" required {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						required
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const VisuallyHideLegend: Story = {
	render: () => (
		<GroupedFields legend="Grouped fields" visuallyHideLegend>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const Hint: Story = {
	render: () => (
		<GroupedFields legend="Grouped fields" hint="Hint text">
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const Field1Invalid: Story = {
	render: () => (
		<GroupedFields
			field1Invalid
			legend="Grouped fields"
			message="Enter a valid value"
			required
		>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" required {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const Field2Invalid: Story = {
	render: () => (
		<GroupedFields
			field2Invalid
			legend="Grouped fields"
			message="Enter a valid value"
			required
		>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						required
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const BothFieldsInvalid: Story = {
	render: () => (
		<GroupedFields
			field1Invalid
			field2Invalid
			legend="Grouped fields"
			message="Enter a valid value"
			required
		>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" required {...field1Props} />
					<Select
						label="Select"
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						required
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	),
};

export const AllPossibleFieldsInvalid: Story = {
	render: () => (
		<FormStack>
			<GroupedFields
				field1Invalid
				field2Invalid
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
				required
			>
				{({ field1Props, field2Props }) => (
					<>
						<Autocomplete
							label="Autocomplete"
							loadOptions={async () => [
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							required
							{...field1Props}
						/>
						<Combobox
							label="Combobox"
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							{...field2Props}
						/>
					</>
				)}
			</GroupedFields>
			<GroupedFields
				field1Invalid
				field2Invalid
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
				required
			>
				{({ field1Props, field2Props }) => (
					<>
						<ComboboxMulti
							label="ComboboxMulti"
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							{...field1Props}
						/>
						<DatePicker
							label="Select date"
							value={new Date()}
							onChange={(value) => {
								console.log(value);
							}}
							required
							{...field2Props}
						/>
					</>
				)}
			</GroupedFields>
			<GroupedFields
				field1Invalid
				field2Invalid
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
				required
			>
				{({ field1Props, field2Props }) => (
					<>
						<PasswordInput label="PasswordInput" required {...field1Props} />
						<SearchInput label="SearchInput" required {...field2Props} />
					</>
				)}
			</GroupedFields>
			<GroupedFields
				field1Invalid
				field2Invalid
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
				required
			>
				{({ field1Props, field2Props }) => (
					<>
						<Select
							label="Select"
							placeholder="Please select"
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							required
							{...field1Props}
						/>
						<Textarea label="Textarea" required {...field2Props} />
					</>
				)}
			</GroupedFields>
			<GroupedFields
				field1Invalid
				field2Invalid
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
				required
			>
				{({ field1Props, field2Props }) => (
					<>
						<TextInput label="TextInput" required {...field1Props} />
						<TextInput label="TextInput" required {...field2Props} />
					</>
				)}
			</GroupedFields>
		</FormStack>
	),
};
