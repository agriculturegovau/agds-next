import { useState } from 'react';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Switch } from '@ag.ds-next/switch';
import { Box } from '@ag.ds-next/box';
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
				description="How to do colour"
				editPath="/docs/pages/tokens/color.tsx"
			>
				<Prose>
					<p>
						The colour palette is designed and tested to provide colour pairings
						that pass accessibility contrast ratios while still being easy to
						implement. This means that designers and developers using the system
						do not need to be concerned about if a colour will pass WCAG
						requirements in a particular circumstance.
					</p>
					<p>
						We use semantic naming so that all colours labeled as foreground
						colours in a theme. These colours are manually tested to pass
						accessibility contrast ratios when used with all background colours
						within a theme and vice versa.
					</p>

					<p>
						Each foreground, background, border, and system colours has a
						specific purpose...
					</p>

					<ul>
						<li>
							<strong>Foreground colors</strong>: Designed to sit on top of
							background colours to ensure contrast ratios meet WCAG 2.1 level
							AA accessibility requirements.
						</li>

						<li>
							<strong>Background colors</strong>: Designed to sit under
							foreground colours to ensure contrast ratios meet WCAG 2.1 level
							AA accessibility requirements. Each colour palette has 2 main
							background colours to choose from, the default background (body)
							and a darker alternative (body-alt). Shades can be used to help
							differentiate or highlight content against the body background
							colours.
						</li>

						<li>
							<strong>Border colors</strong>: Each colour palette has 2 border
							colours.
						</li>

						<li>
							<strong>System colors</strong>: System colours are used to
							indicate status. They’re very prominent colours aimed at grabbing
							the user’s attention. Each system colour has a muted version to be
							used as a background colour.
						</li>
					</ul>

					<div className={proseBlockClassname}>
						<Switch
							label="Dark palette"
							checked={isDarkMode}
							onChange={setDarkMode}
						/>
					</div>

					<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />

					<h3>Tips</h3>
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
