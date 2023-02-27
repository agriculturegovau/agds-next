import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { H1, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

const applicationTypes = [
	{
		label: 'Pre-arrival report',
		href: '/pre-arrival-report',
	},
	{
		label: 'Human health update',
		href: '/human-health-update',
	},
	{
		label: 'Ballast water report',
		href: '/ballast-water-report',
	},
	{
		label: 'Non first point of entry application',
		href: '/non-first-point-of-entry-application',
	},
	{
		label: 'Australian sourced ballast application',
		href: '/australian-sourced-ballast-application',
	},
];

export const MarsApplications = () => {
	return (
		<Fragment>
			<SectionContent>
				<Stack gap={1.5}>
					<H1>Applications</H1>
					<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
						{applicationTypes.map(({ label, href }, idx) => (
							<Card as="li" key={idx} shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<H3 as="h2">
											<CardLink href={href}>{label}</CardLink>
										</H3>
										<Text as="p">
											Short descriptive paragraph designed to fit in this space
											- sm/default (P).
										</Text>
									</Stack>
								</CardInner>
							</Card>
						))}
					</Columns>
				</Stack>
			</SectionContent>
		</Fragment>
	);
};
