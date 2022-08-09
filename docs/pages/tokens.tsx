import { useState } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { H1, H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { PageContent } from '@ag.ds-next/content';
import { Switch } from '@ag.ds-next/switch';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { BorderChart, ColorTable, SpacingChart } from '../components/Tokens';

export default function TokensPage() {
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Tokens" />
			<AppLayout>
				<PageContent as="main" id="main-content">
					<Stack gap={4}>
						<Stack gap={1}>
							<Flex justifyContent="space-between">
								<H1>Design Tokens</H1>
								<Switch
									label="Dark palette"
									checked={isDarkMode}
									onChange={setDarkMode}
								/>
							</Flex>
							<Text as="p" fontSize="md">
								Our Design System tokens
							</Text>
						</Stack>

						<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
						<BorderChart />
						<SpacingChart />
						<H2>MaxWidth</H2>
						<H2>Borders</H2>
						<H2>Shadows</H2>
					</Stack>
				</PageContent>
			</AppLayout>
		</Box>
	);
}
