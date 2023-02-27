import { Fragment } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import {
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
} from '@ag.ds-next/react/hero-banner';

const features = [
	{ label: 'Applications', href: '/category' },
	{ label: 'Request a Service', href: '/request-service' },
	{ label: 'Inspections', href: '/inspections' },
	{ label: 'Administration', href: '/administration' },
];

export const MarsHomePage = () => {
	return (
		<Fragment>
			<HeroCategoryBanner
				image={
					<img
						src="/example-site/placeholder/hero-banner.jpeg"
						role="presentation"
						alt=""
					/>
				}
			>
				<HeroCategoryBannerTitle>
					Maritime and Aircraft Reporting System
				</HeroCategoryBannerTitle>
			</HeroCategoryBanner>
			<SectionContent>
				<Stack gap={1.5}>
					<H2>Features</H2>
					<Columns as="ul" cols={{ xs: 1, sm: 2, md: 2 }}>
						{features.map(({ label, href }, idx) => (
							<Card as="li" key={idx} shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<H3>
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
