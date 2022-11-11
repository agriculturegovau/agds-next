import { forwardRef, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type FormStepTitleProps = {
	sectionTitle?: string;
	pageTitle: string;
	introduction?: ReactNode;
	callToAction?: ReactNode;
};

// Based on PageTitle, but with a different heading levels
export const FormStepTitle = forwardRef<HTMLHeadingElement, FormStepTitleProps>(
	function FormStepTitle(
		{ sectionTitle, pageTitle, introduction, callToAction },
		ref
	) {
		return (
			<Stack gap={1.5}>
				<Stack>
					<H1 ref={ref} tabIndex={-1} focus>
						<Text
							display="block"
							fontSize="sm"
							color="muted"
							fontWeight="bold"
							lineHeight="heading"
						>
							{sectionTitle}
						</Text>

						{pageTitle}
					</H1>
				</Stack>
				{introduction ? (
					<Text as="p" fontSize="md" color="muted">
						{introduction}
					</Text>
				) : null}
				{callToAction}
			</Stack>
		);
	}
);
