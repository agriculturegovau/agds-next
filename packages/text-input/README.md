---
title: Text Input
description: Text inputs are input fields typically used in forms that allow the user to enter text data in a structured format.
group: Forms
---

### Default

The default text inputs do not have a width applied to them.

```jsx live
<Field label="Name">
	<TextInput />
</Field>
```

### Block

Use the `block` property to make them fill the available space.

```jsx live
<Field label="Name">
	<TextInput block />
</Field>
```

### Valid and invalid inputs

Add a border to text inputs and text areas to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<Field label="Invalid" invalid>
		<TextInput />
	</Field>
	<Field label="Valid" valid>
		<TextInput />
	</Field>
</Stack>
```

### Disabled

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.

```jsx live
<Field label="Name">
	<TextInput disabled />
</Field>
```

### Different width sizes for inputs

The width of a text input field should indicate the amount of information expected to be entered into the field. The size of the field acts as a visual constraint for the end user. As an example, input fields for postcodes should have a smaller width than fields for emails.

```jsx live
<Stack gap={1}>
	<Field label="xs input">
		<TextInput maxWidth="xs" />
	</Field>
	<Field label="sm input">
		<TextInput maxWidth="sm" />
	</Field>
	<Field label="md input">
		<TextInput maxWidth="md" />
	</Field>
	<Field label="lg input">
		<TextInput maxWidth="lg" />
	</Field>
	<Field label="xl input">
		<TextInput maxWidth="xl" />
	</Field>
</Stack>
```
