import type { NextPage } from 'next';
import Head from 'next/head';

import { Body } from '@ag.ds-next/body';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { SideNav } from '@ag.ds-next/side-nav';

import { Layout } from '../components/Layout';

const ContentPage: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>AG Design System | Example site</title>
				<meta
					name="description"
					content="An example of things that can be made with AG-DS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Content>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 3 }}>
						<SideNav
							collapseTitle="In this section"
							title="Lodging your tax return"
							variant="light"
							titleLink="#welcome"
							activePath="#in-detail/record-keeping/incorrect-amounts"
							items={sideNavItems}
						/>
					</Column>
					<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
						<Body>
							<h1>Content page example (h1)</h1>
							<p>
								The page heading communicates the main focus of the page. Make
								your page heading descriptive and keep it succinct.
							</p>
							<p>
								These headings introduce, respectively, sections and subsections
								within your body copy. As you create these headings, follow the
								same guidelines that you use when writing section headings: Be
								succinct, descriptive, and precise.
							</p>
							<h2>Subsection heading (h2)</h2>
							<p>
								The particulars of your body copy will be determined by the
								topic of your page. Regardless of topic, it’s a good practice to
								follow the inverted pyramid structure when writing copy: Begin
								with the information that’s most important to your users and
								then present information of less importance.
							</p>
							<p>
								Keep each section and subsection focused — a good approach is to
								include one theme (topic) per section.
							</p>
							<h3>Subsection heading (h3)</h3>
							<p>
								Use the side navigation menu to help your users quickly skip to
								different sections of your page. The menu is best suited to
								displaying a hierarchy with 1 to 3 levels and, as we mentioned,
								to display the sub-navigation of a given page.
							</p>
							<p>
								Read more about how to best design and structure your web
								content using the{' '}
								<a
									target="_blank"
									href="https://guides.service.gov.au/content-guide/"
									rel="noreferrer"
								>
									content guide
								</a>
								.
							</p>

							<code>hello();</code>

							<dl>
								<dt>Coffee</dt>
								<dd>Black hot drink</dd>
								<dt>Milk</dt>
								<dd>White cold drink</dd>
							</dl>

							<ol>
								<li>Coffee</li>
								<li>Tea</li>
								<li>Milk</li>
							</ol>

							<ul>
								<li>Coffee</li>
								<li>Tea</li>
								<li>Milk</li>
							</ul>
						</Body>
					</Column>
				</Columns>
			</Content>
		</Layout>
	);
};

const sideNavItems = [
	{
		href: '#welcome',
		label: 'Welcome',
	},
	{
		href: '#one',
		label: 'Do you need to lodge a tax return?',
	},
	{
		href: '#two',
		label: 'Lodge online',
		items: [
			{
				href: '#three',
				label: 'Pre-filling your online tax return',
			},
		],
	},
	{ href: '#four', label: "What's new for individuals" },
	{ href: '#five', label: 'Why you may receive a tax bill' },
	{
		href: '#in-detail',
		label: 'In detail',
		items: [
			{
				href: '#in-detail/record-keeping',
				label: 'Record keeping',
				items: [
					{
						href: '#in-detail/record-keeping/tax',
						label: 'Keeping your tax records',
					},
					{
						href: '#in-detail/record-keeping/incorrect-amounts',
						label: 'Incorrect amounts',
					},
				],
			},
			{
				href: '#ten',
				label: 'Tax receipt',
			},
			{
				href: '#eleven',
				label: 'Pre-fill availability',
			},
		],
	},
];

export default ContentPage;
