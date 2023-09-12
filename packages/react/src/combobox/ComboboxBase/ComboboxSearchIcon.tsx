import { mapSpacing, tokens } from '../../core';
import { SearchIcon } from '../../icon';

export type ComboboxSearchIconProps = { disabled?: boolean };

export function ComboboxSearchIcon({ disabled }: ComboboxSearchIconProps) {
	return (
		<SearchIcon
			size="md"
			weight="regular"
			color="muted"
			css={{
				position: 'absolute',
				top: '50%',
				left: `calc(${mapSpacing(0.75)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				pointerEvents: 'none',
				opacity: disabled ? 0.3 : undefined,
			}}
		/>
	);
}
