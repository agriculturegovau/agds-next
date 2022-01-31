---
title: Columns
description: A grid consists of a framework of cells laid out and aligned vertically and horizontally. It helps users read and visually navigate website content more easily, using a responsive, scrollable column structure.
group: Foundation
---

```jsx live
<Box theme="light" background="page">
	<Columns gridGap={2}>
		<Column width={4} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
	</Columns>
</Box>
```

### Responsive gaps

```jsx live
<Box theme="light" background="page">
	<Columns columnGap={1} rowGap={4}>
		<Column width={[12, 6]} background="shade" padding={1} />
		<Column width={[12, 6]} background="shade" padding={1} />
	</Columns>
</Box>
```

### Widths

```jsx live
<Box theme="light" background="page">
	<Columns gridGap={0.5}>
		<Column width={3} background="shade" padding={1} />
		<Column width={3} background="shade" padding={1} />
		<Column width={3} background="shade" padding={1} />
		<Column width={3} background="shade" padding={1} />
		<Column width={6} background="shade" padding={1} />
		<Column width={6} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={8} background="shade" padding={1} />
		<Column width={4} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
		<Column width={2} background="shade" padding={1} />
	</Columns>
</Box>
```
