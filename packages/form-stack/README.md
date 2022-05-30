---
title: Form Stack
description: Use to FormStack component to apply consistent spacing between form elements.
group: Forms
---

### Basic

```jsx live
<form>
	<FormStack>
		<TextInput label="Email" type="email" maxWidth="xl" />
		<TextInput label="Password" type="password" maxWidth="xl" />
		<ButtonGroup>
			<Button type="submit">Submit</Button>
			<Button type="button" variant="secondary">
				Cancel
			</Button>
		</ButtonGroup>
	</FormStack>
</form>
```
