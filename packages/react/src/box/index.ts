import { Flex as _Flex, FlexProps as _FlexProps } from '../flex';
import { Stack as _Stack, StackProps as _StackProps } from '../stack';

export * from './Box';
export * from './styles';

/**
 * @deprecated This component has been moved.
 * Use `Flex` from the `flex` entrypoint instead.
 * Example: `import { Flex } from '@ag.ds-next/react/flex'`".
 * This will be removed in the next major version.
 */
export const Flex = _Flex;

/**
 * @deprecated This type has been moved.
 * Use `FlexProps` from the `flex` entrypoint instead.
 * Example: `import { FlexProps } from '@ag.ds-next/react/flex'`".
 * This will be removed in the next major version.
 */
export type FlexProps = _FlexProps;

/**
 * @deprecated This component has been moved.
 * Use `Stack` from the `stack` entrypoint instead.
 * Example: `import { Stack } from '@ag.ds-next/react/stack'`".
 * This will be removed in the next major version.
 */
export const Stack = _Stack;

/**
 * @deprecated This type has been moved.
 * Use `StackProps` from the `indicator-dot` entrypoint instead.
 * Example: `import { StackProps } from '@ag.ds-next/react/indicator-dot'`".
 * This will be removed in the next major version.
 */
export type StackProps = _StackProps;
