import { Flex } from '../../flex';
import { LoadingDots } from '../../loading';
import { Text } from '../../text';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListLoading() {
	return (
		<ComboboxListItem>
			<Flex alignItems="center" gap={1}>
				<LoadingDots aria-label="Loading options" role="alert" size="sm" />
				<Text>Loading</Text>
			</Flex>
		</ComboboxListItem>
	);
}
