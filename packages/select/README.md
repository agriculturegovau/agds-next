---
title: Select
description: Select provides a means to select a single item from a collapsible list. Use of select helps to reduce input errors and screen space. It's commonly used to help users enter a value into a form field.
group: Forms
---

### Default

Select boxes (drop-down lists) allow users to select a value from a list.

By default, the `Select` component does not expand to fill the available space.

```jsx live
<Select
	label="What option?"
	placeholder="Please select"
	options={[
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B' },
		{ value: 'c', label: 'Option C' },
	]}
/>
```

### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
<Select
	label="What option?"
	placeholder="Please select"
	options={[
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B' },
		{ value: 'c', label: 'Option C' },
	]}
	block
/>
```

### Required

The `Select` component will always append `(optional)` to the label based on the `required` prop.

```jsx live
<Stack gap={1}>
	<Select
		label="Default"
		placeholder="Please select"
		options={[
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		]}
	/>
	<Select
		label="Required"
		placeholder="Please select"
		required
		options={[
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		]}
	/>
	<Select
		label="Optional"
		placeholder="Please select"
		required={false}
		options={[
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		]}
	/>
</Stack>
```

### Valid and invalid selects

Use the `invalid` and `valid` props to indicate whether user select is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<Select
		label="Invalid"
		placeholder="Please select"
		invalid
		message="This select is invalid"
		options={[
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		]}
	/>
	<Select
		label="Valid"
		placeholder="Please select"
		valid
		options={[
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		]}
	/>
</Stack>
```

### Disabled

Disabled select elements are unusable and can not be clicked. This prevents a user from interacting with the select element until another action is complete. Disabled select elements in a form will not be submitted.

```jsx live
<Select
	label="What option?"
	placeholder="Please select"
	disabled
	options={[
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B' },
		{ value: 'c', label: 'Option C' },
	]}
/>
```

### Groups

```jsx live
<Select
	label="What option?"
	placeholder="Please select"
	options={[
		{
			label: 'Group A',
			options: [
				{ value: 'a', label: 'Option A' },
				{ value: 'b', label: 'Option B' },
				{ value: 'c', label: 'Option C' },
			],
		},
		{
			label: 'Group B',
			options: [
				{ value: 'd', label: 'Option D' },
				{ value: 'e', label: 'Option E' },
				{ value: 'f', label: 'Option F' },
			],
		},
	]}
/>
```
