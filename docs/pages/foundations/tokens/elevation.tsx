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
		description: 'Used for base elements.',
	},
	elevated: {
		value: tokens.zIndex.elevated,
		description:
			'Used for components that need to be elevated above adjacent siblings.',
	},
	overlay: {
		value: tokens.zIndex.overlay,
		description: 'Used for modal overlays.',
	},
	modal: {
		value: tokens.zIndex.modal,
		description: 'Used for modal dialogs.',
	},
	popover: {
		value: tokens.zIndex.popover,
		description: 'Used for popover elements - eg. date picker calendar.',
	},
	skipLink: {
		value: tokens.zIndex.skipLink,
		description: 'Used for skip links.',
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
