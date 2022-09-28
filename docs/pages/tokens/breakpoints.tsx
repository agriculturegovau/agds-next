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
				description="Breakpoints are points where the website content responds according
        to the device width, allowing you to show the best possible layout
        to the user."
				editPath="/docs/pages/tokens/breakpoints.tsx"
			>
				<Prose>
					<p>
						You can see breakpoints in action where a layout would change from a
						two to three column grid, as an example.
					</p>
					<BreakpointsChart />
				</Prose>
			</TokenLayout>
		</>
	);
}
