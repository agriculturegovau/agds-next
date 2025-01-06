import { Box } from '@ag.ds-next/react/box';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import {
	TableWrapper,
	Table,
	TableCaption,
	TableHead,
	TableHeader,
	TableBody,
	TableCell,
	TableRow,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { TokenLayout, TOKEN_PAGES } from '../../../components/TokenLayout';

const tokenDescriptions: Record<
	Exclude<keyof (typeof tokens)['maxWidth'], 'field'>,
	{ value: string; description: string }
> = {
	bodyText: {
		value: tokens.maxWidth.bodyText,
		description:
			'Used for setting an optimal line length for readability in body text. This helps the users attention flow easily from one line to the next, making reading more natural and comfortable.',
	},
	container: {
		value: tokens.maxWidth.container,
		description: 'Used for setting the max-width of the page container.',
	},
};

export default function TokensMaxWidthsPage() {
	return (
		<>
			<DocumentTitle
				description={TOKEN_PAGES['max-width'].description}
				title={TOKEN_PAGES['max-width'].pageTitle}
			/>
			<TokenLayout
				description={TOKEN_PAGES['max-width'].description}
				editPath="/docs/pages/foundations/tokens/max-width.tsx"
				title={TOKEN_PAGES['max-width'].pageTitle}
			>
				<Prose>
					<div className={proseBlockClassname}>
						<TableWrapper>
							<Table>
								<TableCaption>Max-width tokens</TableCaption>
								<TableHead>
									<TableRow>
										<TableHeader scope="col" width="25%">
											Token
										</TableHeader>
										<TableHeader scope="col" width="25%">
											Value
										</TableHeader>
										<TableHeader scope="col" width="50%">
											Description
										</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{Object.entries(tokenDescriptions).map(
										([token, { value, description }]) => {
											return (
												<TableRow key={token}>
													<TableCell>{token}</TableCell>
													<TableCell>{value}</TableCell>
													<TableCell>{description}</TableCell>
												</TableRow>
											);
										}
									)}
								</TableBody>
							</Table>
						</TableWrapper>
					</div>
					<h2 id="form-fields">Form fields</h2>
					<p>
						The width of a form field should indicate the amount of information
						expected to be entered into the field. The size of the form field
						acts as a visual constraint for the end user.
					</p>
					<p>
						As an example, form fields for postcodes should have a smaller width
						than fields for emails.
					</p>
					<div className={proseBlockClassname}>
						<TableWrapper>
							<Table>
								<TableCaption>Max-width form field tokens</TableCaption>
								<TableHead>
									<TableRow>
										<TableHeader scope="col" width="25%">
											Token
										</TableHeader>
										<TableHeader scope="col">Value</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{Object.entries(tokens.maxWidth.field).map(
										([token, value]) => {
											return (
												<TableRow key={token}>
													<TableCell>{token}</TableCell>
													<TableCell>
														<Box
															css={{
																backgroundColor: boxPalette.systemInfoMuted,
																width: '100%',
																maxWidth: value,
															}}
															padding={0.5}
														>
															<Text>{value}</Text>
														</Box>
													</TableCell>
												</TableRow>
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
