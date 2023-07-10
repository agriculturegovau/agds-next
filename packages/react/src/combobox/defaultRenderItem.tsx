import { Text } from '../text';
import { DefaultComboboxOption, splitLabel } from './utils';

export function defaultRenderItem<Option extends DefaultComboboxOption>(
	item: Option,
	inputValue: string
) {
	return splitLabel(item.label, inputValue).map((part, index) => {
		const isHighlighted = part.toLowerCase() === inputValue.toLowerCase();
		if (isHighlighted) {
			return (
				<Text
					key={index}
					as="mark"
					color="inherit"
					fontWeight="bold"
					css={{ background: 'none', whiteSpace: 'pre' }}
				>
					{part}
				</Text>
			);
		}
		return (
			<Text key={index} as="span" color="inherit" css={{ whiteSpace: 'pre' }}>
				{part}
			</Text>
		);
	});
}
