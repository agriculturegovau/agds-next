import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

export type PageTitleProps = {
	pretext?: ReactNode;
	title: ReactNode;
	iconSrc?: string;
	introduction?: ReactNode;
	callToAction?: ReactNode;
};

export const PageTitle = ({
	pretext,
	title,
	introduction,
	callToAction,
	iconSrc,
}: PageTitleProps) => (
	<Stack gap={1.5}>
		<Stack>
			{pretext ? (
				<Text
					fontSize="sm"
					color="muted"
					fontWeight="bold"
					lineHeight="heading"
				>
					{pretext}
				</Text>
			) : null}
			<H1 display={'flex'} alignItems={'center'} gap={0.5}>
				{iconSrc && (
					<img src={iconSrc} alt="" aria-hidden height={50} width={50} />
				)}
				{title}
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
