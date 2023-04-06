import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Text } from '@ag.ds-next/react/text';

export const DraftBanner = () => {
	return (
		<GlobalAlert>
			<Text as="p">
				These patterns are draft designs and are not yet ready for production.
			</Text>
		</GlobalAlert>
	);
};
