import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Box } from '@ag.ds-next/box';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { BorderWidthChart } from '../../components/TokenCharts';

export default function TokensBorderWidthPage() {
	return (
		<>
			<DocumentTitle title="Border tokens" />
			<TokenLayout
				title="Border tokens"
				description="All tokens related to borders"
				editPath="/docs/pages/tokens/border.tsx"
			>
				<Prose>
					<h2>Border Width</h2>
					<p>These tokens are used to set the width of borders.</p>
					<BorderWidthChart />
					<h2>Border radius tokens</h2>
					<p>These tokens are used to apply rounded corners to components.</p>
					<p>
						We have one border radius token, which is 4px. It is available by
						setting <code>rounded</code> on the <code>Box</code> component.
					</p>

					<Box border rounded padding={0.5} className={proseBlockClassname}>
						A Box with rounded corners
					</Box>
				</Prose>
			</TokenLayout>
		</>
	);
}
