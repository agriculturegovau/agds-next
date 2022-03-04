import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { Body } from '@ag.ds-next/body';

export const ArticleCard = () => (
	<Card clickable shadow>
		<img
			src="/agds-next/example-site/placeholder/600X260.png"
			alt="Place holder image"
			css={{ width: '100%' }}
		/>
		<CardInner>
			<Body>
				<h3>
					<CardLink href="#">Title of article</CardLink>
				</h3>
				<p>Some text</p>
			</Body>
		</CardInner>
	</Card>
);
