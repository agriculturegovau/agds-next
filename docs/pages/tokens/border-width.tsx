import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { BorderWidthChart } from '../../components/TokenCharts';

export default function TokensBorderWidthPage() {
	return (
		<>
			<DocumentTitle title="Border width tokens" />
			<TokenLayout
				title="Border width tokens"
				description="How to do borders"
				editPath="/docs/pages/tokens/border-width.tsx"
			>
				<BorderWidthChart />
			</TokenLayout>
		</>
	);
}
