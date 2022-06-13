---
title: Badge
description: TODO
group: Content
storybookPath: /story/content-badge--on-light
---

## Badge

Use badges to highlight an item's status for quick recognition. Badges should contain short easy-to-scan text. Use sentence case for the badge's label.

```jsx live
<Badge label="To do" />
```

## Tone

Use the tone property to indicate the intent of the badge.

```jsx live
<Flex gap={1}>
	<Badge tone="neutral" label="Draft" />
	<Badge tone="informative" label="In progress" />
	<Badge tone="accent" label="Pending" />
	<Badge tone="critical" label="Rejected" />
	<Badge tone="positive" label="Resolved" />
	<Badge tone="cautious" label="Attention" />
	<NotificationBadge tone="informative" max={99} value={123} />
</Flex>
```

### Notification Badge

```jsx live
<Flex gap={1}>
	<NotificationBadge value={123} />
	<NotificationBadge tone="neutral" value={12} />
	<NotificationBadge tone="informative" value={23} />
	<NotificationBadge tone="critical" value={34} />
	<NotificationBadge tone="positive" value={45} />
</Flex>
```
