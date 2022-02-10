---
title: Field
description: The field package exposes the elements around form inputs, and an API to compose them.
group: Forms
---

### Field

Using [context](https://reactjs.org/docs/context.html), the field component connects the label, description, and message to the input element.

```jsx live
<Field label="Name">
	<TextInput />
</Field>
```

### Label

Each text field must be accompanied by a label. Effective form labeling helps users understand what information to enter into a text input.

Using placeholder text in lieu of a label is sometimes employed as a space-saving method. However, this is not recommended because it hides context and presents accessibility issues.

```jsx live
<Field label="Name">
	<TextInput />
</Field>
```

### Hint

Hints can be used to provide more context that will help the user successfully complete the form field.

```jsx live
<Field label="Email" hint="We will only use this to respond to your question">
	<TextInput type="email" />
</Field>
```

### Messages

Error messages are used to notify the user when a form field has not passed validation. Use clear messages to explain what went wrong and how to fix it.

TODO Success messages?

```jsx live
<Stack gap={1}>
	<Field
		label="Email"
		valid={false}
		message="Enter an email address in the correct format, like name@example.com"
	>
		<TextInput type="email" />
	</Field>
	<Field
		label="Email"
		valid={true}
		message="The email address you have entered is valid"
	>
		<TextInput type="email" value="hello@example.com" />
	</Field>
</Stack>
```
