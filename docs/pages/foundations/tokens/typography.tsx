import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import {
	TableHead,
	TableWrapper,
	Table,
	TableCaption,
	TableBody,
	TableHeader,
	TableCell,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { tokens, FontSize, Font } from '@ag.ds-next/react/core';
import { Stack } from '@ag.ds-next/react/stack';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import { LineHeightTokenChart } from '../../../components/TokenCharts';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TokensTypographyPage() {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.typography.pageTitle}
				description={TOKEN_PAGES.typography.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.typography.pageTitle}
				description={TOKEN_PAGES.typography.description}
				editPath="/docs/pages/foundations/tokens/typography.tsx"
			>
				<InpageNav
					title="On this page"
					links={[
						{ href: '#font-size', label: 'Font size' },
						{ href: '#line-height', label: 'Line height' },
						{ href: '#font-family', label: 'Font family' },
						{ href: '#font-weight', label: 'Font weight' },
					]}
				/>
				<Prose>
					<h2 id="font-size">Font size</h2>
					<p>
						A typographic scale of 1.25 was used to create a limited set of font
						sizes. This helps ensure that text looks balanced and consistent.
						Font sizes were rounded to to full pixel values for simplicity.
					</p>
					<FontSizeTable />

					<h2 id="line-height">Line height</h2>
					<p>
						A set of predefined line heights that align to a 4px grid. This
						helps achieve better alignment across website elements.
					</p>
					<LineHeightTokenChart />

					<h2 id="font-family">Font family</h2>
					<p>
						The design system uses system fonts to decrease file size and
						increase page speed.
					</p>
					<p>
						Government services are provided for everyone, regardless of their
						situation or location. By choosing to use system fonts users
						download less data and make fewer HTTP requests. This means that
						people on low-end devices or internet connections in remote areas
						can access government services easier.
					</p>
					<FontFamilyTable />

					<h2 id="font-weight">Font weight</h2>
					<p>
						Use 2 font weights, bold and normal, to help convey visual hierarchy
						amongst text. Primary text like headings are generally bold to make
						them more prominent. Use a normal font weight for less important
						text.
					</p>
					<FontWeightTable />
				</Prose>
			</TokenLayout>
		</>
	);
}

function FontFamilyTable() {
	const fontDescriptions = {
		body: 'Used as the default font for all text',
		monospace: 'Used for code and other monospaced text',
	};
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Font family tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Description</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{(Object.entries(tokens.font) as [key: Font, value: string][]).map(
							([key, value]) => (
								<tr key={key}>
									<TableCell>
										<Text as="span" fontFamily={key}>
											{key}
										</Text>
									</TableCell>
									<TableCell>{value}</TableCell>
									<TableCell>{fontDescriptions[key]}</TableCell>
								</tr>
							)
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
}

function FontSizeTable() {
	return (
		<Stack className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Font size tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Value (mobile viewports)</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{(Object.keys(tokens.fontSize.sm) as FontSize[]).map((token) => {
							const xs = tokens.fontSize.xs[token];
							const sm = tokens.fontSize.sm[token];
							return (
								<tr key={token}>
									<TableCell>
										<Text as="span" fontSize={token} lineHeight="nospace">
											{token}
										</Text>
									</TableCell>
									<TableCell>
										{sm}rem ({sm * 16}px)
									</TableCell>
									<TableCell>
										{xs}rem ({xs * 16}px)
									</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}

function FontWeightTable() {
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Font weight tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col" width="75%">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						<tr>
							<TableCell>
								<Text as="span">Normal</Text>
							</TableCell>
							<TableCell>normal</TableCell>
							<TableCell>Used for the majority of body text</TableCell>
						</tr>
						<tr>
							<TableCell>
								<Text as="span" fontWeight="bold">
									Bold
								</Text>
							</TableCell>
							<TableCell>bold</TableCell>
							<TableCell>Used to draw emphasis</TableCell>
						</tr>
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
}
