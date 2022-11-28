import { SearchIcon } from '@ag.ds-next/icon';
import { mapSpacing, tokens } from '@ag.ds-next/core';

export type SearchIconProps = { disabled?: boolean };

export function SearchInputIcon({ disabled }: SearchIconProps) {
	return (
		<SearchIcon
			size="md"
			weight="regular"
			color="muted"
			css={{
				position: 'absolute',
				top: '50%',
				left: `calc(${mapSpacing(1)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				pointerEvents: 'none',
				opacity: disabled ? 0.3 : undefined,
			}}
		/>
	);
}
