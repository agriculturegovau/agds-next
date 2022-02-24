import React, { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';

export type KeywordListItemProps = {
	href?: string;
	title: ReactNode;
	subTitle: ReactNode;
};

export const KeywordListItem = (props: KeywordListItemProps) => {
	const { href, title, subTitle } = props;

	const commonUi = (
		<Flex
			as="span"
			flexDirection="column"
			fontSize="lg"
			fontWeight="bold"
			color={href ? 'action' : 'text'}
		>
			<Text as="small" fontSize="xs">
				{subTitle}
			</Text>
			{title}
		</Flex>
	);

	return (
		<Flex as="li" alignItems="flex-start">
			{href ? (
				<Flex as={TextLink} href={href}>
					{commonUi}
				</Flex>
			) : (
				commonUi
			)}
		</Flex>
	);
};
