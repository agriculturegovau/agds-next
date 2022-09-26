import { useState } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { PageContent } from '@ag.ds-next/content';
import { Prose } from '@ag.ds-next/prose';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { Switch } from '@ag.ds-next/switch';
import { Column, Columns } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import {
	BorderRadiusChart,
	BorderWidthChart,
	BreakpointsChart,
	ColorTable,
	MaxWidthChart,
	SpacingChart,
	ShadowsChart,
	TypographyChart,
} from '../components/Tokens';

export default function TokensPage() {
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Tokens" />
			<AppLayout>
				<PageContent as="main" id="main-content">
					<Stack gap={5}>
						<Flex justifyContent="space-between" alignItems="flex-start">
							<Stack gap={2}>
								<Prose>
									<h1>Design Tokens</h1>
									<p>Our Design System tokens</p>
								</Prose>

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
										{ href: '#section-1', label: 'Typography' },
									]}
								/>
							</Stack>

							<Switch
								label="Dark palette"
								checked={isDarkMode}
								onChange={setDarkMode}
							/>
						</Flex>

						<Columns cols={{ xs: 1, md: 3 }} id="color">
							<Column columnSpan={{ xs: 1, md: 2 }}>
								<Stack gap={2}>
									<Prose>
										<h2>Color</h2>
										<p>
											The colour palette is designed and tested to provide
											colour pairings that pass accessibility contrast ratios
											while still being easy to implement. This means that
											designers and developers using the system do not need to
											be concerned about if a colour will pass WCAG requirements
											in a particular circumstance.
										</p>

										<p>
											We use semantic naming so that all colours labeled as
											foreground colours in a theme. These colours are manually
											tested to pass accessibility contrast ratios when used
											with all background colours within a theme and vice versa.
										</p>

										<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
									</Prose>
								</Stack>
							</Column>

							<Prose>
								<h3>Tips</h3>
								<ul>
									<li>
										<strong>Do</strong> pair foreground and background colours.
									</li>
									<li>
										<strong>Don't</strong> mix light and dark variables.
									</li>
									<li>
										<strong>Don't</strong> pair foreground with foreground or
										background with background.
									</li>
								</ul>
							</Prose>
						</Columns>

						<Prose>
							<h2>Border Radius</h2>
							<BorderRadiusChart />
						</Prose>

						<Prose>
							<h2>Border Width</h2>
							<BorderWidthChart />
						</Prose>

						<Prose>
							<h2>Breakpoints</h2>
							<BreakpointsChart />
						</Prose>

						<Prose>
							<h2>Max Width</h2>
							<MaxWidthChart />
						</Prose>

						<Prose>
							<h2>Shadows</h2>
							<ShadowsChart />
						</Prose>

						<Prose>
							<h2>Spacing</h2>
							<p>
								Tokens to define space between and within (padding and margin)
								elements.
							</p>
							<SpacingChart />
						</Prose>

						<Prose>
							<h2>Typography</h2>
							<p>
								A typographic scale was used to create a set of font-size and
								line-height values which have been designed for legibility and
								can be easily be implemented by designers or developers with a
								predictable output.
							</p>

							<p>
								Using the design system's typography values means any object
								containing text is more likely to align with another element.
								This appearance of a baseline grid is created by automatically
								rounding the line-heights to the nearest grid value 4px, then
								converting them back to a unit-less value.
							</p>

							<p>
								To ensure consistency with other components in the system,{' '}
								<strong>Designers</strong> can use font-size and line-height
								values from the typographic scale. <strong>Developers</strong>{' '}
								can use the `fontSize` and `lineHeight` props available on
								typographic components which use of the `fontGrid` function.
							</p>
							<TypographyChart />
						</Prose>
					</Stack>
				</PageContent>
			</AppLayout>
		</Box>
	);
}
