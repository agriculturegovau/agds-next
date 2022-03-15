---
title: Task List
description:
group: Forms
---

The individual tasks or steps are shown as either:

- `todo` – the task is available for the user to do
- `doing` – the task has been started
- `done` – the task has been completed

```jsx live
<TaskList
	items={[
		{ href: '#', label: 'Introduction', status: 'doing' },
		{ href: '#', label: 'Business Contacts', status: 'todo' },
		{ href: '#', label: 'Case Studies', status: 'done' },
	]}
/>
```
