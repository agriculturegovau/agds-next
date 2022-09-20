import { Stack } from '@ag.ds-next/box';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';

const items = [
	{
		title: 'Payments',
		slug: '/services/payments',
		description:
			'Paperless payments can be made at a time and place that suits you.',
	},
	{
		title: 'Registrations',
		slug: '/services/registrations',
		description:
			'Access and maintain all your business registration tasks in one place.',
	},
	{
		title: 'Support',
		slug: '/services/support',
		description:
			'Need help? Our support team are availble via phone, email and online chat.',
	},
	{
		title: 'Housing',
		slug: '/services/housing',
		description:
			'Find help with housing and how to apply for rental assistance..',
	},
	{
		title: 'Waste removal',
		slug: '/services/waste-removal',
		description: 'Find waste and recycling management facilities near you.',
	},
	{
		title: 'Urban services',
		slug: '/services/urban-services',
		description:
			'Pay a notice, or apply for permits, approvals and certificates.',
	},
];

export function ServicesCardList() {
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
