import { Stack } from '@ag.ds-next/box';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';

const items = [
	{
		title: 'Fix my street',
		slug: '/not-found',
		description:
			'Use our online tool to report an issue and track its progress.',
	},
	{
		title: 'Register for a parking permit',
		slug: '/not-found',
		description: 'Pay for a permit to park in authorised zones in your area.',
	},
	{
		title: 'Vouchers',
		slug: '/not-found',
		description:
			'Find vouchers your customers can use, and grow your business.',
	},
	{
		title: 'Register a pet',
		slug: '/services/registrations/pet',
		description:
			'Registering domestic animals is a requirement of pet ownership.',
	},
	{
		title: 'Support',
		slug: '/not-found',
		description:
			'Find support services and resources available to your business.',
	},
	{
		title: 'Pay a fine',
		slug: '/not-found',
		description: 'Manage and pay traffic and parking infringements.',
	},
];

export function ServicesRecentlyViewedCardList() {
	return (
		<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
			{items.map((item) => (
				<Card as="li" key={item.title} shadow clickable>
					<CardInner>
						<Stack gap={1}>
							<H3>
								<CardLink href={item.slug}>{item.title}</CardLink>
							</H3>
							<Text as="p">{item.description}</Text>
						</Stack>
					</CardInner>
				</Card>
			))}
		</Columns>
	);
}
