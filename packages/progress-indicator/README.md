---
title: Progress indicator
description: Progress indicators provide visual feedback to users to let them know and understand their current context at any given time and be assured that they are progressing through the system.
group: Forms
---

Our design system provides a progress indicator for larger tasks that can be completed out of order and returned to at a later date, like doing a tax return or applying for a driver’s licence.

The individual tasks or steps are shown as either:

- `todo` – the task is available for the user to do
- `doing` – the task has been started
- `done` – the task has been completed

```jsx live
<ProgressIndicator
	items={[
		{ href: '#', label: 'Introduction', status: 'doing' },
		{ href: '#', label: 'Business Contacts', status: 'todo' },
		{ href: '#', label: 'Case Studies', status: 'done' },
	]}
/>
```

### Buttons

If an item does not specify a `href` attribute a `button` element will be rendered. This enables you to reponds to various mouse events such as `onClick`.

```jsx live
<ProgressIndicator
	items={[
		{ onClick: console.log, label: 'Introduction', status: 'doing' },
		{ onClick: console.log, label: 'Business Contacts', status: 'todo' },
		{ onClick: console.log, label: 'Case Studies', status: 'done' },
	]}
/>
```
