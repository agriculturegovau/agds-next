import { ProgressIndicatorContainer } from './ProgressIndicatorContainer';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemStatus,
} from './ProgressIndicatorItem';

export type ProgressIndicatorProps = {
	items: {
		label: string;
		href: string;
		status: ProgressIndicatorItemStatus;
	}[];
};

export const ProgressIndicator = ({ items }: ProgressIndicatorProps) => (
	<ProgressIndicatorContainer>
		{items.map(({ label, ...props }, index) => (
			<ProgressIndicatorItem key={index} {...props}>
				{label}
			</ProgressIndicatorItem>
		))}
	</ProgressIndicatorContainer>
);
