import { Flex } from '../box';
import { LoadingDots } from '../loading';
import { Text } from '../text';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListLoading() {
	return (
		<ComboboxListItem isActiveItem={false} isInteractive={false}>
			<Flex gap={1} alignItems="center">
				<LoadingDots size="sm" aria-label="Loading" />
				<Text>Loading</Text>
			</Flex>
		</ComboboxListItem>
	);
}
