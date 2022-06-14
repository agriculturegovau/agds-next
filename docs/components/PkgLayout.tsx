import { Flex, Stack } from '@ag.ds-next/box';

import { PropsWithChildren } from 'react';

import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdxUtils';
import { Text } from '@ag.ds-next/text';
import { H1 } from '@ag.ds-next/heading';
import { ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';

import { PageLayout } from './PageLayout';
import { Body } from '@ag.ds-next/body';
import { SkipLinksProps } from '@ag.ds-next/skip-link';

export function PkgLayout({
	children,
	pkg,
	navLinks,
	breadcrumbs,
	skipLinks,
	editPath,
}: PropsWithChildren<{
	pkg: Pkg;
	navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
	breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	skipLinks?: SkipLinksProps['links'];
	editPath?: string;
}>) {
	return (
		<PageLayout
			sideNav={{
				title: 'Packages',
				titleLink: '/packages',
				items: navLinks,
			}}
			editPath={editPath}
			breadcrumbs={breadcrumbs}
			skipLinks={skipLinks}
		>
			<Stack gap={1}>
				<Flex flexDirection="column" gap={0.25}>
					<Text fontSize="sm" color="muted">
						v{pkg.version}
					</Text>
					<H1>{pkg.data.title}</H1>
					{pkg.data.description && (
						<Text fontSize="lg">{pkg.data.description}</Text>
					)}
				</Flex>
				{pkg.storybookPath && (
					<div>
						<ButtonLink
							target="_blank"
							href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
							rel="noopener noreferrer"
							variant="secondary"
							iconAfter={ExternalLinkIcon}
						>
							View in Storybook
						</ButtonLink>
					</div>
				)}
				<Body>
					<pre>
						<code>
							yarn add {pkg.name}@{pkg.version}
						</code>
					</pre>
				</Body>
				{/** FIXME Add secondary nav using new component `secondary-nav` and `pkg.subNavItems` This will be added when the */}
				{children}
			</Stack>
		</PageLayout>
	);
}
