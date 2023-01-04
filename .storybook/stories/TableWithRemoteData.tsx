import { Fragment, useRef, useState } from 'react';
import useSWR from 'swr';
import { Stack } from '@ag.ds-next/react/box';
import {
	TableWrapper,
	Table,
	TableCaption,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '@ag.ds-next/react/table';
import { SkeletonText } from '@ag.ds-next/react/skeleton';
import { Text } from '@ag.ds-next/react/text';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { PageContent } from '@ag.ds-next/react/content';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';

export default {
	title: 'Examples/RemoteData',
};

const fetcher = async (url: string) => {
	const res = await fetch(url);
	const json = await res.json();
	// Fake a slow network
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return json;
};

export function RemoteDataTable() {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, error } = useSWR<{
		count: number;
		results: { name: string; population: string; climate: string }[];
	}>(`https://swapi.dev/api/planets/?page=${currentPage}`, fetcher);

	const totalPages = useRef<number>(0);
	if (data?.count) totalPages.current = data.count / 10;

	if (error) return <Text>An error occurred</Text>;

	return (
		<PageContent>
			<Stack gap={1}>
				<TableWrapper>
					<Table>
						<TableCaption>Star wars planets</TableCaption>
						<TableHead>
							<tr>
								<TableHeader width="20%" scope="col">
									Name
								</TableHeader>
								<TableHeader width="60%" scope="col">
									Climate
								</TableHeader>
								<TableHeader width="20%" textAlign="right" scope="col">
									Population
								</TableHeader>
							</tr>
						</TableHead>
						<TableBody>
							{data ? (
								<Fragment>
									{data.results.map((item) => {
										const parsedPopulation = parseInt(item.population);
										return (
											<tr key={item.name}>
												<TableCell>{item.name}</TableCell>
												<TableCell>{item.climate}</TableCell>
												<TableCell textAlign="right">
													{isNaN(parsedPopulation)
														? 'Unknown'
														: numberFormatter.format(parsedPopulation)}
												</TableCell>
											</tr>
										);
									})}
								</Fragment>
							) : (
								<Fragment>
									{Array.from(Array(10).keys()).map((i) => (
										<tr key={i}>
											<TableCell>
												<SkeletonText />
												<VisuallyHidden>Loading</VisuallyHidden>
											</TableCell>
											<TableCell>
												<SkeletonText width="50%" />
												<VisuallyHidden>Loading</VisuallyHidden>
											</TableCell>
											<TableCell>
												<SkeletonText />
												<VisuallyHidden>Loading</VisuallyHidden>
											</TableCell>
										</tr>
									))}
								</Fragment>
							)}
						</TableBody>
					</Table>
				</TableWrapper>
				{totalPages.current ? (
					<PaginationButtons
						currentPage={currentPage}
						onChange={setCurrentPage}
						totalPages={totalPages.current}
					/>
				) : null}
			</Stack>
		</PageContent>
	);
}

const numberFormatter = new Intl.NumberFormat();
