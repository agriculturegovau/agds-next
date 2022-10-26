import { Flex } from '../../box/src';
import { AlertIcon } from '../../icon/src';
import { Text } from '../../text/src';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListError() {
	return (
		<ComboboxListItem isActiveItem={false} isInteractive={false}>
			<Flex alignItems="center" gap={0.5}>
				<AlertIcon color="error" css={{ flexShrink: 0 }} />
				<Text>Something went wrong.</Text>
			</Flex>
		</ComboboxListItem>
	);
}
