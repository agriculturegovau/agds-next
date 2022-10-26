import { Flex } from '../../box/src';
import { LoadingDots } from '../../loading/src';
import { Text } from '../../text/src';
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
