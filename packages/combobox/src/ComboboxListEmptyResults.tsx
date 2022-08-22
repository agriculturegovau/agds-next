import { Text } from '@ag.ds-next/text';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListEmptyResults({ message }: { message: string }) {
	return (
		<ComboboxListItem isActiveItem={false} isInteractive={false}>
			<Text>{message}</Text>
		</ComboboxListItem>
	);
}
