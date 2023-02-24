import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { ControlGroup, Checkbox, Radio } from '@ag.ds-next/react/control-input';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FileInput } from '@ag.ds-next/react/file-input';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Select } from '@ag.ds-next/react/select';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import {
	StatusBadge,
	NotificationBadge,
	IndicatorDot,
} from '@ag.ds-next/react/badge';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Text } from '@ag.ds-next/react/text';
import { Textarea } from '@ag.ds-next/react/textarea';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Header } from '@ag.ds-next/react/header';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { tokens } from '@ag.ds-next/react/core';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { Autocomplete } from '@ag.ds-next/react/src/autocomplete/Autocomplete';
import { Combobox } from '@ag.ds-next/react/src/combobox';

import { SearchInput } from '@ag.ds-next/react/search-input';
import { H1 } from '../../docs/components/designSystemComponents';

export default {
	title: 'Testing/Kitchen sink/Form',
	parameters: {
		layout: 'fullscreen',
	},
};

const KitchenSinkForm = ({
	background,
	disabled,
	invalid,
}: {
	background: 'body' | 'bodyAlt';
	disabled?: boolean;
	invalid?: boolean;
}) => {
	const commonProps = {
		disabled,
		invalid,
		message: invalid ? 'Error message' : undefined,
	};
	return (
		<Box background={background}>
			<Stack palette="dark">
				<Header
					background="bodyAlt"
					logo={<Logo />}
					heading="Export Service"
					subline="Supporting Australian agricultural exports"
				/>
				<MainNav
					id="main-nav"
					activePath="#home"
					items={[
						{ label: 'Home', href: '#home' },
						{ label: 'Category', href: '#category' },
					]}
					secondaryItems={[
						{
							label: 'Sign in',
							href: '#sign-in',
							endElement: <AvatarIcon color="action" />,
						},
					]}
				/>
			</Stack>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<Stack gap={1.5}>
								<H1>Example form</H1>
								<Text as="p" fontSize="md" color="muted">
									Introductory paragraph providing context for this sign in
									form. All questions on page must be related - md/default (P).
								</Text>
							</Stack>
							<Text fontSize="xs" color="muted">
								All fields are required unless marked optional.
							</Text>
							<form onSubmit={(e) => e.preventDefault}>
								<FormStack>
									<TextInput label="Name" value="John Smith" {...commonProps} />

									<Textarea
										label="Message"
										value="Lorem ipsum dolar"
										{...commonProps}
									/>

									<Select
										label="Example"
										placeholder="Please select"
										value="b"
										options={[
											{ value: 'a', label: 'Option A' },
											{ value: 'b', label: 'Option B' },
											{ value: 'c', label: 'Option C' },
										]}
										{...commonProps}
									/>

									<ControlGroup label="Control group" {...commonProps} block>
										<Radio checked={false} {...commonProps}>
											Option A
										</Radio>
										<Radio checked={true} {...commonProps}>
											Option B
										</Radio>
										<Radio checked={false} {...commonProps}>
											Option C
										</Radio>
									</ControlGroup>

									<SearchInput label="Search" value="A term" {...commonProps} />

									<DatePicker
										label="Birth date"
										value={new Date()}
										onChange={() => {}}
										{...commonProps}
									/>

									<FileInput label="Drivers licence" {...commonProps} />

									<FileUpload
										label="Drivers licence"
										onChange={() => {}}
										value={[]}
										{...commonProps}
									/>

									<ControlGroup label="Control group" {...commonProps} block>
										<Checkbox checked={false} {...commonProps}>
											Option A
										</Checkbox>
										<Checkbox checked={true} {...commonProps}>
											Option B
										</Checkbox>
										<Checkbox checked={false} {...commonProps}>
											Option C
										</Checkbox>
									</ControlGroup>

									<Autocomplete
										label="Find your state"
										hint="Start typing to see results"
										value={{ label: 'Tasmania', value: 'tas' }}
										loadOptions={async function loadOptions() {
											return [
												{ label: 'Australian Capital Territory', value: 'act' },
												{ label: 'New South Wales', value: 'nsw' },
												{ label: 'Northern Territory', value: 'nt' },
												{ label: 'Queensland', value: 'qld' },
												{ label: 'South Australia', value: 'sa' },
												{ label: 'Tasmania', value: 'tas' },
												{ label: 'Victoria', value: 'vic' },
												{ label: 'Western Australia', value: 'wa' },
											];
										}}
										{...commonProps}
									/>

									<Combobox
										label="Select state"
										hint="Start typing to see results"
										options={[
											{ label: 'Australian Capital Territory', value: 'act' },
											{ label: 'New South Wales', value: 'nsw' },
											{ label: 'Northern Territory', value: 'nt' },
											{ label: 'Queensland', value: 'qld' },
											{ label: 'South Australia', value: 'sa' },
											{ label: 'Tasmania', value: 'tas' },
											{ label: 'Victoria', value: 'vic' },
											{ label: 'Western Australia', value: 'wa' },
										]}
										value={{ label: 'Tasmania', value: 'tas' }}
										{...commonProps}
									/>

									<ButtonGroup>
										<Button size="md" disabled={disabled}>
											Submit
										</Button>
										<Button size="md" variant="secondary" disabled={disabled}>
											Cancel
										</Button>
									</ButtonGroup>
								</FormStack>
							</form>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
			<Box palette="dark">
				<Footer background="bodyAlt">
					<nav aria-label="footer">
						<LinkList
							links={[
								{ label: 'Home', href: '/' },
								{
									label: 'Storybook',
									href: 'https://design-system.agriculture.gov.au/storybook/index.html',
								},
								{
									label: 'Playroom',
									href: 'https://design-system.agriculture.gov.au/playroom/index.html',
								},
								{
									label: 'Starter kit',
									href: 'https://github.com/steelthreads/agds-starter-kit',
								},
							]}
							horizontal
						/>
					</nav>
					<FooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; 2022 Department of Agriculture, Fisheries and Forestry
					</Text>
				</Footer>
			</Box>
		</Box>
	);
};

export const BodyBackground = () => {
	return <KitchenSinkForm background="body" />;
};

export const BodyAltBackground = () => {
	return <KitchenSinkForm background="bodyAlt" />;
};

export const InvalidFields = () => {
	return <KitchenSinkForm background="body" invalid={true} />;
};

export const DisabledFields = () => {
	return <KitchenSinkForm background="body" disabled={true} />;
};
