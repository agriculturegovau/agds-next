import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { Box } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { BorderWidthChart } from '../../components/TokenCharts';

export default function TokensBorderWidthPage() {
	return (
		<>
			<DocumentTitle title="Border tokens" />
			<TokenLayout
				title="Border tokens"
				description="Guidelines for using borders across the Design System"
				editPath="/docs/pages/tokens/border.tsx"
			>
				<Prose>
					<h2>Border Width</h2>
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
