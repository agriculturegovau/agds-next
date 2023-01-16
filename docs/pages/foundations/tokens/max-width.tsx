import { tokens } from '@ag.ds-next/react/core';
import { Prose } from '@ag.ds-next/react/prose';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { MaxWidthChart } from '../../../components/TokenCharts';
import { TokenLayout } from '../../../components/TokenLayout';
import { getTokensBreadcrumbs, TOKEN_PAGES } from '../../../content/tokens';

export default function TokensMaxWidthsPage() {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.maxWidth.pageTitle}
				description={TOKEN_PAGES.maxWidth.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.maxWidth.pageTitle}
				description={TOKEN_PAGES.maxWidth.description}
				breadcrumbs={getTokensBreadcrumbs(TOKEN_PAGES.maxWidth)}
				editPath="/docs/pages/foundations/tokens/max-width.tsx"
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
