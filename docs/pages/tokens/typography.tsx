import { Prose } from '@ag.ds-next/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { TypographyChart } from '../../components/TokenCharts';

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
				</Prose>
			</TokenLayout>
		</>
	);
}
