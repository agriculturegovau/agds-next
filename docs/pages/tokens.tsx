import { PropsWithChildren, useState } from 'react';
import { Box, Stack } from '@ag.ds-next/box';
import { PageContent } from '@ag.ds-next/content';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { Switch } from '@ag.ds-next/switch';
import { Column, Columns } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import {
	BorderWidthChart,
	BreakpointsChart,
	ColorTable,
	MaxWidthChart,
	SpacingChart,
	TypographyChart,
} from '../components/Tokens';
import { PageTitle } from '../components/PageTitle';

const Section = ({
	children,
	id,
}: PropsWithChildren<{
	id: string;
}>) => {
	return (
		<Prose as="section" id={id}>
			{children}
		</Prose>
	);
};

export default function TokensPage() {
	const [isDarkMode, setDarkMode] = useState(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Tokens" />
			<AppLayout>
				<PageContent as="main" id="main-content">
					<Stack gap={5}>
						<Stack gap={2}>
							<PageTitle
								title="Design Tokens"
								introduction="Our Design Tokens are the foundation of our design system. They are the building blocks of our components and are used to create a consistent look and feel across all of our products."
							/>

							<InpageNav
								title="On this page"
								links={[
									{ href: '#color', label: 'Color' },
									{ href: '#section-2', label: 'Breakpoints' },
									{ href: '#section-2', label: 'Border Radius' },
									{ href: '#section-2', label: 'Border Widths' },
									{ href: '#section-1', label: 'Max Width' },
									{ href: '#section-1', label: 'Shadows' },
									{ href: '#section-1', label: 'Spacing' },
									{ href: '#typography', label: 'Typography' },
								]}
							/>
						</Stack>

						<Section id="color">
							<h2>Color</h2>
							<div className={proseBlockClassname}>
								<Switch
									label="Dark palette"
									checked={isDarkMode}
									onChange={setDarkMode}
								/>
							</div>
							<Columns cols={{ xs: 1, md: 3 }} className={proseBlockClassname}>
								<Column columnSpan={{ xs: 1, md: 2 }}>
									<p>
										The colour palette is designed and tested to provide colour
										pairings that pass accessibility contrast ratios while still
										being easy to implement. This means that designers and
										developers using the system do not need to be concerned
										about if a colour will pass WCAG requirements in a
										particular circumstance.
									</p>
									<p>
										We use semantic naming so that all colours labeled as
										foreground colours in a theme. These colours are manually
										tested to pass accessibility contrast ratios when used with
										all background colours within a theme and vice versa.
									</p>

									<p>
										Each foreground, background, border, and system colours has
										a specific purpose...
									</p>

									<ul>
										<li>
											<strong>Foreground colors</strong>: Designed to sit on top
											of background colours to ensure contrast ratios meet WCAG
											2.1 level AA accessibility requirements.
										</li>

										<li>
											<strong>Background colors</strong>: Designed to sit under
											foreground colours to ensure contrast ratios meet WCAG 2.1
											level AA accessibility requirements. Each colour palette
											has 2 main background colours to choose from, the default
											background (body) and a darker alternative (body-alt).
											Shades can be used to help differentiate or highlight
											content against the body background colours.
										</li>

										<li>
											<strong>Border colors</strong>: Each colour palette has 2
											border colours.
										</li>

										<li>
											<strong>System colors</strong>: System colours are used to
											indicate status. They’re very prominent colours aimed at
											grabbing the user’s attention. Each system colour has a
											muted version to be used as a background colour.
										</li>
									</ul>
								</Column>

								<Column>
									<h3>Tips</h3>
									<ul>
										<li>
											<strong>Do</strong> pair foreground and background
											colours.
										</li>
										<li>
											<strong>Don&apos;t</strong> mix light and dark variables.
										</li>
										<li>
											<strong>Don&apos;t</strong> pair foreground with
											foreground or background with background.
										</li>
									</ul>
								</Column>
							</Columns>

							<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
						</Section>

						<Section id="borderRadius">
							<h2>Border Radius</h2>
							<p>
								We have one borderRadius token, which is 4px. It is available by
								setting <code>rounded</code> on the Box component.
							</p>
						</Section>

						<Section id="borderWidth">
							<h2>Border Width</h2>
							<BorderWidthChart />
						</Section>

						<Section id="breakpoints">
							<h2>Breakpoints</h2>
							<p>
								Breakpoints are points where the website content responds
								according to the device width, allowing you to show the best
								possible layout to the user.
							</p>
							<p>
								You can see breakpoints in action where a layout would change
								from a two to three column grid, as an example.
							</p>
							<BreakpointsChart />
						</Section>

						<Section id="maxWidth">
							<h2>Max Width</h2>
							<p>
								Used to set the maximum width of a container in a page layout.
							</p>
							<MaxWidthChart />
						</Section>

						<Section id="spacing">
							<h2>Spacing</h2>
							<p>
								Tokens to define space between and within (padding and margin)
								elements.
							</p>
							<SpacingChart />
						</Section>

						<Section id="typography">
							<h2>Typography</h2>
							<p>
								A typographic scale was used to create a set of font-size and
								line-height values which have been designed for legibility and
								can be easily be implemented by designers or developers with a
								predictable output.
							</p>

							<p>
								Using the design system&apos;s typography values means any
								object containing text is more likely to align with another
								element. This appearance of a baseline grid is created by
								automatically rounding the line-heights to the nearest grid
								value 4px, then converting them back to a unit-less value.
							</p>

							<p>
								To ensure consistency with other components in the system,{' '}
								<strong>Designers</strong> can use font-size and line-height
								values from the typographic scale. <strong>Developers</strong>{' '}
								can use the `fontSize` and `lineHeight` props available on
								typographic components which use of the `fontGrid` function.
							</p>

							<p>We have individual tokens for...</p>
							<ul>
								<li>font</li>
								<li>fontSize</li>
								<li>fontWeight</li>
								<li>lineHeight</li>
							</ul>
							<TypographyChart />
						</Section>
					</Stack>
				</PageContent>
			</AppLayout>
		</Box>
	);
}
