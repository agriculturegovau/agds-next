import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import {
	TableHead,
	TableWrapper,
	Table,
	TableCaption,
	TableBody,
	TableHeader,
	TableCell,
} from '@ag.ds-next/table';
import { Text } from '@ag.ds-next/text';
import { tokens, FontSize, Font } from '@ag.ds-next/core';
import { Stack } from '@ag.ds-next/box';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/summary-list';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { LineHeightChart } from '../../components/TokenCharts';

function FontFamilyTable() {
	const { font } = tokens;

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
						{(Object.entries(font) as [key: Font, value: string][]).map(
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
	const { fontSize } = tokens;

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
						{(Object.keys(fontSize.sm) as FontSize[]).map((token) => {
							const xs = fontSize.xs[token];
							const sm = fontSize.sm[token];
							return (
								<tr key={token}>
									<TableCell>
										<Text as="span" fontSize={token}>
											{token}
										</Text>
									</TableCell>
									<TableCell>{`${sm}rem (${sm * 16}px)`}</TableCell>
									<TableCell>{`${xs}rem (${xs * 16}px)`}</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}

export default function TokensTypographyPage() {
	return (
		<>
			<DocumentTitle title="Typography tokens" />
			<TokenLayout
				title="Typography tokens"
				description="How to do typography"
				editPath="/docs/pages/tokens/typography.tsx"
			>
				<Prose>
					<p>
						A typographic scale was used to create a set of font-size and
						line-height values which have been designed for legibility and can
						be easily be implemented by designers or developers with a
						predictable output.
					</p>
					<p>
						Using the design system&apos;s typography values means any object
						containing text is more likely to align with another element. This
						appearance of a baseline grid is created by automatically rounding
						the line-heights to the nearest grid value 4px, then converting them
						back to a unit-less value.
					</p>
					<p>
						To ensure consistency with other components in the system,{' '}
						<strong>Designers</strong> can use font-size and line-height values
						from the typographic scale. <strong>Developers</strong> can use the
						`fontSize` and `lineHeight` props available on typographic
						components which use of the `fontGrid` function.
					</p>
					<p>We have individual tokens for...</p>
					<ul>
						<li>fontSize</li>
						<li>lineHeight</li>
						<li>font</li>
						<li>fontWeight</li>
					</ul>

					<h2>fontSize</h2>
					<FontSizeTable />
					<h2>lineHeight</h2>
					<LineHeightChart />

					<h2>font</h2>
					<p>A collection of tokens for font family groupings.</p>
					<FontFamilyTable />

					<h2>fontWeight</h2>
					<div className={proseBlockClassname}>
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>normal</SummaryListItemTerm>
								<SummaryListItemDescription>
									Used for the majority of body text
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>bold</SummaryListItemTerm>
								<SummaryListItemDescription>
									Used to draw emphasis
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>
					</div>
				</Prose>
			</TokenLayout>
		</>
	);
}
