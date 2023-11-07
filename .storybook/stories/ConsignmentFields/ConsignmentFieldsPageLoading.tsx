import { Stack } from '@ag.ds-next/react/stack';
import { Columns } from '@ag.ds-next/react/columns';
import { Text } from '@ag.ds-next/react/text';
import { SkeletonBox } from '@ag.ds-next/react/skeleton';

/**
 * Loading state which is displayed when the data is still being loaded
 */
export function ConsignmentFieldsPageLoading() {
	return (
		<Columns cols={{ xs: 1, md: 2 }}>
			<Stack gap={1}>
				<Text as="h3" fontWeight="bold" lineHeight="heading">
					Available fields
				</Text>
				<SkeletonBox height="500px" />
			</Stack>
			<Stack gap={1}>
				<Text as="h3" fontWeight="bold" lineHeight="heading">
					Added fields
				</Text>
				<SkeletonBox height="500px" />
			</Stack>
		</Columns>
	);
}
