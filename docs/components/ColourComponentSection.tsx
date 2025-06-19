import { Code } from './Code';

const lintCodeString = (code: string) => {
	const c = cleanCode(code.trim());
	return c
		.split('\n')
		.map((line) => '\t' + line) // Add indent for box
		.join('\n');
};

const multiLineCommentRegex = /^\/\*[\s\S]*?\*\//gi;
const cleanCode = (c: string) => {
	// Wrap `/* ... */` comments with brackets `{ .. }`
	let code = c.replaceAll(multiLineCommentRegex, '{$&}');
	// No formatting required for JSX only
	if (code.startsWith('<') || code.endsWith('>')) return code;

	// Remove `;` from the end of `() => {};`
	if (code.endsWith(';')) {
		code = code.slice(0, -1);
	}

	const formattedCode = code.split('\n').join('\n    ');
	return `<Render>\n    {${formattedCode}}\n</Render>`;
};

export const ColourComponentSection = ({
	children: ReactChildren,
	shadeAlt = false,
}: {
	children: React.ReactNode;
	shadeAlt?: boolean;
}) => {
	// Add new tab padding on left of each line
	const children = lintCodeString(ReactChildren?.toString() || '');
	const light = children.replaceAll('{%PALETTE%}', 'light');
	const dark = children.replaceAll('{%PALETTE%}', 'dark');

	return (
		<>
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
			<Code
				live
			>{`<Box background="body" padding={1.5}>\n${light}\n</Box>`}</Code>

			<h3>Dark palette</h3>
			<Code
				live
			>{`<Box background="body" padding={1.5} palette="dark">\n${dark}\n</Box>`}</Code>
		</>
	);
};
