import { forwardRef, HTMLAttributes, MouseEvent } from 'react';
import { Flex } from '../../box';
import { boxPalette, mapSpacing } from '../../core';
import { CloseIcon } from '../../icon';

export type ComboboxTagProps = Omit<
	HTMLAttributes<HTMLSpanElement>,
	'children' | 'color'
> & {
	children: string;
	onRemove: () => void;
};

// This component is based off our 'Tag' component with slightly different markup
// See https://www.downshift-js.com/use-multiple-selection#usage-with-combobox

export const ComboboxTag = forwardRef<HTMLSpanElement, ComboboxTagProps>(
	function ComboboxTag({ children, onRemove, ...props }, ref) {
		return (
			<Flex
				ref={ref}
				as="span"
				inline
				alignItems="center"
				border
				rounded
				paddingLeft={0.5}
				paddingRight={0.25}
				gap={0.25}
				fontSize="sm"
				color="text"
				focus
				css={{ cursor: 'pointer' }}
				{...props}
			>
				{children}
				<Flex
					as="span"
					height={mapSpacing(1.5)}
					width={mapSpacing(1.5)}
					alignItems="center"
					justifyContent="center"
					onClick={(event: MouseEvent<HTMLSpanElement>) => {
						event.stopPropagation();
						onRemove();
					}}
					focus
					css={{
						cursor: 'pointer',
						svg: {
							display: 'block',
							color: boxPalette.foregroundAction,
						},
						'&:hover': {
							svg: {
								color: boxPalette.foregroundText,
							},
						},
					}}
				>
					<CloseIcon size="sm" />
				</Flex>
			</Flex>
		);
	}
);
