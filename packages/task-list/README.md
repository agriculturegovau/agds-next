---
title: Task list
description:
group: Forms
storybookPath: /story/forms-tasklist--on-light
---

The individual tasks or steps are shown as either:

- `todo` – the task is available for the user to do
- `doing` – the task has been started
- `done` – the task has been completed

```jsx live
<TaskList
	items={[
		{
			href: '#',
			label: 'Check eligibility',
			status: 'done',
		},
		{
			href: '#',
			label: 'Lorem ipsum dolor sit amet',
			status: 'done',
		},
		{
			href: '#',
			label: 'Case Studies',
			status: 'doing',
		},
		{
			href: '#',
			label: 'Review and submit',
			message: 'Not available until previous tasks are done',
			status: 'todo',
		},
	]}
/>
```

### Nonsequential

If the list of tasks can be done in any order, you can set the `ordered` prop to `false`.

```jsx live
<TaskList
	ordered={false}
	items={[
		{
			href: '#',
			label: 'Check eligibility',
			status: 'done',
		},
		{
			href: '#',
			label: 'Lorem ipsum dolor sit amet',
			status: 'done',
		},
		{
			href: '#',
			label: 'Case Studies',
			status: 'todo',
		},
		{
			href: '#',
			label: 'Review and submit',
			status: 'todo',
		},
	]}
/>
```

### Buttons

If an item does not specify a `href` attribute a `button` element will be rendered. This enables you to reponds to various mouse events such as `onClick`.

```jsx live
<TaskList
	items={[
		{
			onClick: console.log,
			label: 'Check eligibility',
			status: 'done',
		},
		{
			onClick: console.log,
			label: 'Lorem ipsum dolor sit amet',
			status: 'done',
		},
		{
			onClick: console.log,
			label: 'Case Studies',
			status: 'doing',
		},
		{
			onClick: console.log,
			label: 'Review and submit',
			message: 'Not available until previous tasks are done',
			status: 'todo',
		},
	]}
/>
```
