import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Card, CardInner, CardList } from '@ag.ds-next/card';
import { H1, H2 } from '@ag.ds-next/heading';
import { Text, TextLink } from '@ag.ds-next/text';

import { Layout } from '../components/Layout';

const ProfilePage: NextPage = () => {
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

			<Box background="bodyAlt">
				<Content>
					<Flex justifyContent="space-between" alignItems="center">
						<H1>Your account</H1>

						<Stack alignItems="flex-end">
							<Text fontWeight="bold">Clarita Wiliams</Text>
							<Text fontSize="xs">ANTFIX PTY LTD</Text>
						</Stack>
					</Flex>
				</Content>
			</Box>
			<Content>
				<H2>Establishments</H2>
				<CardList gap={1} templateColumns={[1, 2, 4]}>
					<EstablishmentCard name="Cowra Lamb Feed Lot" id="1010" type="MEAT" />
					<EstablishmentCard
						name="Cowra Lamb Cold Storage Facility"
						id="1011"
						type="MEAT"
					/>
					<EstablishmentCard name="CL Processing" id="1012" type="MEAT" />
					<EstablishmentCard
						name="CL Processing Feed Lot Storage"
						id="1013"
						type="MEAT"
					/>
				</CardList>
			</Content>
		</Layout>
	);
};

const EstablishmentCard = ({
	name,
	id,
	type,
}: {
	name: string;
	id: string;
	type: string;
}) => {
	return (
		<Card>
			<CardInner>
				<Stack gap={0.5}>
					<Flex justifyContent="space-between">
						<Text>{id}</Text>
						<Text color="muted">{type}</Text>
					</Flex>

					<Text fontSize="lg" fontWeight="bold">
						{name}
					</Text>

					<TextLink>Registrations</TextLink>
					<TextLink>Insights</TextLink>
				</Stack>
			</CardInner>
		</Card>
	);
};

export default ProfilePage;
