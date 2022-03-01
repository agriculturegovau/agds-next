---
title: Fieldset
description: Grouping form elements in a meaningful way can make them much easier to handle for everyone.
group: Forms
---

```jsx live
<form>
	<Stack gap={2}>
		<Fieldset label="Billing address" hint="Please enter your billing address">
			<TextInput label="First name" required />
			<TextInput label="Last name" required />
			<TextInput label="Street" required />
			<TextInput label="City" required />
		</Fieldset>
		<Fieldset label="Shipping address" hint="Please enter your billing address">
			<TextInput label="First name" required />
			<TextInput label="Last name" required />
			<TextInput label="Street" required />
			<TextInput label="City" required />
		</Fieldset>
		<Button type="submit">Submit</Button>
	</Stack>
</form>
```
