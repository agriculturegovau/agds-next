---
title: Core
description: Core includes a range of styles, variables and code that form the foundation of how the Design System works, including colour, typography and spacing.
group: Foundations
---

## Colour

The colour palette is designed and tested to provide colour pairings that pass accessibility contrast ratios while still being easy to implement. This means that designers and developers using the system do not need to be concerned about if a colour will pass WCAG requirements in a particular circumstance.

### Colour names imply their use

We use semantic naming so that all colours labeled as foreground colours in a theme. These colours are manually tested to pass accessibility contrast ratios when used with all background colours within a theme and vice versa.

### Tips

- Do pair foreground and background colours.
- Don't mix light and dark variables.
- Don't pair foreground with foreground or background with background.

```jsx live
<Flex flexDirection="column" gap={1}>
	<Flex palette="light">
		{['body', 'shade', 'bodyAlt', 'shadeAlt'].map((bg) => (
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
	<Flex palette="dark">
		{['body', 'shade', 'bodyAlt', 'shadeAlt'].map((bg) => (
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

A typographic scale was used to create a set of font-size and line-height values which have been designed for legibility and can be easily be implemented by designers or developers with a predictable output.

Using the design system's typography values means any object containing text is more likely to align with another element. This appearance of a baseline grid is created by automatically rounding the line-heights to the nearest grid value 4px, then converting them back to a unit-less value.

To ensure consistency with other components in the system designers and developers can use font size and line height values from the typographic scale.

```jsx live
<Flex palette="light" background="body" gap={1}>
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
	<Flex flexDirection="column" palette="light" background="body" gap={1}>
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
	<Flex flexDirection="column" palette="light" background="body" gap={1}>
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
