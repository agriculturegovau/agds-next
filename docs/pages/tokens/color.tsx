import { useState } from 'react';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Switch } from '@ag.ds-next/switch';
import { Box } from '@ag.ds-next/box';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { DocumentTitle } from '../../components/DocumentTitle';
import { ColorTable } from '../../components/TokenColorTable';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensColorPage() {
	const [isDarkMode, setDarkMode] = useState(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Color tokens" />
			<TokenLayout
				title="Color tokens"
				description="How to use colour to design consistent, purposeful, and accessible products."
				editPath="/docs/pages/tokens/color.tsx"
			>
				<Prose>
					<h2>Colour palettes</h2>
					<p>
						There are 2 colour palettes, light and dark. Each colour palette is
						divided into foreground, background, border, and system colours
						which all have a specific purpose:
					</p>
					<div className={proseBlockClassname}>
						<InpageNav
							title="In this section"
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
						<p>Toggle the dark palette colour tokens via the switch below.</p>
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
