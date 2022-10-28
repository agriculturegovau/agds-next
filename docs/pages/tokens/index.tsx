import { Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { H3 } from '@ag.ds-next/react/heading';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout, navLinks } from '../../components/TokenLayout';

export default function TokensPage() {
	return (
		<>
			<DocumentTitle title="Tokens" />
			<TokenLayout
				title="Design Tokens"
				description="Our Design Tokens are the foundation of our design system. They are the building blocks of our components and are used to create a consistent look and feel across all of our products."
				editPath="/docs/pages/tokens/index.tsx"
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2 }}>
					{navLinks.map((item) => (
						<Card as="li" key={item.href} shadow clickable>
							<CardInner>
								<Stack gap={1}>
									<H3>
										<CardLink href={item.href}>{item.label}</CardLink>
									</H3>
								</Stack>
							</CardInner>
						</Card>
					))}
				</Columns>
			</TokenLayout>
		</>
	);
}
