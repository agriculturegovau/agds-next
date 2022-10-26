import {
	Stack,
	H3,
	Text,
	Card,
	CardInner,
	CardLink,
	Columns,
} from '@ag.ds-next/react';

const items = [
	{
		title: 'Payments',
		slug: '/not-found',
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
		slug: '/not-found',
		description:
			'Need help? Our support team are available via phone, email and online chat.',
	},
	{
		title: 'Housing',
		slug: '/not-found',
		description:
			'Find help with housing and how to apply for rental assistance.',
	},
	{
		title: 'Waste removal',
		slug: '/not-found',
		description: 'Find waste and recycling management facilities near you.',
	},
	{
		title: 'Urban services',
		slug: '/not-found',
		description:
			'Pay a notice, or apply for permits, approvals and certificates.',
	},
];

export function ServicesCardList() {
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
