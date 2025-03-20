import { ReactNode, Ref } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { FormRequiredFieldsMessage } from './FormRequiredFieldsMessage';

export type FormStepTitleProps = {
	titleRef: Ref<HTMLHeadingElement>;
	formTitle: string;
	stepTitle: string;
	introduction?: ReactNode;
	callToAction?: ReactNode;
	hideRequiredFieldsMessage?: boolean;
};

// Based on PageTitle, but with a different heading levels
export function FormStepTitle({
	titleRef,
	formTitle,
	stepTitle,
	introduction,
	callToAction,
	hideRequiredFieldsMessage,
}: FormStepTitleProps) {
	return (
		<Stack gap={1.5}>
			<H1
				aria-label={`${formTitle} form, ${stepTitle}`}
				focusRingFor="keyboard"
				ref={titleRef}
				tabIndex={-1}
			>
				<Text
					color="muted"
					display="block"
					fontSize="sm"
					fontWeight="bold"
					lineHeight="heading"
				>
					{formTitle}
				</Text>
				{stepTitle}
			</H1>
			{introduction ? (
				<Text as="p" color="muted" fontSize="md">
					{introduction}
				</Text>
			) : null}
			{!hideRequiredFieldsMessage && <FormRequiredFieldsMessage />}

			{callToAction}
		</Stack>
	);
}
