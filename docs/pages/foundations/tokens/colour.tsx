import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { Box } from '@ag.ds-next/react/box';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { Column, Columns } from '@ag.ds-next/react/columns';
import {
	ColorTable,
	colourTokens,
	getTokensArrayFromObject,
} from '../../../components/TokenColorTable';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import { LinkComponent } from '../../../components/LinkComponent';
import { withBasePath } from '../../../lib/img';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TokensColorPage() {
	return (
		<Box background="body">
			<DocumentTitle
				title={TOKEN_PAGES.colour.pageTitle}
				description={TOKEN_PAGES.colour.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.colour.pageTitle}
				description={TOKEN_PAGES.colour.description}
				editPath="/docs/pages/foundations/tokens/colour.tsx"
			>
				<InpageNav
					title="On this page"
					links={[
						{ href: '#colour-palettes', label: 'Colour palettes' },
						{ href: '#foreground-colours', label: 'Foreground colours' },
						{ href: '#background-colours', label: 'Background colours' },
						{ href: '#border-colours', label: 'Border colours' },
						{ href: '#system-colours', label: 'System colours' },
						{ href: '#miscellaneous-colours', label: 'Miscellaneous colours' },
						{ href: '#usage-guidelines', label: 'Usage guidelines' },
					]}
				/>
				<Prose>
					<h2 id="colour-palettes">Colour palettes</h2>
					<p>
						There are 2 colour palettes: light and dark. Each colour palette is
						divided into foreground, background, border, and system colours
						which all have a specific purpose.
					</p>
					<h2 id="foreground-colours">Foreground colours</h2>
					<p id="foreground-colours-description">
						Designed to sit on top of background colours to ensure contrast
						ratios meet WCAG 2.1 level AA accessibility requirements.
					</p>
					<h3 id="foreground-colours-light">Light palette</h3>
					<ColorTable
						aria-labelledby="foreground-colours foreground-colours-light"
						aria-describedby="foreground-colours-description"
						tokens={getTokensArrayFromObject(colourTokens.foreground, 'light')}
					/>
					<h3 id="foreground-colours-dark">Dark palette</h3>
					<Box background="body" className={proseBlockClassname} palette="dark">
						<ColorTable
							aria-labelledby="foreground-colours foreground-colours-dark"
							aria-describedby="foreground-colours-description"
							tokens={getTokensArrayFromObject(colourTokens.foreground, 'dark')}
						/>
					</Box>

					<h2 id="background-colours">Background colours</h2>
					<p id="background-colours-description">
						Designed to sit under foreground colours to ensure contrast ratios
						meet WCAG 2.1 level AA accessibility requirements. Each colour
						palette has 2 main background colours to choose from, the default
						background (body) and a darker alternative (body-alt). Shades can be
						used to help differentiate or highlight content against the body
						background colours.
					</p>
					<h3 id="background-colours-light">Light palette</h3>
					<ColorTable
						aria-labelledby="background-colours background-colours-light"
						aria-describedby="background-colours-description"
						tokens={getTokensArrayFromObject(colourTokens.background, 'light')}
					/>
					<h3 id="background-colours-dark">Dark palette</h3>
					<Box background="body" className={proseBlockClassname} palette="dark">
						<ColorTable
							aria-labelledby="background-colours background-colours-dark"
							aria-describedby="background-colours-description"
							tokens={getTokensArrayFromObject(colourTokens.background, 'dark')}
						/>
					</Box>

					<h2 id="border-colours">Border colours</h2>
					<p id="border-colours-description">
						Each colour palette has 2 border colours.
					</p>
					<h3 id="border-colours-light">Light palette</h3>
					<ColorTable
						aria-labelledby="border-colours border-colours-light"
						aria-describedby="border-colours-description"
						tokens={getTokensArrayFromObject(colourTokens.border, 'light')}
					/>
					<h3 id="border-colours-dark">Dark palette</h3>
					<Box background="body" className={proseBlockClassname} palette="dark">
						<ColorTable
							aria-labelledby="border-colours border-colours-dark"
							aria-describedby="border-colours-description"
							tokens={getTokensArrayFromObject(colourTokens.border, 'dark')}
						/>
					</Box>

					<h2 id="system-colours">System colours</h2>
					<p id="system-colours-description">
						System colours are used to indicate status. They’re very prominent
						colours aimed at grabbing the user’s attention. Each system colour
						has a muted version to be used as a background colour.
					</p>
					<h3 id="system-colours-light">Light palette</h3>
					<ColorTable
						aria-labelledby="system-colours system-colours-light"
						aria-describedby="system-colours-description"
						tokens={getTokensArrayFromObject(colourTokens.system, 'light')}
					/>
					<h3 id="system-colours-dark">Dark palette</h3>
					<Box background="body" className={proseBlockClassname} palette="dark">
						<ColorTable
							aria-labelledby="system-colours system-colours-dark"
							aria-describedby="system-colours-description"
							tokens={getTokensArrayFromObject(colourTokens.system, 'dark')}
						/>
					</Box>

					<h2 id="miscellaneous-colours">Miscellaneous colours</h2>
					<p id="miscellaneous-colours-description">
						Miscellaneous colours which do not form part of the above groups.
					</p>
					<h3 id="miscellaneous-colours-light">Light palette</h3>
					<ColorTable
						aria-labelledby="miscellaneous-colours miscellaneous-colours-light"
						aria-describedby="miscellaneous-colours-description"
						tokens={getTokensArrayFromObject(
							colourTokens.miscellaneous,
							'light'
						)}
					/>
					<h3 id="miscellaneous-colours-dark">Dark palette</h3>
					<Box background="body" className={proseBlockClassname} palette="dark">
						<ColorTable
							aria-labelledby="miscellaneous-colours miscellaneous-colours-dark"
							aria-describedby="miscellaneous-colours-description"
							tokens={getTokensArrayFromObject(
								colourTokens.miscellaneous,
								'dark'
							)}
						/>
					</Box>

					<h2 id="usage-guidelines">Usage guidelines</h2>
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
								<LinkComponent href="/guides/custom-theme">
									See the theming guide
								</LinkComponent>{' '}
								for more on how this works in code.
							</p>
						</Column>

						<Box paddingTop={[1, 0]}>
							<img
								src={withBasePath('/img/guides/home.webp')}
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
							<strong>Don’t</strong> mix light and dark variables.
						</li>
						<li>
							<strong>Don’t</strong> pair foreground with foreground or
							background with background.
						</li>
					</ul>
				</Prose>
			</TokenLayout>
		</Box>
	);
}
