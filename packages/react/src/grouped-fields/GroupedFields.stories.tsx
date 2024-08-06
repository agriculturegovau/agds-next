import { StoryObj, Meta } from '@storybook/react';
import { Autocomplete } from '../autocomplete';
import { Combobox, ComboboxMulti } from '../combobox';
import { DatePicker } from '../date-picker';
import { FormStack } from '../form-stack';
import { PasswordInput } from '../password-input';
import { SearchInput } from '../search-input';
import { Select } from '../select';
import { Textarea } from '../textarea';
import { TextInput } from '../text-input';
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
				hideOptionalLabel
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
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
				hideOptionalLabel
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
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
				hideOptionalLabel
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
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
				hideOptionalLabel
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
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
				hideOptionalLabel
				legend="All fields which can render in a group, invalid"
				message="Enter a valid value"
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
