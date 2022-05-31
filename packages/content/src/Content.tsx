import { BaseContent, BaseContentProps } from './BaseContent';

export type ContentProps = BaseContentProps;

export function Content({ children, as = 'section', ...props }: ContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="none">
			{children}
		</BaseContent>
	);
}
