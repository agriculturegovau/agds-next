import { Prose } from '@ag.ds-next/design-system';
import { DocumentTitle } from '../../components/DocumentTitle';
import { MaxWidthChart } from '../../components/TokenCharts';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensMaxWidthsPage() {
	return (
		<>
			<DocumentTitle title="Max-Width tokens" />
			<TokenLayout
				title="Max-Width tokens"
				description="Used to set the maximum width of a container in a page layout."
				editPath="/docs/pages/tokens/max-width.tsx"
			>
				<Prose>
					<MaxWidthChart />
				</Prose>
			</TokenLayout>
		</>
	);
}
