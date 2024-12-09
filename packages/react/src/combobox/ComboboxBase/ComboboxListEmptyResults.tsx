import { Text } from '../../text';
import { ComboboxListItem } from './ComboboxListItem';

export type ComboboxListEmptyResultsProps = { message: string };

export function ComboboxListEmptyResults({
	message,
}: ComboboxListEmptyResultsProps) {
	return (
		<ComboboxListItem>
			<Text>{message}</Text>
		</ComboboxListItem>
	);
}
