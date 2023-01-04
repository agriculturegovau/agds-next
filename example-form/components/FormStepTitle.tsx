import { ReactNode, Ref } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

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
			<H1
				ref={titleRef}
				tabIndex={-1}
				focus
				aria-label={`${formTitle} form, ${stepTitle}`}
			>
				<Text
					display="block"
					fontSize="sm"
					color="muted"
					fontWeight="bold"
					lineHeight="heading"
				>
					{formTitle}
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
