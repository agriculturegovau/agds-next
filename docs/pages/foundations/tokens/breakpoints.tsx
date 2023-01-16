import { Prose } from '@ag.ds-next/react/prose';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { BreakpointsChart } from '../../../components/TokenCharts';
import { TokenLayout } from '../../../components/TokenLayout';
import { TOKEN_PAGES, getTokensBreadcrumbs } from '../../../content/tokens';

export default function TokensBreakpointsPage() {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.breakpoints.pageTitle}
				description={TOKEN_PAGES.breakpoints.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.breakpoints.pageTitle}
				description={TOKEN_PAGES.breakpoints.description}
				breadcrumbs={getTokensBreadcrumbs(TOKEN_PAGES.breakpoints)}
				editPath="/docs/pages/foundations/tokens/breakpoints.tsx"
			>
				<Prose>
					<p>There are 5 predefined breakpoint tokens:</p>
					<BreakpointsChart />
				</Prose>
			</TokenLayout>
		</>
	);
}
