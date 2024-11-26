import { type ReactNode } from 'react';

type ComboboxRenderItemDefaultProps = {
	/** The character-separated label of the item. */
	children: ReactNode;
};

export function ComboboxRenderItemDefault({
	children,
}: ComboboxRenderItemDefaultProps) {
	return <span data-combobox-render-item="itemLabel">{children}</span>;
}

export function renderItemLabel(itemLabel: string) {
	return (
		<span aria-label={itemLabel} data-combobox-render-item="renderedLabel">
			{itemLabel.split('').map((character, index) => (
				<span data-char={character} key={index}>
					{character}
				</span>
			))}
		</span>
	);
}
