import { PropsWithChildren } from 'react';
import {
	mapResponsiveProp,
	mapSpacing,
	mq,
	ResponsiveProp,
	tokens,
} from '@ag.ds-next/core';
import { contentPaddingY } from './Content';

export type ContentBleedProps = PropsWithChildren<{
	visible?: ResponsiveProp<boolean>;
}>;

export function ContentBleed({ children, visible }: ContentBleedProps) {
	return (
		<div
			css={[
				// Use negative margins to position this element
				mq({
					marginTop: mapResponsiveProp(
						contentPaddingY,
						(v) => `-${mapSpacing(v)}`
					),
					marginLeft: mapResponsiveProp(
						tokens.containerPadding,
						(v) => `-${mapSpacing(v)}`
					),
					marginRight: mapResponsiveProp(
						tokens.containerPadding,
						(v) => `-${mapSpacing(v)}`
					),
				}),
				// Override any margins set when the `visible` prop is set
				mq({
					marginTop: mapResponsiveProp(visible, (v) => (v ? undefined : 0)),
					marginLeft: mapResponsiveProp(visible, (v) => (v ? undefined : 0)),
					marginRight: mapResponsiveProp(visible, (v) => (v ? undefined : 0)),
				}),
			]}
		>
			{children}
		</div>
	);
}
