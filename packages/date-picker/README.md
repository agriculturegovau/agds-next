---
title: Date Picker
description: Allow users to select a single date or a range of dates.
group: forms
---

## Date Picker

`DatePicker` is a [controlled component](https://reactjs.org/docs/forms.html#controlled-components).

### Basic

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

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete.

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

## Date Range Picker

`DateRangePicker` is a [controlled component](https://reactjs.org/docs/forms.html#controlled-components).

### Basic

```jsx live
() => {
	const [value, setValue] = React.useState({ from: undefined, to: undefined });
	return <DateRangePicker value={value} onChange={setValue} />;
};
```

### Labels

```jsx live
() => {
	const [value, setValue] = React.useState({ from: undefined, to: undefined });
	return (
		<DateRangePicker
			value={value}
			onChange={setValue}
			fromLabel="From"
			toLabel="To"
		/>
	);
};
```

### Disabled

```jsx live
() => {
	const [value, setValue] = React.useState({ from: undefined, to: undefined });
	return <DateRangePicker value={value} onChange={setValue} disabled />;
};
```
