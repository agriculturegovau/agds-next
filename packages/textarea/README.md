---
title: Textarea
description: Textarea is a long form text input and can be scaled up or down in size by the user.
group: Forms
---

### Default

By default, the `Textarea` component does not expand to fill the available space.

```jsx live
<Textarea label="Message" />
```

### Block

Use the `block` prop to expand the component to fill the available space.

```jsx live
<Textarea label="Message" block />
```

### Required

The `Textarea` component will always append `(optional)` or `(required)` to the label based on the `required` prop.

```jsx live
<Stack gap={1}>
	<Textarea label="Default" />
	<Textarea label="Required" required />
	<Textarea label="Optional" required={false} />
</Stack>
```

### Valid and invalid textareas

Use the `invalid` and `valid` props to indicate whether user input is valid (validates according to the elements settings) or invalid (does not validate according to the elements settings).

```jsx live
<Stack gap={1}>
	<Textarea label="Invalid" invalid message="This field is invalid" />
	<Textarea label="Valid" valid message="This field is valid" />
</Stack>
```

### Disabled

Disabled textarea elements are unusable and can not be clicked. This prevents a user from interacting with the textarea element until another action is complete. Disabled textarea elements in a form will not be submitted.

```jsx live
<Textarea label="Message" disabled />
```

### Maximum widths

The maximum width of a textarea field should indicate the amount of information expected to be entered into the field. The size of the field acts as a visual constraint for the end user.

```jsx live
<Stack gap={1}>
	<Textarea label="xs textarea" maxWidth="xs" />
	<Textarea label="sm textarea" maxWidth="sm" />
	<Textarea label="md textarea" maxWidth="md" />
	<Textarea label="lg textarea" maxWidth="lg" />
	<Textarea label="xl textarea" maxWidth="xl" />
</Stack>
```
