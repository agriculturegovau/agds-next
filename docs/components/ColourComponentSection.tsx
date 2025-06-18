import { Box } from '@ag.ds-next/react/box';
import { Code } from './Code';

export const ColourComponentSection = ({
	children: ReactChildren,
	shadeAlt = false,
}: {
	children: React.ReactNode;
	shadeAlt?: boolean;
}) => {
	// Add new tab padding on left of each line
	const children = ReactChildren?.toString()
		.trim()
		.split('\n')
		.map((child) => '\t' + child) // Add indent for box
		.join('\n');

	return (
		<>
			<h2 id="colour">Colour</h2>
			<p>
				AgDS foreground components respond to the background colour of their
				parent container. When placed on a dark palette background, the dark
				palette variant of the component is displayed. When placed on a light
				palette background the light palette variant is displayed.
			</p>
			<p>
				This logic ensures sufficient contrast between foreground and background
				elements is maintained to meeting WCAG 2.1AA, 4:5:1 contrast ratio for
				text (WCAG 1.4.3) and 3:1 for graphic elements that convey information
				(WCAG 1.4.11).
			</p>
			{shadeAlt && (
				<p>
					This component has a body Alt variant. Components with a bodyAlt
					variant utilises ’shadeAlt’ to highlight interface components and
					content that sit on ’bodyAlt’ background. ’shadeAlt’ is also used to
					fill interactive components ensuring sufficient contrast is maintained
					for hover states.
				</p>
			)}

			<h3>Light palette</h3>

			<Box padding={1.5}>
				<Code
					live
				>{`<Box background="body" padding={1}>\n${children}\n</Box>`}</Code>
			</Box>

			<h3>Dark palette</h3>
			<Box padding={1.5}>
				<Code
					live
				>{`<Box background="body" padding={1} palette="dark">\n${children}\n</Box>`}</Code>
			</Box>
		</>
	);
};
