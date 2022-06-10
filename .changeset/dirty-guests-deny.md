---
'@ag.ds-next/button': major
---

- Added the ability the forward refs and use the as prop
- Removed `ButtonLink` component. Usage of this component can be replaced with:

```jsx
const Link = useLinkComponent();
return (
	<Button as={LinkComponent} href="/sign-in">
		Sign in
	</Button>
);
```