---
title: The core package
description: Core includes a range of styles, variables and code that form the foundation of how the Design System works, including colour, typography and spacing.
---

## Colour

<Flex gap={2} justifyContent="space-between">

<Box>
	Something about colors
</Box>

<Flex flexDirection="column" gap={2} padding={2} borderColor="default" rounded>
	<Flex theme="light">
		{['page', 'shade', 'pageAlt', 'shadeAlt'].map((bg) => (
			<Flex
				key={bg}
				flexDirection="column"
				gap={2}
				background={bg}
				paddingY={3}
				paddingX={4}
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
				gap={2}
				background={bg}
				paddingY={3}
				paddingX={4}
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

</Flex>

## Typography

<Flex gap={2} justifyContent="space-between">
	<Box>
		Some things about typography
	</Box>

<Flex theme="light" background="page" gap={2} borderColor="default" padding={2}>
	<Flex flexDirection="column" gap={2} >
		<Text fontSize="sm" fontWeight="bold">
			Default
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size}>{size.toUpperCase()}</Text>
			</Box>
		))}
	</Flex>
	<Flex flexDirection="column" theme="light" background="page" gap={2}>
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
	<Flex flexDirection="column" theme="light" background="page" gap={2}>
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
</Flex>
