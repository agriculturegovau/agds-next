import { KeywordListContainer } from './KeywordListContainer';
import { KeywordListItem, KeywordListItemProps } from './KeywordListItem';

export type KeywordListProps = {
	items: KeywordListItemProps[];
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
