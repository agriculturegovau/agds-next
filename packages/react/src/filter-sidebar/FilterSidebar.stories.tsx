import { StoryObj, Meta } from '@storybook/react';
import {
	DataProvider,
	SortAndFilterProvider,
} from '../../../../.storybook/stories/DataFiltering/lib/contexts';
import { useSortAndFilter } from '../../../../.storybook/stories/DataFiltering/lib/useSortAndFilter';
import { useFetchData } from '../../../../.storybook/stories/DataFiltering/lib/useFetchData';
import { ListFiltering } from '../../../../.storybook/stories/DataFiltering/ListFiltering';
import { Card, CardInner, CardLink } from '../card';
import { Column, Columns } from '../columns';
import { PageContent } from '../content';
import { Flex } from '../flex';
import { FormStack } from '../form-stack';
import { H3 } from '../heading';
import { SkipLinks } from '../skip-link';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextInput } from '../text-input';
import { FilterSidebar } from './FilterSidebar';

const meta: Meta<typeof FilterSidebar> = {
	title: 'Layout/FilterSidebar',
	component: FilterSidebar,
};

export default meta;

type Story = StoryObj<typeof FilterSidebar>;

export const Basic: Story = {
	args: {
		children: <TextInput label="Example input" value="Example" />,
	},
};

export const Layout: Story = {
	render: (args) => {
		const listData: {
			title: string;
			desc: string;
			author: string;
		}[] = [
			{
				title: 'Example article one',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc.',
				author: 'Lando Norris',
			},
			{
				title: 'Example article two',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc.',
				author: 'Toto Wolff',
			},
			{
				title: 'Example article three',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc eget nunc.',
				author: 'Stefano Domenicali',
			},
		];
		return (
			<PageContent>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>

				<Columns gap={{ xs: 1, md: 3 }}>
					<Column columnSpan={{ xs: 12, md: 4 }}>
						<Stack gap={1}>
							<FilterSidebar
								activeFiltersCount={args.activeFiltersCount}
								onClearFilters={console.log}
							>
								<FormStack>
									<TextInput block label="Example input 2" value="Example" />
									<TextInput block label="Example input 3" value="Example" />
									<TextInput block label="Example input 1" value="Example" />
									<TextInput block label="Example input 4" value="Example" />
								</FormStack>
							</FilterSidebar>
						</Stack>
					</Column>
					<Column
						as="main"
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
						columnSpan={{ xs: 12, md: 8 }}
					>
						<Stack gap={2}>
							<Text
								as="h2"
								fontSize="md"
								lineHeight="heading"
								fontWeight={{ xs: 'normal', md: 'bold' }}
							>
								Search results (3)
							</Text>
							<Stack as="ul" gap={1}>
								{listData.map((item) => (
									<Card as="li" shadow clickable key={item.title}>
										<CardInner>
											<Stack gap={0.5} width="100%" flexWrap="wrap">
												<H3>
													<CardLink href="#">{item.title}</CardLink>
												</H3>

												<Text as="p">{item.desc}</Text>

												<Flex
													gap={0.5}
													flexWrap="wrap"
													justifyContent="space-between"
													alignItems="center"
												>
													<Text color="muted" fontSize="xs">
														{item.author}
													</Text>
												</Flex>
											</Stack>
										</CardInner>
									</Card>
								))}
							</Stack>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		);
	},
};

const ListFilteringExample = () => {
	const sortAndFilter = useSortAndFilter();
	const { filters, pagination, sort } = sortAndFilter;
	const data = useFetchData({ filters, pagination, sort });

	return (
		<SortAndFilterProvider value={sortAndFilter}>
			<DataProvider value={data}>
				<ListFiltering />
			</DataProvider>
		</SortAndFilterProvider>
	);
};

export const Full: StoryObj<typeof FilterSidebar> = {
	name: 'Full example',
	render: ListFilteringExample,
};
