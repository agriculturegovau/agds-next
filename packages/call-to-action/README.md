---
title: Call to action
description: Call to action links are visually distinct instructions to users designed to provoke an immediate response using verbs such as 'call now' or 'find out more'.
group: Navigation
storybookPath: /story/navigation-calltoaction--basic
---

A simple and clear link to direct users to a preferred action.

```jsx live
<CallToAction href="#">Sign up</CallToAction>
```

### As button element

For situations where you need the appearance of a `CallToAction` but the functionality of a HTML `button` element, you can use `as` prop.

```jsx live
<CallToAction as={BaseButton} onClick={console.log}>
	Button element
</CallToAction>
```
