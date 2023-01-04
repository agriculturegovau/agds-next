import { Stack } from '@ag.ds-next/react/box';
import { H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';

const items = [
	{
		title: 'Register your car',
		slug: '/not-found',
		description: 'Register for a parking permit.',
	},
	{
		title: 'Register for a parking permit',
		slug: '/not-found',
		description: 'Pay for a permit to park in authorised zones in your area.',
	},
	{
		title: 'Register a business',
		slug: '/not-found',
		description: 'Apply for an ABN, and register a business or business name.',
	},
	{
		title: 'Register a pet',
		slug: '/services/registrations/pet',
		description:
			'Registering domestic animals is a requirement of pet ownership.',
	},
	{
		title: 'Register for business vouchers',
		slug: '/not-found',
		description:
			'Find out what vouchers your business may be eligible to offer customers',
	},
	{
		title: 'Register an event',
		slug: '/not-found',
		description:
			"You'll need to register if your event serves food or alcohol.",
	},
];

export function RegistrationsCardList() {
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
