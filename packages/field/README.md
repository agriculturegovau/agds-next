---
title: Field
description: The field package exposes the elements around form inputs, and an API to compose them.
group: Forms
---

### Field

The field component connects the label, description, and message to the input element.

```jsx live
<Field label="Name">{(a11yProps) => <input {...a11yProps} />}</Field>
```

### Required

```jsx live
<Field label="Name" required>
	{(a11yProps) => <input {...a11yProps} />}
</Field>
```

### Label

Each text field must be accompanied by a label. Effective form labeling helps users understand what information to enter into a text input.

```jsx live
<Field label="Name">{(a11yProps) => <input {...a11yProps} />}</Field>
```

### Hint

Hints can be used to provide more context that will help the user successfully complete the form field.

```jsx live
<Field label="Email" hint="We will only use this to respond to your question">
	{(a11yProps) => <input type="email" {...a11yProps} />}
</Field>
```

### Messages

Error messages are used to notify the user when a form field has not passed validation. Use clear messages to explain what went wrong and how to fix it.

```jsx live
<Stack gap={1}>
	<Field
		label="Email"
		invalid
		message="Enter an email address in the correct format, like name@example.com"
	>
		{(a11yProps) => <input type="email" {...a11yProps} />}
	</Field>
	<Field
		label="Email"
		valid
		message="The email address you have entered is valid"
	>
		{(a11yProps) => <input type="email" {...a11yProps} />}
	</Field>
</Stack>
```

### Required label

By default, "(optional)" or "(required)" will be appended to labels. To disable this, set the `requiredLabel` prop to `false`.

```jsx live
<Field label="Start date" requiredLabel={false}>
	{(a11yProps) => <select {...a11yProps} />}
</Field>
```
