import { tokens } from '@ag.ds-next/core';
import { Prose } from '@ag.ds-next/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { MaxWidthChart } from '../../components/TokenCharts';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensMaxWidthsPage() {
	return (
		<>
			<DocumentTitle title="Max width tokens" />
			<TokenLayout
				title="Max width tokens"
				description="Used to set the maximum width of elements or containers in a page layout."
				editPath="/docs/pages/tokens/max-width.tsx"
			>
				<Prose>
					<MaxWidthChart tokens={tokens.maxWidth} />
					<h2>Field</h2>
					<p>Maximum widths of form fields.</p>
					<MaxWidthChart tokens={tokens.maxWidth.field} />
				</Prose>
			</TokenLayout>
		</>
	);
}
