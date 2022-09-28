import { Prose } from '@ag.ds-next/prose';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';

export default function TokensBorderWidthPage() {
	return (
		<>
			<DocumentTitle title="Border radius tokens" />
			<TokenLayout
				title="Border radius tokens"
				description="Apply rounded corners to components"
				editPath="/docs/pages/tokens/border-radius.tsx"
			>
				<Prose>
					<p>
						We have one border radius token, which is 4px. It is available by
						setting <code>rounded</code> on the <code>Box</code> component.
					</p>
				</Prose>
			</TokenLayout>
		</>
	);
}
