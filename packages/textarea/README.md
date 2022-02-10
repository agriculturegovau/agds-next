---
title: Textarea
description: Textarea is a long form text input and can be scaled up or down in size by the user.
group: Forms
---

### Default

By default, the `Textarea` component does not expand to fill the available space.

```jsx live
<Field label="Message">
	<Textarea />
</Field>
```

### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
<Field label="Message">
	<Textarea block />
</Field>
```

### Valid and invalid textareas

Use the `invalid` and `valid` props to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<Field label="Invalid" invalid message="This field is invalid">
		<Textarea />
	</Field>
	<Field label="Valid" valid message="This field is valid">
		<Textarea />
	</Field>
</Stack>
```

### Disabled

Disabled textarea elements are unusable and can not be clicked. This prevents a user from interacting with the textarea element until another action is complete. Disabled textarea elements in a form will not be submitted.

```jsx live
<Field label="Message">
	<Textarea disabled />
</Field>
```

### Maximum widths

The maximum width of a textarea field should indicate the amount of information expected to be entered into the field. The size of the field acts as a visual constraint for the end user.

```jsx live
<Stack gap={1}>
	<Field label="xs textarea">
		<Textarea maxWidth="xs" />
	</Field>
	<Field label="sm textarea">
		<Textarea maxWidth="sm" />
	</Field>
	<Field label="md textarea">
		<Textarea maxWidth="md" />
	</Field>
	<Field label="lg textarea">
		<Textarea maxWidth="lg" />
	</Field>
	<Field label="xl textarea">
		<Textarea maxWidth="xl" />
	</Field>
</Stack>
```
