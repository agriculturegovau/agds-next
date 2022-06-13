---
title: Badge
description: A badge is a decorative indicator used to either call attention to an item or for communicating non-actionable, supplemental information.
group: Content
storybookPath: /story/content-badge--on-light
---

## Badge

Use badges to highlight an item's status for quick recognition.

```jsx live
<Badge tone="info" label="In progress" />
```

### Tones

Choosing a tone for a `Badge` allows the user to understand the importance and severity of the message at a glance.

The four supported tones are `info`, `success`, `error` and `warning`.

```jsx live
<Flex gap={1}>
	<Badge tone="info" label="In progress" />
	<Badge tone="success" label="Resolved" />
	<Badge tone="error" label="Rejected" />
	<Badge tone="warning" label="Attention" />
</Flex>
```

## NotificationBadge

A notification badge is a visual indicator for numeric values.

```jsx live
<Flex gap={1}>
	<NotificationBadge tone="info" value={16} />
	<NotificationBadge tone="success" value={32} />
	<NotificationBadge tone="error" value={48} />
	<NotificationBadge tone="warning" value={64} />
</Flex>
```

### Maximum value

Use the `max` property where the count is expected to exceed a reasonable number, and the exact count is not particularly valuable to the user.

```jsx live
<NotificationBadge tone="info" max={99} value={123} />
```

## IndicatorDot

A small decorative indicator used to call attention to an item.

```jsx live
<Flex gap={1}>
	<IndicatorDot tone="info" />
	<IndicatorDot tone="success" />
	<IndicatorDot tone="error" />
	<IndicatorDot tone="warning" />
</Flex>
```
