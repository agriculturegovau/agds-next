import { Text } from '@ag.ds-next/text';

export type DefaultComboboxOption = { label: string; value: string };

export function defaultRenderItem<Option extends DefaultComboboxOption>(
	item: Option,
	inputValue: string
) {
	return item.label
		.split(new RegExp(`(${inputValue})`, 'gi'))
		.map((part, index) => {
			if (!part) {
				return null;
			}
			if (part.toLowerCase() === inputValue.toLowerCase()) {
				return (
					<Text
						key={index}
						as="mark"
						color="action"
						fontWeight="bold"
						css={{ background: 'none' }}
					>
						{part}
					</Text>
				);
			}
			return part;
		});
}
