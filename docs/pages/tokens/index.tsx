import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../components/DocumentTitle';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { TOKEN_NAV_LINKS } from '../../content/tokens';

const title = 'Tokens';
const description =
	'Our design tokens are the foundation of our design system. They are the building blocks of our components and are used to create a consistent look and feel across all of our products.';

export default function TokensPage() {
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<CategoryPageTemplate
				title={title}
				description={description}
				editPath="/docs/pages/tokens/index.tsx"
			>
				<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }}>
					{TOKEN_NAV_LINKS.map(({ href, label, description }) => (
						<Card key={href} as="li" clickable shadow>
							<Flex flexDirection="column-reverse">
								<CardInner>
									<Stack gap={1} flexGrow={1}>
										<Box as="h3">
											<CardLink href={href}>{label}</CardLink>
										</Box>
										<Text>{description}</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
					))}
				</Columns>
			</CategoryPageTemplate>
		</>
	);
}
