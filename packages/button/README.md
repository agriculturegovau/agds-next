---
title: Button
description: Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them.
group: Forms
---

## Weight
Our Button component has three visual weights, to convey heirarchy.
### Primary
A strong button style used for primary actions on a screen such as a Submit button on a form, or other actions that are critical in a user workflow. A primary button should be only used once per view.

### Secondary
A standard button style used to highlight an important action such as a Save button on a form. (A secondary button assumes there is already a primary button.)

### Tertiary
A light button style used for tertiary actions on a screen such as a Cancel button on a form. (A tertiary button assumes there is already a secondary button.) Typically it performs the opposite action to the secondary button (e.g. Cancel vs Save).

```jsx live
<Flex gap={1}>
	<Button weight="primary" onClick={() => alert('primary')}>Primary</Button>
	<Button weight="secondary" onClick={() => alert('secondary')}>
		Secondary
	</Button>
	<Button weight="tertiary" onClick={() => alert('tertiary')}>
		Tertiary
	</Button>
</Flex>
```

## Disabled
A button that can’t be clicked and doesn’t react to hover. A disabled button is typically greyed out to indicate to users that they cannot undertake the action associated with it. This is usually for page logic reasons.

```jsx live
<Button disabled>Submit</Button>
```
## Block
A block-level button uses 100% of the available width of the container or parent element. A block- level button is used for visual prominence.

```jsx live
<Button block>Submit</Button>
```

## ButtonLink
For situations where you need something that has the visual weight of a Button, but the functionality of a link, you can use ButtonLink!
```jsx live
<ButtonLink href='/sign-in'>Sign in</ButtonLink>
```
