import { boxPalette } from '@ag.ds-next/react/core';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/react/card';
import { mq } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { withBasePath } from '../lib/img';

export function TemplateCard({
	title,
	slug,
	description,
	group,
}: {
	title: string;
	slug: string;
	description: string;
	group: string;
}) {
	return (
		<Card as="li" clickable shadow>
			<img
				src={withBasePath(`/img/templates/${slug}.webp`)}
				role="presentation"
				alt=""
				height="auto"
				width="100%"
				css={mq({
					borderBottom: `1px solid ${boxPalette.borderMuted}`,
					objectFit: 'cover',
				})}
			/>
			<CardInner>
				<Stack gap={1} flexGrow={1}>
					<Box as="h3">
						<CardLink href={`/patterns/templates/${group}/${slug}`}>
							{title}
						</CardLink>
					</Box>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
}
