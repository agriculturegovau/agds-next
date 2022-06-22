import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import useSWR from 'swr';
import { Box, Stack } from '@ag.ds-next/box';
import {
	Table,
	TableCaption,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '@ag.ds-next/table';
import { LoadingDots } from '@ag.ds-next/loading';
import { Text } from '@ag.ds-next/text';
import { PaginationButtons } from './PaginationButtons';

export default {
	title: 'navigation/Pagination/PaginationButtons',
	component: PaginationButtons,
} as ComponentMeta<typeof PaginationButtons>;

const Template: ComponentStory<typeof PaginationButtons> = (props) => {
	const [currentPage, setCurrentPage] = useState(5);
	return (
		<PaginationButtons
			{...props}
			currentPage={currentPage}
			onChange={setCurrentPage}
		/>
	);
};

export const OnLight: ComponentStory<typeof PaginationButtons> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	totalPages: 10,
};

export const OnDark: ComponentStory<typeof PaginationButtons> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	totalPages: 10,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
	totalPages: 300,
};

export const CustomLimit = Template.bind({});
CustomLimit.args = {
	limit: 5,
	totalPages: 300,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TableWithRemoteData() {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, error } = useSWR<{
		count: number;
		results: { name: string; population: string; climate: string }[];
	}>(`https://swapi.dev/api/planets/?page=${currentPage}`, fetcher);

	if (error) return <Text>An error occurred</Text>;
	if (!data) return <LoadingDots aria-label="Loading data" />;

	const totalPages = (data?.count || 0) / 10;

	return (
		<Stack gap={1}>
			<Table>
				<TableCaption>Star wars planets</TableCaption>
				<TableHead>
					<tr>
						<TableHeader scope="col">Name</TableHeader>
						<TableHeader scope="col">Climate</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Population
						</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{data?.results.map((item) => (
						<tr key={item.name}>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.climate}</TableCell>
							<TableCell textAlign="right">{item.population}</TableCell>
						</tr>
					))}
				</TableBody>
			</Table>
			<PaginationButtons
				currentPage={currentPage}
				onChange={setCurrentPage}
				totalPages={totalPages}
			/>
		</Stack>
	);
}
