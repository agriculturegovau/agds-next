import { Text } from '../../text';
import { ComboboxListItem } from './ComboboxListItem';

export type ComboboxListEmptyResultsProps = { message: string };

export function ComboboxListEmptyResults({
	message,
}: ComboboxListEmptyResultsProps) {
	return (
		<ComboboxListItem isActiveItem={false} isInteractive={false}>
			<Text>{message}</Text>
		</ComboboxListItem>
	);
}
