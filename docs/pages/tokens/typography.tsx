import { Prose } from '@ag.ds-next/prose';
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
import { tokens } from '@ag.ds-next/core';
import { Stack } from '@ag.ds-next/box';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { TypographyChart } from '../../components/TokenCharts';
import { SegmentedControl } from '../../components/SegmentedControl';

function FontFamilyTable() {
	const { font } = tokens;

	const fontDescriptions = {
		body: 'Used as the default font for all text',
		monospace: 'Used for code and other monospaced text',
	};

	return (
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
					{Object.entries(font).map(([key, value]) => (
						<tr key={key}>
							<TableCell>
								<Text as="span" fontFamily={key}>
									{key}
								</Text>
							</TableCell>
							<TableCell>{value}</TableCell>
							<TableCell>{fontDescriptions[key]}</TableCell>
						</tr>
					))}
				</TableBody>
			</Table>
		</TableWrapper>
	);
}
function FontSizeTable() {
	const { fontSize } = tokens;
	const xs = fontSize.xs;
	const sm = fontSize.sm;

	return (
		<Stack>
			<SegmentedControl options={['xs', 'sm']} selected="sm" />
			<TableWrapper>
				<Table>
					<TableCaption>Font size tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Description</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(sm).map(([key, value]) => (
							<tr key={key}>
								<TableCell>
									<Text as="span" fontSize={key}>
										{key}
									</Text>
								</TableCell>
								<TableCell>{`${value}rem (${value * 16}px)`}</TableCell>
								{/* <TableCell>{fontDescriptions[key]}</TableCell> */}
							</tr>
						))}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}
function FontWeightTable() {
	return (
		<TableWrapper>
			<Table>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<tr>
						<TableHeader scope="col">Token</TableHeader>
						<TableHeader scope="col">Value</TableHeader>
						<TableHeader scope="col">Description</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<TableCell>One</TableCell>
						<TableCell>7,670,700</TableCell>
						<TableCell>Some explainer text here</TableCell>
					</tr>
				</TableBody>
			</Table>
		</TableWrapper>
	);
}
function LineHeightTable() {
	return (
		<TableWrapper>
			<Table>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<tr>
						<TableHeader scope="col">Token</TableHeader>
						<TableHeader scope="col">Value</TableHeader>
						<TableHeader scope="col">Description</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<TableCell>One</TableCell>
						<TableCell>7,670,700</TableCell>
						<TableCell>Some explainer text here</TableCell>
					</tr>
				</TableBody>
			</Table>
		</TableWrapper>
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
						<li>font</li>
						<li>fontSize</li>
						<li>fontWeight</li>
						<li>lineHeight</li>
					</ul>
					<TypographyChart />

					<h2>font</h2>
					<FontFamilyTable />
					<h2>fontSize</h2>
					<FontSizeTable />
					<h2>fontWeight</h2>
					<FontWeightTable />
					<h2>lineHeight</h2>
					<LineHeightTable />
				</Prose>
			</TokenLayout>
		</>
	);
}
