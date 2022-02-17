---
title: Progress indicator
description: Progress indicators provide visual feedback to users to let them know and understand their current context at any given time and be assured that they are progressing through the system.
group: Forms
---

Our design system provides a progress indicator for larger tasks that can be completed out of order and returned to at a later date, like doing a tax return or applying for a driver’s licence.

The individual tasks or steps are shown as either:

open – the task is available for the user to do
partly finished – the task has been started
finished – the task has been completed
not yet started – the user has to do something before the task can be started.

```jsx live
<ProgressIndicator
	items={[
		{ href: '#', label: 'Introduction', status: 'doing' },
		{ href: '#', label: 'Business Contacts', status: 'todo' },
		{ href: '#', label: 'Case Studies', status: 'done' },
	]}
/>
```
