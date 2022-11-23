import { useState } from 'react';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Switch } from '@ag.ds-next/switch';
import { Box } from '@ag.ds-next/box';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { Column, Columns } from '@ag.ds-next/columns';
import { DocumentTitle } from '../../components/DocumentTitle';
import { ColorTable } from '../../components/TokenColorTable';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensColorPage() {
	const [isDarkMode, setDarkMode] = useState(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Color tokens" />
			<TokenLayout
				title="Colour tokens"
				description="How to use colour to design consistent, purposeful, and accessible products."
				editPath="/docs/pages/tokens/color.tsx"
			>
				<Prose>
					<h2>Colour palettes</h2>
					<p>
						There are 2 colour palettes, light and dark. Each colour palette is
						divided into foreground, background, border, and system colours
						which all have a specific purpose.
					</p>
					<div className={proseBlockClassname}>
						<InpageNav
							title="On this page"
							links={[
								{ href: '#foreground', label: 'Foreground colors' },

								{ href: '#background', label: 'Background colors' },

								{ href: '#border', label: 'Border colors' },

								{ href: '#system', label: 'System colors' },
							]}
						/>
					</div>
					<Box
						borderTop
						borderBottom
						padding={1.5}
						borderColor="muted"
						background="shade"
						className={proseBlockClassname}
					>
						<h3>Light vs dark palette</h3>
						<p>
							Toggle the dark palette colour tokens for the whole page via the
							switch below. <a href="#palettes">Learn more about palettes</a>.
						</p>
						<div className={proseBlockClassname}>
							<Switch
								label="Enable dark palette"
								checked={isDarkMode}
								onChange={setDarkMode}
							/>
						</div>
					</Box>
					<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
					<h2>Usage guidelines</h2>

					<Columns cols={[1, 3]} className={proseBlockClassname}>
						<Column columnSpan={[1, 2]}>
							<h3 id="palettes">Use palettes to divide sections</h3>
							<p>
								An interface can be divided into rows or sections that span the
								full width of a screen. A section can use either the light or
								dark colour palette.
							</p>
							<p>
								For example, the website header and footer might use the dark
								palette to make them more prominent, while the content area in
								between uses the light palette.
							</p>
							<p>
								Components that sit inside light sections of an interface use
								the light colour palette. Similarly, components that sit inside
								dark sections of an interface use the dark colour palette.
							</p>
							<p>
								<a href="/guides/custom-theme">See the theming guide</a> for
								more on how this works in code.
							</p>
						</Column>

						<Box paddingTop={[1, 0]}>
							<img
								src="/agds-next/img/guides/home.webp"
								alt="Screenshot of a successful usage of palettes"
							/>
						</Box>
					</Columns>

					<h3>Don’t rely on colour alone to convey meaning</h3>
					<p>
						To ensure the colourblind can use our interface, we shouldn’t rely
						on colour alone to differentiate interface components or convey
						meaning. Use other visual cues to differentiate interface
						components. For example, we underline links as well as using the
						action colour to help differentiate them from other text and clearly
						indicate they’re interactive.
					</p>
					<h3>More tips</h3>
					<ul>
						<li>
							<strong>Do</strong> pair foreground and background colours.
						</li>
						<li>
							<strong>Don&apos;t</strong> mix light and dark variables.
						</li>
						<li>
							<strong>Don&apos;t</strong> pair foreground with foreground or
							background with background.
						</li>
					</ul>
				</Prose>
			</TokenLayout>
		</Box>
	);
}
