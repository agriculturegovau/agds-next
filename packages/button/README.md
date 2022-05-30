---
title: Button
description: Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them.
group: Forms
storybookPath: /story/forms-button--on-light
---

## Props

### Variant

Our Button component has three visual weights, to convey heirarchy.

#### Primary

A strong button style used for primary actions on a screen such as a Submit button on a form, or other actions that are critical in a user workflow. A primary button should be only used once per view.

#### Secondary

A standard button style used to highlight an important action such as a Save button on a form. (A secondary button assumes there is already a primary button.)

#### Tertiary

A light button style used for tertiary actions on a screen such as a Cancel button on a form. (A tertiary button assumes there is already a secondary button.) Typically it performs the opposite action to the secondary button (e.g. Cancel vs Save).

```jsx live
<ButtonGroup>
	<Button variant="primary" onClick={() => alert('primary')}>
		Primary
	</Button>
	<Button variant="secondary" onClick={() => alert('secondary')}>
		Secondary
	</Button>
	<Button variant="tertiary" onClick={() => alert('tertiary')}>
		Tertiary
	</Button>
</ButtonGroup>
```

### Size

Size is another prop that allows adjustment of visual weight. The medium button should be used for most circumstances.

```jsx live
<ButtonGroup>
	<Button variant="primary" size="sm" onClick={() => alert('primary')}>
		Primary
	</Button>
	<Button variant="secondary" size="sm" onClick={() => alert('secondary')}>
		Secondary
	</Button>
	<Button variant="tertiary" size="sm" onClick={() => alert('tertiary')}>
		Tertiary
	</Button>
</ButtonGroup>
```

### Disabled

A button that can’t be interacted with. A disabled button is typically greyed out to indicate to users that they cannot undertake the action associated with it. This is usually for page logic reasons.

```jsx live
<ButtonGroup>
	<Button disabled variant="primary" onClick={() => alert('primary')}>
		Primary
	</Button>
	<Button disabled variant="secondary" onClick={() => alert('secondary')}>
		Secondary
	</Button>
	<Button disabled variant="tertiary" onClick={() => alert('tertiary')}>
		Tertiary
	</Button>
</ButtonGroup>
```

### Block

A block-level button uses 100% of the available width of the container or parent element. A block- level button is used for visual prominence.

```jsx live
<Button block>Submit</Button>
```

### Icons

The `iconAfter` and `iconBefore` props can be used to add system icons to buttons.

```jsx live
<ButtonLink
	iconAfter={ExternalLinkIcon}
	href="https://steelthreads.github.io/agds-next"
	target="_blank"
	rel="noopener noreferrer"
>
	Open external link
</ButtonLink>
```

### Loading

The `loading` prop can be used to inform users that their action is being processed.

```jsx live
<Button loading>Submit</Button>
```

## Buttons links

For situations where you need something that has the visual weight of a Button, but the functionality of a link, you can use `ButtonLink`!

`ButtonLink` adopts the `Link` component from your chosen router framework, which you can set in the `Core` component.

```jsx live
<ButtonLink href="/sign-in">Sign in</ButtonLink>
```

## ButtonGroup

The `ButtonGroup` component can be used to group buttons whose actions are related. On smaller devices, buttons will be stacked vertically and stretch to expand the width of the container.

```jsx live
<ButtonGroup>
	<Button variant="primary">Primary</Button>
	<Button variant="secondary">Secondary</Button>
	<Button variant="tertiary">Tertiary</Button>
</ButtonGroup>
```
