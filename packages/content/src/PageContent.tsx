import { BaseContent, BaseContentProps } from './BaseContent';

export type PageContentProps = BaseContentProps;

export function PageContent({
	children,
	as = 'div',
	...props
}: PageContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="page">
			{children}
		</BaseContent>
	);
}
