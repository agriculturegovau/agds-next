import { Fragment } from 'react';
import { Box } from '../../box';
import { Stack } from '../../stack';
import { Text } from '../../text';
import { defaultRenderItem } from '../defaultRenderItem';
import { DefaultComboboxOption, RenderItem } from '../utils';

export type ComboboxListItemProps<Option> = {
	option: Option;
	inputValue: string;
	renderItem?: RenderItem<Option>;
};

export function ComboboxListItemOption<Option extends DefaultComboboxOption>({
	renderItem,
	option,
	inputValue,
}: ComboboxListItemProps<Option>) {
	if (typeof renderItem === 'function') {
		return <Fragment>{renderItem(option, inputValue)}</Fragment>;
	}
	return (
		<Fragment>
			{renderItem?.beforeElement ? (
				<Text color="muted" fontSize="xs">
					{renderItem.beforeElement(option, inputValue)}
				</Text>
			) : null}
			<Stack as="span">
				<span>{defaultRenderItem(option, inputValue)}</span>
				{renderItem?.secondaryText ? (
					<Text color="muted" fontSize="xs">
						{renderItem.secondaryText(option, inputValue)}
					</Text>
				) : null}
				{renderItem?.tertiaryText ? (
					<Text color="muted" fontSize="xs">
						{renderItem.tertiaryText(option, inputValue)}
					</Text>
				) : null}
			</Stack>
			{renderItem?.endElement ? (
				<Box css={{ marginLeft: 'auto' }}>
					{renderItem.endElement(option, inputValue)}
				</Box>
			) : null}
		</Fragment>
	);
}
