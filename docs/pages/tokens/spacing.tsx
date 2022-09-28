import { Prose } from '@ag.ds-next/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { SpacingChart } from '../../components/TokenCharts';

export default function TokensSpacingPage() {
	return (
		<>
			<DocumentTitle title="Spacing tokens" />
			<TokenLayout
				title="Spacing tokens"
				description="How to do spacing"
				editPath="/docs/pages/tokens/spacing.tsx"
			>
				<Prose>
					<p>
						Tokens to define space between and within (padding and margin)
						elements.
					</p>
					<SpacingChart />
				</Prose>
			</TokenLayout>
		</>
	);
}
