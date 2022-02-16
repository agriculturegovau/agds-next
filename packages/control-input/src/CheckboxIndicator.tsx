import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { boxPalette, packs, themeVars } from '@ag.ds-next/core';
import { CheckboxSize, iconSize } from './utils';

export type CheckboxIndicatorProps = {
	checked?: boolean;
	disabled?: boolean;
	invalid?: true;
	size: CheckboxSize;
	valid?: true;
};

export const CheckboxIndicator = ({
	checked,
	disabled,
	invalid,
	size,
	valid,
}: CheckboxIndicatorProps) => (
	<Flex
		justifyContent="center"
		alignItems="center"
		css={{
			...packs.control[size],
			borderStyle: 'solid',
			borderColor: boxPalette.foregroundText,
			opacity: disabled ? 0.3 : undefined,

			...(invalid
				? {
						borderColor: `var(${themeVars.error})`,
				  }
				: valid
				? {
						borderColor: `var(${themeVars.success})`,
				  }
				: undefined),
		}}
	>
		{console.log({ size })}
		{checked ? (
			<Icon icon="checkbox" size={iconSize[size]} color="text" />
		) : null}
	</Flex>
);
