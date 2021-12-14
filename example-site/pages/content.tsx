import type { NextPage } from 'next';
import Head from 'next/head';

import { Body } from '@ag.ds-next/body';
import { Box, BoxProps, Flex, Stack } from '@ag.ds-next/box';

import { Header } from '../components/header';

const ContentPage: NextPage = () => {
	return (
		<Box fontFamily="body" theme="light">
			<Head>
				<title>AG Design System | Example site</title>
				<meta
					name="description"
					content="An example of things that can be made with AG-DS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<Exp_Content>
					<Box theme="dark">
						<Body>
							<img
								src="https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/review/hero_image/2021-Ford-Match-1-Hatch-Orange-Press-1001x565-2.jpg"
								css={{ maxWidth: 800 }}
							/>
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
					</Box>
				</Exp_Content>
			</main>
		</Box>
	);
};

export default ContentPage;

type ContentProps = {
	spacing?: 'small' | 'medium' | 'large';
	theme?: BoxProps['theme'];
	background?: BoxProps['background'];
};

const Exp_Content = ({
	spacing = 'small',
	theme,
	background,
	children,
}: React.PropsWithChildren<ContentProps>) => {
	// changes at breakpoints
	const paddingY = (
		{
			small: { xs: 1, md: 2 },
			medium: { xs: 1, md: 3 },
			large: { xs: 1, md: 4 },
		} as const
	)[spacing];

	return (
		<Flex
			as="section"
			justifyContent="center"
			theme={theme}
			background={background}
		>
			<Stack
				width="100%"
				maxWidth={1280}
				paddingY={paddingY}
				paddingX={2} /* probably changes at breakpoints */
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
};
