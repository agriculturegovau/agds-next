---
title: Select
description: Select provides a means to select a single item from a collapsible list. Use of select helps to reduce input errors and screen space. It's commonly used to help users enter a value into a form field.
group: Forms
---

### Default

Select boxes (drop-down lists) allow users to select a value from a list. By default, the `Select` component does not expand to fill the available space.

```jsx live
<Select label="Name" options={['Option A', 'Option B', 'Option C']} />
```

<!-- ### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
<TextInput label="Name" block />
``` -->

### Required

The `Select` component will always append `(optional)` or `(required)` to the label based on the `required` prop.

```jsx live
<Stack gap={1}>
	<Select label="Default" options={['Option A', 'Option B', 'Option C']} />
	<Select
		label="Required"
		required
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select
		label="Optional"
		required={false}
		options={['Option A', 'Option B', 'Option C']}
	/>
</Stack>
```

### Valid and invalid selects

Use the `invalid` and `valid` props to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<Select
		label="Invalid"
		invalid
		message="This input is invalid"
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select label="Valid" valid options={['Option A', 'Option B', 'Option C']} />
</Stack>
```

### Disabled

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.

```jsx live
<Select label="Name" disabled options={['Option A', 'Option B', 'Option C']} />
```

### Different width sizes for inputs

The width of a text input field should indicate the amount of information expected to be entered into the field. The size of the field acts as a visual constraint for the end user. As an example, input fields for postcodes should have a smaller width than fields for emails.

```jsx live
<Stack gap={1}>
	<Select
		label="xs input"
		maxWidth="xs"
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select
		label="sm input"
		maxWidth="sm"
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select
		label="md input"
		maxWidth="md"
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select
		label="lg input"
		maxWidth="lg"
		options={['Option A', 'Option B', 'Option C']}
	/>
	<Select
		label="xl input"
		maxWidth="xl"
		options={['Option A', 'Option B', 'Option C']}
	/>
</Stack>
```
