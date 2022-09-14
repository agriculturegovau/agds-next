import { Stack } from '@ag.ds-next/box';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';

const items = [
	{
		title: 'Fix my street',
		slug: '/services/fix-my-street',
		description:
			'Use our online tool to report an issue and track its progress.',
	},
	{
		title: 'Register for a parking permit',
		slug: '/services/registrations/parking-permit',
		description: 'Pay for a permit to park in authorised zones in your area.',
	},
	{
		title: 'Vouchers',
		slug: '/services/support',
		description:
			'Find vouchers your customers can use, and grow your business.',
	},
	{
		title: 'Register a pet',
		slug: '/services/registrations/pet',
		description: 'TODO.',
	},
	{
		title: 'Support',
		slug: '/services/support',
		description:
			'Find support services and resources available to your business.',
	},
	{
		title: 'Pay a fine',
		slug: '/services/pay-a-fine',
		description: 'Manage and pay traffic and parking infringements.',
	},
];

export function ServicesRecentlyViewedCardList() {
	return (
		<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
			{items.map((item) => (
				<Card as="li" key={item.slug} shadow clickable>
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
