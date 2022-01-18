# Contributing to the Agriculture Design-System

## Philosophies

An incomplete list of the principles guiding decisions around API and implementation details in the Design-System.

### Avoid making up new words for things that already exist in the domain

Eg. For component props which map directly to css properties, just use the same name. Shortening `flexGrow` to `grow` makes it harder to understand what that prop does.

### Easy things should be easy, hard things should be possible

This is an idea that comes from Perl and can be used when thinking about how to define an API.

A simple example of this is the `LinkList` component.

In it's simplest and most easy to use form, the component takes a `links` prop which is a list of the `href` and text `label` for each link.

```jsx
import { LinkList } from '@ag.ds-next/link-list';
<LinkList
	links={[
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
	]}
/>;
```

If you wanted however to add an Icon to one or more of the links, this can be easily achieved by passing a react node as the `label` instead of a string.

```jsx
import { LinkList } from '@ag.ds-next/link-list';
<LinkList
	links={[
		{
			href: '/',
			label: (
				<Box>
					<Icon icon="house" /> Home
				</Box>
			),
		},
		{
			href: '/about',
			label: (
				<Box>
					<Icon icon="question" /> About
				</Box>
			),
		},
	]}
/>;
```

If you wanted to do something more complex you can pick and choose the parts of `LinkList` which are useful to you and replace anything you need to.

```tsx
// In this example, we create a LinkList component which can highlight external links
import { LinkListGroup, LinkListItem } from '@ag.ds-next/link-list';

const isExternal = (href: string) => href.startsWith('http');

const CustomLinkList = ({ links, ..props }) => (
	<LinkListGroup {...props}>
		{links.map(({ label, ...props }, index) => (
			<LinkListItem key={index}>
				{label} {isExternal(href) ? '[^]' : ''}
			</LinkListItem>
		))}
	</LinkListGroup>
);

```

So components which (like `LinkList`) are a composition of several other components should expose their parts in addition to the main component to enable recomposing the parts in a different way. This lets us maintain a simple API while enabling much more complex changes.

### Limit cross dependencies

It is fully expected that almost every design-system component will depend on `core` and `box` but beyond that, we should try to limit cross dependencies as much as possible.

> It's tempting to look, for example, at the `SideNavigation` component, see that in mobile it collapses to an accordion and then try to use the `Accordion` inside of `SideNavigation`.

Going down this path is fraught.

1. While there are certainly similarities in the look and functionality of these components they are fundamentally different. The `Accordion` is always an accordion. Open or closed. Nothing more. The `SideNavigation` how ever could change at runtime (on resize or device rotation) from a collapsible accordion-like component to one with a fixed height, locked open and then back again. This is not a feature the `Accordion` should support.
2. While the relationship from `SideNavigation` to `Accordion` may be easy to see, there is no indication from within the `Accordion` that this dependency exists. This can leads to changes in the `Accordion` causing issues in `SideNavigation` with no good way to expose this dependency.

A better choice here is to take the parts of `Accordion` which are common / reusable and extract them to a more generic component or into `core` as a utility. If this is too hard, copy paste the code to the new component. Duplication is better than dependency here.

##

## Component / Feature checklist

For new components or features, use the following check list to ensure you have everything in place.

- [ ] The component is available for use in playroom `docs/playroom/components.js`
- [ ] The component is available for use in `live` blocks in the Docs site. ``
- [ ] Stories exist for all color variants eg. light and dark theme containers (if relevant).

- [ ] Consider accessibility (a11y)
  - [ ] What does [Gold](https://gold.designsystemau.org/) do?
  - [ ] Use the appropriate html elements.
  - [ ] Aria roles and attributes.
  - [ ] Focus styles and keyboard nav.

Can you answer the following questions:

> If I couldn't see the screen how would I know:
>
> - what this is?
> - what this does?
> - what just happened?
