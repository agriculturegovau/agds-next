import { Code } from './Code';
import { checkAndModifyCode } from './code/utils';

/**
 * We will be wrapping the code in a Box with the palette
 * Add one tab to each line for Playroom and code preview
 */
const formatCodeString = (originalCode: string) => {
	const code = checkAndModifyCode(originalCode.trim());
	return code
		.split('\n')
		.map((line) => '\t' + line) // Add indent to each line
		.join('\n');
};

/**
 * Code examples require `light` and `dark` text
 * The below string will be replaced by the appropriate palette label in their respective code blocks
 */
const paletteReplacedString = '[%_PALETTE_%]';

export const ColorComponentSection = ({
	children: ReactChildren,
	enableProse,
	exampleContentHeading,
	exampleContentHeadingType,
	live,
	shadeAlt = false,
	showCode,
}: {
	children: React.ReactNode;
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
	live?: boolean;
	shadeAlt?: boolean;
	showCode?: boolean;
}) => {
	const children = formatCodeString(ReactChildren?.toString() || '');
	const lightCode = children.replaceAll(paletteReplacedString, 'light');
	const darkCode = children.replaceAll(paletteReplacedString, 'dark');

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
				elements is maintained to meet WCAG 2.1 AA, 4:5:1 contrast ratio for
				text (WCAG 1.4.3) and 3:1 for graphic elements that convey information
				(WCAG 1.4.11).
			</p>
			{shadeAlt && (
				<p>
					This component has a ’bodyAlt’ variant. Components with a ’bodyAlt’
					variant utilise ’shadeAlt’ to highlight interface components and
					content that sit on ’bodyAlt’ background. ’shadeAlt’ is also used to
					fill interactive components, ensuring sufficient contrast is
					maintained for hover states.
				</p>
			)}

			<h3>Light palette</h3>
			<Code
				enableProse={enableProse}
				exampleContentHeading={exampleContentHeading}
				exampleContentHeadingType={exampleContentHeadingType}
				live={live}
				padding={false}
				showCode={showCode}
			>{`<Box background="body" paddingX={{ xs: 0.75, md: 1.5 }} paddingY={1.5}>\n${lightCode}\n</Box>`}</Code>

			<h3>Dark palette</h3>
			<Code
				enableProse={enableProse}
				exampleContentHeading={exampleContentHeading}
				exampleContentHeadingType={exampleContentHeadingType}
				live={live}
				padding={false}
				showCode={showCode}
			>{`<Box background="body" paddingX={{ xs: 0.75, md: 1.5 }} paddingY={1.5} palette="dark">\n${darkCode}\n</Box>`}</Code>
		</>
	);
};
