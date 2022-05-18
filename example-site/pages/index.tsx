import type { NextPage } from 'next';
import { Body } from '@ag.ds-next/body';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { H2 } from '@ag.ds-next/heading';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ArticleCard } from '../components/ArticleCard';

const Home: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<Content background="shade">
					<Columns gap={1}>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<Stack gap={2} alignItems="flex-start">
								<Body>
									<h2>Welcome to the AG Design-System</h2>
									<p>
										Sed posuere consectetur est at lobortis. Aenean eu leo quam.
										Pellentesque ornare sem lacinia quam venenatis vestibulum.
										Donec id elit non mi porta gravida at eget metus. Nulla
										vitae elit libero, a pharetra augue. Cum sociis natoque
										penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.
									</p>
								</Body>
								<Button>Primary call to action</Button>
							</Stack>
						</Column>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<img
								src="/agds-next/example-site/placeholder/600X260.png"
								alt="Place holder image"
								css={{ width: '100%' }}
							/>
						</Column>
					</Columns>
				</Content>

				<Content>
					<Body>
						<h2>Some highlighted content</h2>
						<p>
							Explain some important information upfront, what is the product or
							service. What is the role of it. How does the user get started
							using it. Keep this text simple and informative. Vestibulum non
							consequat tell us.{' '}
							<a
								target="_blank"
								href="https://guides.service.gov.au/content-guide/"
								rel="noreferrer"
							>
								Content guide
							</a>
						</p>
					</Body>
				</Content>

				<Content background="shade">
					<Body>
						<h2>Sub content</h2>
						<p>
							Sub content Content that is important to have on the home page but
							not so important that it has to be visible at the top of the page.
							This could include contact information, more detailed explanation
							of the functionality of a product or service.
						</p>
					</Body>
					<Flex gap={1}>
						<Button>Primary call to action</Button>
						<Button variant="secondary">Secondary call to action</Button>
					</Flex>
				</Content>

				<Content>
					<H2>Articles</H2>
					<Columns gap={1} as="ul">
						{Array.from(Array(3).keys()).map((idx) => (
							<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, lg: 4 }}>
								<ArticleCard />
							</Column>
						))}
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default Home;
