---
title: Text Input
description: Text inputs are input fields typically used in forms that allow the user to enter text data in a structured format.
group: Forms
---

### Default

By default, the `TextInput` component does not expand to fill the available space.

```jsx live
<TextInput label="Name" />
```

### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
<TextInput label="Name" block />
```

### Required

The `TextInput` component will always append `(optional)` to the label based on the `required` prop.

```jsx live
<Stack gap={1}>
	<TextInput label="Default" />
	<TextInput label="Required" required />
	<TextInput label="Optional" required={false} />
</Stack>
```

### Valid and invalid inputs

Use the `invalid` and `valid` props to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<TextInput label="Invalid" invalid message="This input is invalid" />
	<TextInput label="Valid" valid />
</Stack>
```

### Disabled

Disabled input elements are unusable and can not be clicked. This prevents a user from interacting with the input element until another action is complete. Disabled input elements in a form will not be submitted.

```jsx live
<TextInput label="Name" disabled />
```

### Maximum widths

The width of a text input field should indicate the amount of information expected to be entered into the field. The size of the text input acts as a visual constraint for the end user.

As an example, input fields for postcodes should have a smaller width than fields for emails.

```jsx live
<Stack gap={1}>
	<TextInput label="xs input" maxWidth="xs" />
	<TextInput label="sm input" maxWidth="sm" />
	<TextInput label="md input" maxWidth="md" />
	<TextInput label="lg input" maxWidth="lg" />
	<TextInput label="xl input" maxWidth="xl" />
</Stack>
```
