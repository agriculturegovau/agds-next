import { useState } from 'react';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Switch } from '@ag.ds-next/switch';
import { Box } from '@ag.ds-next/box';
import { Callout } from '@ag.ds-next/callout';
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
					<ul>
						<li>
							<a href="#foreground">Foreground colors</a>
						</li>
						<li>
							<a href="#background">Background colors</a>
						</li>
						<li>
							<a href="#border">Border colors</a>
						</li>
						<li>
							<a href="#system">System colors</a>
						</li>
					</ul>

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
						<box className={proseBlockClassname}>
							<Switch
								label="Enable dark palette"
								checked={isDarkMode}
								onChange={setDarkMode}
							/>
						</box>
					</Box>

					<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />

					<h2>Tips</h2>
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
