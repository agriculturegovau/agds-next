import { tokens } from '@ag.ds-next/react/core';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import {
	TableWrapper,
	Table,
	TableCaption,
	TableHead,
	TableHeader,
	TableBody,
	TableCell,
} from '@ag.ds-next/react/table';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { TokenLayout } from '../../../components/TokenLayout';
import { getTokensBreadcrumbs, TOKEN_PAGES } from '../../../content/tokens';

const tokenDescriptions: Record<
	keyof typeof tokens.zIndex,
	{ value: number; description: string }
> = {
	base: {
		value: tokens.zIndex.base,
		description: 'Lorem ipsum',
	},
	elevated: {
		value: tokens.zIndex.elevated,
		description: 'Lorem ipsum',
	},
	overlay: {
		value: tokens.zIndex.overlay,
		description: 'Lorem ipsum',
	},
	modal: {
		value: tokens.zIndex.modal,
		description: 'Lorem ipsum',
	},
	popover: {
		value: tokens.zIndex.popover,
		description: 'Lorem ipsum',
	},
	skipLink: {
		value: tokens.zIndex.skipLink,
		description: 'Lorem ipsum',
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
				breadcrumbs={getTokensBreadcrumbs(TOKEN_PAGES.elevation)}
				editPath="/docs/pages/foundations/tokens/max-width.tsx"
			>
				<Prose>
					<div className={proseBlockClassname}>
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
					</div>
				</Prose>
			</TokenLayout>
		</>
	);
}
