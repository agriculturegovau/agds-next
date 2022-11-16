import { ReactNode, Ref } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { VisuallyHidden } from '@ag.ds-next/a11y';

export type FormStepTitleProps = {
	titleRef: Ref<HTMLHeadingElement>;
	formTitle: string;
	stepTitle: string;
	introduction?: ReactNode;
	callToAction?: ReactNode;
};

// Based on PageTitle, but with a different heading levels
export function FormStepTitle({
	titleRef,
	formTitle,
	stepTitle,
	introduction,
	callToAction,
}: FormStepTitleProps) {
	return (
		<Stack gap={1.5}>
			<H1 ref={titleRef} tabIndex={-1} focus>
				<Text
					display="block"
					fontSize="sm"
					color="muted"
					fontWeight="bold"
					lineHeight="heading"
				>
					{formTitle}
					<VisuallyHidden>{' form'}</VisuallyHidden>
				</Text>
				{stepTitle}
			</H1>
			{introduction ? (
				<Text as="p" fontSize="md" color="muted">
					{introduction}
				</Text>
			) : null}
			{callToAction}
		</Stack>
	);
}
