---
title: Columns
description: A grid consists of a framework of cells laid out and aligned vertically and horizontally. It helps users read and visually navigate website content more easily, using a responsive, scrollable column structure.
group: Foundations
---

This package includes the components `<Columns />` and `<Column />`.

```jsx live
<Columns gridGap={0.5}>
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
	<Column colSpan={1} background="shade" padding={1} />
</Columns>
```

### Col spans

Use the `colSpan` prop to control how many columns you want to column to span.

```jsx live
<Columns gridGap={0.5}>
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={6} background="shade" padding={1} />
	<Column colSpan={6} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={8} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
	<Column colSpan={2} background="shade" padding={1} />
</Columns>
```

### Row and column gaps

The `gap` prop effects both the row and column gap. To set a different gap for rows and column, you can use the `columnGap` and `rowGap` props.

```jsx live
<Columns columnGap={0.5} rowGap={2}>
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={3} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
	<Column colSpan={4} background="shade" padding={1} />
</Columns>
```
