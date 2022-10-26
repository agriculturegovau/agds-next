import { ReactNode } from 'react';
import { Flex } from '../../box/src';
import { Text } from '../../text/src';
import { TextLink } from '../../text-link/src';
import { LinkProps } from '../../core/src';

export type KeywordListItemProps = LinkProps & {
	title: ReactNode;
	subTitle: ReactNode;
};

export const KeywordListItem = (props: KeywordListItemProps) => {
	const { title, subTitle, href, ...rest } = props;

	const commonUi = (
		<Flex
			as="span"
			flexDirection="column"
			fontSize="lg"
			fontWeight="bold"
			color={href ? 'action' : 'text'}
		>
			<Text as="small" fontSize="xs" color="inherit">
				{subTitle}
			</Text>
			{title}
		</Flex>
	);

	return (
		<Flex as="li" alignItems="flex-start">
			{href ? (
				<TextLink href={href} {...rest} css={{ display: 'flex' }}>
					{commonUi}
				</TextLink>
			) : (
				commonUi
			)}
		</Flex>
	);
};
