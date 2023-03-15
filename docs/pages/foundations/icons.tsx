import { useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { allIcons } from '@ag.ds-next/react/icon';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Select } from '@ag.ds-next/react/select';
import { Columns } from '@ag.ds-next/react/columns';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PageTitle } from '../../components/PageTitle';
import {
	Foundation,
	getFoundation,
	getFoundationBreadcrumbs,
} from '../../lib/mdx/foundations';
import { mdxComponents } from '../../components/mdxComponents';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';
type IconWeight = 'regular' | 'bold';

export default function FoundationsIconsPage({
	breadcrumbs,
	foundation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { description, title, source } = foundation;
	const [size, setSize] = useState<IconSize>('md');
	const [weight, setWeight] = useState<IconWeight>('regular');
	return (
		<>
			<DocumentTitle title={title} description={description} />
			<AppLayout>
				<PageLayout
					editPath="/docs/pages/foundations/icons.tsx"
					breadcrumbs={breadcrumbs}
				>
					<PageTitle title={title} introduction={description} />
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Stack gap={1.5}>
						<H2>All icons</H2>
						<Columns cols={{ xs: 1, sm: 2, md: 3 }} gap={1}>
							<Select
								label="Size"
								hideOptionalLabel
								maxWidth="xl"
								value={size}
								onChange={(e) => setSize(e.target.value as IconSize)}
								options={[
									{ label: 'Small (sm)', value: 'sm' },
									{ label: 'Medium (md)', value: 'md' },
									{ label: 'Large (lg)', value: 'lg' },
									{ label: 'X-Large (xl)', value: 'xl' },
								]}
							/>
							<Select
								label="Weight"
								hideOptionalLabel
								maxWidth="xl"
								value={weight}
								onChange={(e) => setWeight(e.target.value as IconWeight)}
								options={[
									{ label: 'Regular', value: 'regular' },
									{ label: 'Bold', value: 'bold' },
								]}
							/>
						</Columns>
						<Columns cols={{ xs: 1, sm: 2, md: 3 }} gap={1}>
							{Object.keys(allIcons)
								.sort()
								.map((iconName) => {
									const Icon = allIcons[iconName as keyof typeof allIcons];
									return (
										<Flex
											key={iconName}
											flexDirection="column"
											alignItems="center"
											justifyContent="center"
											flexShrink={0}
											rounded
											gap={1}
											padding={2}
											background="shade"
										>
											<Icon size={size} weight={weight} />
											<Text>{iconName}</Text>
										</Flex>
									);
								})}
						</Columns>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	breadcrumbs: Awaited<ReturnType<typeof getFoundationBreadcrumbs>>;
	foundation: Foundation;
}> = async () => {
	const foundation = await getFoundation('icons');
	const breadcrumbs = await getFoundationBreadcrumbs('icons');
	return {
		props: {
			breadcrumbs,
			foundation,
		},
	};
};
