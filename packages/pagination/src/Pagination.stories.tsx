// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Box } from '@ag.ds-next/box';
// import { Text } from '@ag.ds-next/text';
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
import { Pagination } from './Pagination';

export default {
	title: 'navigation/Pagination',
	component: { Pagination },
};

export const Basic = () => {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<Pagination
			currentPage={currentPage}
			onChange={setCurrentPage}
			limit={5}
			totalPages={10}
		/>
	);
};

export const ManyPages = () => {
	const [currentPage, setCurrentPage] = useState(50);
	return (
		<Pagination
			currentPage={currentPage}
			onChange={setCurrentPage}
			limit={5}
			totalPages={300}
		/>
	);
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TablePagination() {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, error } = useSWR<{
		count: number;
		results: { name: string; population: string; climate: string }[];
	}>(`https://swapi.dev/api/planets/?page=${currentPage}`, fetcher);

	if (error) return <p>Error</p>;
	if (!data && !error) return <p>Loading...</p>;

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
			<Pagination
				currentPage={currentPage}
				onChange={setCurrentPage}
				limit={5}
				totalPages={totalPages}
			/>
		</Stack>
	);
}
