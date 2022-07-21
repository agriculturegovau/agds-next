import { ComponentMeta } from '@storybook/react';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Box } from './Box';
import { Grid } from './Grid';
import { Stack } from './Stack';

export default {
	title: 'foundations/Grid',
	component: Grid,
} as ComponentMeta<typeof Grid>;

export const ThreeColumnsWithMaxWidth = () => {
	return (
		<Grid gap={3} gridTemplateColumns={{ xs: '1fr', md: '300px 1fr' }}>
			<Box padding={1} background="shadeAlt">
				SideNav
			</Box>
			<Grid
				padding={1}
				background="shadeAlt"
				gap={1}
				gridTemplateColumns={{
					xs: '1fr',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				}}
			>
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
				<ExampleCard />
			</Grid>
		</Grid>
	);
};

const ExampleCard = () => (
	<Card>
		<CardInner>
			<Stack gap={1}>
				<Heading as="h2" type="h3">
					Card heading
				</Heading>
				<Text as="p">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat
				</Text>
				<CardLink href="#">Learn more</CardLink>
			</Stack>
		</CardInner>
	</Card>
);
