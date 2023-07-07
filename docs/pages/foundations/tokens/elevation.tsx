import { Fragment, ReactNode } from 'react';
import { tokens } from '@ag.ds-next/react/core';
import { TextLink } from '@ag.ds-next/react/text-link';
import {
	TableWrapper,
	Table,
	TableCaption,
	TableHead,
	TableHeader,
	TableBody,
	TableCell,
} from '@ag.ds-next/react/table';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';

const tokenDescriptions: Record<
	keyof typeof tokens.zIndex,
	{ value: number; description: ReactNode }
> = {
	base: {
		value: tokens.zIndex.base,
		description: 'The base z-index.',
	},
	elevated: {
		value: tokens.zIndex.elevated,
		description:
			'Used to elevate elements above adjacent elements that sit on the base z-index.',
	},
	overlay: {
		value: tokens.zIndex.overlay,
		description: (
			<Fragment>
				Used for overlays in modals and other components that sit on top of the
				page - e.g. <TextLink href="/components/modal">Modal</TextLink>,{' '}
				<TextLink href="/components/filter-drawer">Filter drawer</TextLink>,{' '}
				<TextLink href="/components/main-nav">Main nav (mobile)</TextLink>.
			</Fragment>
		),
	},
	dialog: {
		value: tokens.zIndex.dialog,
		description: (
			<Fragment>
				Used for the main dialog element in modals and other components that sit
				on top of the - e.g. <TextLink href="/components/modal">Modal</TextLink>
				, <TextLink href="/components/filter-drawer">Filter drawer</TextLink>,{' '}
				<TextLink href="/components/main-nav">Main nav (mobile)</TextLink>.
			</Fragment>
		),
	},
	popover: {
		value: tokens.zIndex.popover,
		description: (
			<Fragment>
				Used for popover elements - e.g. the calendar popover in the{' '}
				<TextLink href="/components/date-picker">Date picker</TextLink>.
			</Fragment>
		),
	},
	skipLink: {
		value: tokens.zIndex.skipLink,
		description: (
			<Fragment>
				Used for focused{' '}
				<TextLink href="/components/skip-link">Skip links</TextLink>.
			</Fragment>
		),
	},
};

export default function TokensElevationPage() {
	return (
		<>
			<DocumentTitle
				title={TOKEN_PAGES.elevation.pageTitle}
				description={TOKEN_PAGES.elevation.description}
			/>
			<TokenLayout
				title={TOKEN_PAGES.elevation.pageTitle}
				description={TOKEN_PAGES.elevation.description}
				editPath="/docs/pages/foundations/tokens/max-width.tsx"
			>
				<TableWrapper>
					<Table>
						<TableCaption>Z-Index tokens</TableCaption>
						<TableHead>
							<tr>
								<TableHeader scope="col" width="25%">
									Token
								</TableHeader>
								<TableHeader scope="col" width="25%">
									Value
								</TableHeader>
								<TableHeader scope="col" width="50%">
									Description
								</TableHeader>
							</tr>
						</TableHead>
						<TableBody>
							{Object.entries(tokenDescriptions).map(
								([token, { value, description }]) => {
									return (
										<tr key={token}>
											<TableCell>{token}</TableCell>
											<TableCell>{value}</TableCell>
											<TableCell>{description}</TableCell>
										</tr>
									);
								}
							)}
						</TableBody>
					</Table>
				</TableWrapper>
			</TokenLayout>
		</>
	);
}
