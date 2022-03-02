import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorItemButton,
	ProgressIndicatorItemButtonProps,
	ProgressIndicatorItemLink,
	ProgressIndicatorItemLinkProps,
} from './ProgressIndicatorItem';

type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorProps = {
	items: ProgressIndicatorItem[];
};

export const ProgressIndicator = ({ items }: ProgressIndicatorProps) => (
	<ProgressIndicatorContainer>
		{items.map(({ label, ...props }, index) => {
			if (isItemLink(props)) {
				return (
					<ProgressIndicatorItemLink key={index} {...props}>
						{label}
					</ProgressIndicatorItemLink>
				);
			}
			return (
				<ProgressIndicatorItemButton key={index} {...props}>
					{label}
				</ProgressIndicatorItemButton>
			);
		})}
	</ProgressIndicatorContainer>
);

const isItemLink = (
	item: Omit<ProgressIndicatorItem, 'label'>
): item is ProgressIndicatorItemLinkProps => 'href' in item;
