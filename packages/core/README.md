---
title: Core
description: Core includes a range of styles, variables and code that form the foundation of how the Design System works, including colour, typography and spacing.
group: Foundations
---

## Colour

```jsx live
<Flex flexDirection="column" gap={1} padding={1}>
	<Flex theme="light">
		{['page', 'shade', 'pageAlt', 'shadeAlt'].map((bg) => (
			<Flex
				key={bg}
				flexDirection="column"
				gap={1}
				background={bg}
				paddingY={1}
				paddingX={2}
			>
				{['text', 'muted', 'action', 'focus'].map((fg) => (
					<Text key={fg} color={fg}>
						{fg}
					</Text>
				))}
			</Flex>
		))}
	</Flex>
	<Flex theme="dark">
		{['page', 'shade', 'pageAlt', 'shadeAlt'].map((bg) => (
			<Flex
				key={bg}
				flexDirection="column"
				gap={1}
				background={bg}
				paddingY={1}
				paddingX={2}
			>
				{['text', 'muted', 'action', 'focus'].map((fg) => (
					<Text key={fg} color={fg}>
						{fg}
					</Text>
				))}
				<Text color="focus">
					<hr />
				</Text>
			</Flex>
		))}
	</Flex>
</Flex>
```

## Typography

```jsx live
<Flex theme="light" background="page" gap={1} padding={1}>
	<Flex flexDirection="column" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Default
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size}>{size.toUpperCase()}</Text>
			</Box>
		))}
	</Flex>
	<Flex flexDirection="column" theme="light" background="page" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Heading
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size} lineHeight="heading">
					{size.toUpperCase()}
				</Text>
			</Box>
		))}
	</Flex>
	<Flex flexDirection="column" theme="light" background="page" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Nospace
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size} lineHeight="nospace">
					{size.toUpperCase()}
				</Text>
			</Box>
		))}
	</Flex>
</Flex>
```
