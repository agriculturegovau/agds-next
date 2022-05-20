import { ReactNode } from 'react';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import {
	FieldsetContainer,
	FieldsetContent,
	FieldsetLegend,
} from '@ag.ds-next/fieldset';

export const FormExampleMultiStepFieldset = ({
	children,
	title,
	subTitle,
}: {
	children: ReactNode;
	title: string;
	subTitle: string;
}) => {
	return (
		<FieldsetContainer>
			<FieldsetLegend>
				<Text as="span" fontWeight="bold" fontSize="sm" color="muted">
					Title of multi page form
				</Text>
				<H1>{title}</H1>
			</FieldsetLegend>
			<Text as="p" fontSize="lg" color="muted">
				{subTitle}
			</Text>
			<FieldsetContent>{children}</FieldsetContent>
		</FieldsetContainer>
	);
};
