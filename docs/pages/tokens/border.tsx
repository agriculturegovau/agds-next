import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Box } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { BorderWidthChart } from '../../components/TokenCharts';
import { TOKEN_PAGES } from '../../content/tokens';

export default function TokensBorderWidthPage() {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.border.pageTitle}
				description={TOKEN_PAGES.border.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.border.pageTitle}
				description={TOKEN_PAGES.border.description}
				editPath="/docs/pages/tokens/border.tsx"
			>
				<Prose>
					<h2>Border width</h2>
					<p>
						The following {Object.keys(tokens.borderWidth).length} tokens can be
						used to set the thickness of borders.
					</p>
					<BorderWidthChart />
					<h2>Border radius tokens</h2>
					<p>
						Use the following border radius token to apply rounded corners to
						containers.
					</p>

					<ul>
						<li>{tokens.borderRadius}px</li>
					</ul>

					<p>
						Use it by setting <code>rounded</code> on the Box component as seen
						in the following example.
					</p>

					<Box border rounded padding={0.5} className={proseBlockClassname}>
						A Box with rounded corners
					</Box>
				</Prose>
			</TokenLayout>
		</>
	);
}
