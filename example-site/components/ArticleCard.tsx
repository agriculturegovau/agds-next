import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export const ArticleCard = () => (
	<Card clickable shadow>
		<img
			src="/agds-next/example-site/placeholder/600X260.png"
			alt=""
			css={{ width: '100%' }}
			role="presentation"
		/>
		<CardInner>
			<Stack gap={1}>
				<Heading type="h3">
					<CardLink href="#">Title of article</CardLink>
				</Heading>
				<Text as="p">Some text</Text>
			</Stack>
		</CardInner>
	</Card>
);
