import type { ReactNode } from 'react';
import { KeywordListContainer } from './KeywordListContainer';
import { KeywordListItem } from './KeywordListItem';

export type KeywordListProps = {
	items: {
		href?: string;
		title: ReactNode;
		subTitle: ReactNode;
	}[];
};

export const KeywordList = ({ items, ...props }: KeywordListProps) => {
	return (
		<KeywordListContainer {...props}>
			{items.map((props, index) => (
				<KeywordListItem key={index} {...props} />
			))}
		</KeywordListContainer>
	);
};
