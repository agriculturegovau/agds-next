import { Prose } from '@ag.ds-next/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { BreakpointsChart } from '../../components/TokenCharts';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensBreakpointsPage() {
	return (
		<>
			<DocumentTitle title="Breakpoint tokens" />
			<TokenLayout
				title="Breakpoint tokens"
				description="Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."
				editPath="/docs/pages/tokens/breakpoints.tsx"
			>
				<Prose>
					<p>There are 5 predefined breakpoint tokens:</p>
					<BreakpointsChart />
				</Prose>
			</TokenLayout>
		</>
	);
}
