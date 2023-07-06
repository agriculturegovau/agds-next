import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { Box } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { TokenLayout } from '../../../components/TokenLayout';
import { BorderWidthChart } from '../../../components/TokenCharts';

export default function TokensBorderWidthPage() {
	return (
		<>
			<TokenLayout slug="border">
				<InpageNav
					title="On this page"
					links={[
						{ href: '#border-width', label: 'Border width' },
						{ href: '#border-radius-tokens', label: 'Border radius tokens' },
					]}
				/>
				<Prose>
					<h2 id="border-width">Border width</h2>
					<p>
						The following {Object.keys(tokens.borderWidth).length} tokens can be
						used to set the thickness of borders.
					</p>
					<BorderWidthChart />
					<h2 id="border-radius-tokens">Border radius tokens</h2>
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
