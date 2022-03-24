---
title: Date Picker
description: TODO
group: Forms
---

## Date Picker

```jsx live
() => {
	const [value, setValue] = React.useState();
	return <DatePicker label="Select date" value={value} onChange={setValue} />;
};
```

### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
() => {
	const [value, setValue] = React.useState();
	return (
		<DatePicker label="Select date" value={value} onChange={setValue} block />
	);
};
```

### Required

The `TextInput` component will always append `(optional)` or `(required)` to the label based on the `required` prop.

```jsx live
() => {
	const [value, setValue] = React.useState();
	return (
		<Stack gap={1}>
			<DatePicker label="Default" value={value} onChange={setValue} />
			<DatePicker label="Required" value={value} onChange={setValue} required />
			<DatePicker
				label="Optional"
				value={value}
				onChange={setValue}
				required={false}
			/>
		</Stack>
	);
};
```

### Valid and invalid inputs

Use the `invalid` and `valid` props to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
() => {
	const [value, setValue] = React.useState();
	return (
		<Stack gap={1}>
			<DatePicker
				label="Invalid"
				invalid
				message="This input is invalid"
				value={value}
				onChange={setValue}
			/>
			<DatePicker label="Valid" valid value={value} onChange={setValue} />
		</Stack>
	);
};
```

### Disabled

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.

```jsx live
() => {
	const [value, setValue] = React.useState();
	return (
		<DatePicker
			label="Select date"
			value={value}
			onChange={setValue}
			disabled
		/>
	);
};
```

### Maximum widths

The width of a text input field should indicate the amount of information expected to be entered into the field. The size of the text input acts as a visual constraint for the end user.

As an example, input fields for postcodes should have a smaller width than fields for emails.

```jsx live
<Stack gap={1}>
	<DatePicker label="xs input" maxWidth="xs" />
	<DatePicker label="sm input" maxWidth="sm" />
	<DatePicker label="md input" maxWidth="md" />
	<DatePicker label="lg input" maxWidth="lg" />
	<DatePicker label="xl input" maxWidth="xl" />
</Stack>
```

## Date Range Picker

```jsx live
() => {
	const [value, setValue] = React.useState({
		from: undefined,
		to: undefined,
	});
	return (
		<DateRangePicker label="Select date" value={value} onChange={setValue} />
	);
};
```
