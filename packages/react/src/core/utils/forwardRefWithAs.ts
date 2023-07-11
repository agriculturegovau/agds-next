/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement,
	ReactNode,
	Ref,
	forwardRef,
} from 'react';

/*
  forwardRefWithAs lets us forward refs while keeping the correct component type,
  which can be specified by the `as` prop.
*/

type ElementTagNameMap = HTMLElementTagNameMap &
	Pick<
		SVGElementTagNameMap,
		Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>
	>;

type AsProp<Comp extends ElementType, Props> = {
	as?: Comp;
	ref?: Ref<
		Comp extends keyof ElementTagNameMap
			? ElementTagNameMap[Comp]
			: Comp extends new (...args: any) => any
			? InstanceType<Comp>
			: undefined
	>;
} & Omit<ComponentPropsWithoutRef<Comp>, 'as' | keyof Props>;

export type CompWithAsProp<Props, DefaultElementType extends ElementType> = <
	Comp extends ElementType = DefaultElementType,
>(
	props: AsProp<Comp, Props> & Props
) => ReactElement;

export const forwardRefWithAs = <
	DefaultElementType extends ElementType,
	BaseProps,
>(
	render: (
		props: BaseProps & { as?: ElementType },
		ref: React.Ref<any>
	) => Exclude<ReactNode, undefined>
): CompWithAsProp<BaseProps, DefaultElementType> => {
	// @ts-ignore
	return forwardRef(render);
};
