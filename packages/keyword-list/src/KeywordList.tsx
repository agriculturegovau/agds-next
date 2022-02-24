import type { ReactNode } from 'react';
import { KeywordListContainer } from './KeywordListContainer';
import { KeywordListItem } from './KeywordListItem';

export type KeywordListProps = {
	links: {
		href?: string;
		title: ReactNode;
		subTitle: ReactNode;
	}[];
};

export const KeywordList = ({ links, ...props }: KeywordListProps) => {
	return (
		<KeywordListContainer {...props}>
			{links.map((props, index) => (
				<KeywordListItem key={index} {...props} />
			))}
		</KeywordListContainer>
	);
};
