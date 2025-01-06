import { forwardRef, HTMLAttributes, MouseEvent } from 'react';
import { Flex } from '../../flex';
import { boxPalette, mapSpacing } from '../../core';
import { CloseIcon } from '../../icon';

export type ComboboxTagProps = Omit<
	HTMLAttributes<HTMLSpanElement>,
	'children' | 'color'
> & {
	disabled: boolean;
	children: string;
	onRemove: () => void;
};

// This component is based off our 'Tag' component with slightly different markup
// See https://www.downshift-js.com/use-multiple-selection#usage-with-combobox

export const ComboboxTag = forwardRef<HTMLButtonElement, ComboboxTagProps>(
	function ComboboxTag({ disabled, children, onRemove, ...props }, ref) {
		return (
			<Flex
				alignItems="center"
				as="span"
				border
				color="text"
				css={{
					cursor: 'default',
					...(disabled && {
						cursor: 'not-allowed',
						borderColor: boxPalette.borderMuted,
						color: boxPalette.foregroundMuted,
					}),
				}}
				fontSize="sm"
				gap={0.25}
				inline
				paddingLeft={0.5}
				paddingRight={0.25}
				rounded
			>
				{children}
				<Flex
					alignItems="center"
					aria-label={`Remove ${children}`}
					as="button"
					css={{
						background: 'transparent',
						cursor: 'pointer',
						svg: { display: 'block', color: boxPalette.foregroundAction },
						'&:hover': { svg: { color: boxPalette.foregroundText } },
						'&&': { outlineOffset: 0 },
						...(disabled && {
							cursor: 'not-allowed',
							opacity: 0.3,
						}),
					}}
					focusRingFor="all"
					height={mapSpacing(1.5)}
					justifyContent="center"
					onClick={(event: MouseEvent<HTMLButtonElement>) => {
						if (disabled) return;
						event.stopPropagation();
						onRemove();
					}}
					onKeyDown={props.onKeyDown}
					ref={ref}
					rounded
					type="button"
					width={mapSpacing(1.5)}
				>
					<CloseIcon size="sm" />
				</Flex>
			</Flex>
		);
	}
);
