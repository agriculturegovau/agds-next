---
title: Fieldset
description: Use the fieldset component to group related form inputs.
group: Forms
---

Fieldset is used to associate a number of related form fields as well as labels within a form. The legend provides an association and caption for the form fields in the fieldset.

```jsx live
<Fieldset
	legend="What is your address?"
	hint="We will only use this to respond to your request"
>
	<Stack alignItems="flex-start" gap={1.5}>
		<TextInput label="Street and number" required maxWidth="xl" />
		<TextInput label="Suburb" required maxWidth="xl" />
		<TextInput label="Country" required maxWidth="xl" />
		<TextInput label="Postcode" required maxWidth="sm" />
	</Stack>
</Fieldset>
```

### Legend as page heading

If you’re asking just one question per page, you can set the contents of the `legend` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

```jsx live
<Stack as="form" alignItems="flex-start" gap={1.5}>
	<Fieldset
		legend="What is your date of birth?"
		legendAsPageHeading
		hint="We will only use this to respond to your request"
	>
		<Stack alignItems="flex-start" gap={1.5}>
			<TextInput type="number" label="Day" required />
			<TextInput type="number" label="Month" required />
			<TextInput type="number" label="Year" required />
		</Stack>
	</Fieldset>
	<Button type="submit">Continue</Button>
</Stack>
```
