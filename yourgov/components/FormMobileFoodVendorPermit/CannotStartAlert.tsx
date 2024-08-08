import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';

export function CannotStartAlert() {
	return (
		<PageAlert
			tone="warning"
			title="This section of the form is not ready to be completed"
		>
			<Text as="p">
				Before starting this part of the form, you will need to go back and
				complete all of the previous sections.
			</Text>
		</PageAlert>
	);
}
