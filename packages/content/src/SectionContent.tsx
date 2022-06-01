import { BaseContent, BaseContentProps } from './BaseContent';

export type SectionContentProps = BaseContentProps;

export function SectionContent({
	children,
	as = 'section',
	...props
}: SectionContentProps) {
	return (
		<BaseContent as={as} {...props} paddingY="section">
			{children}
		</BaseContent>
	);
}
