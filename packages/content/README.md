---
title: Content
description: A collection of simple layout containers to wrap content.
group: Layout
---

### PageContent

The `PageContent` component should be used to wrap your applications page content. Typically this component will sit in between a header and footer component.

```jsx
<YourApplicationHeader />
<PageContent as="main">
	<YourApplicationHeaderPageContent />
</PageContent>
<YourApplicationFooter />
```

### SectionContent

The `SectionContent` component should be used to wrap sections of your applications page content.

```jsx
<SectionContent>
	<H2>Section 1</H2>
</SectionContent>
<SectionContent background="shade">
	<H2>Section 2</H2>
</SectionContent>
<SectionContent>
	<H2>Section 3</H2>
</SectionContent>
```

### Content

The `Content` component should be used when you want to add a max-width to your content, but want to have custom padding values.

```jsx
<Content>
	<Box paddingY={2}>
		<H2>Example title</H2>
	</Box>
</Content>
```
