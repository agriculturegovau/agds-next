import { SectionAlert } from '@ag.ds-next/react/section-alert';

export function ValidateSectionAlert() {
	return (
		<div css={{ width: '100%' }}>
			<SectionAlert
				title="Errors detected. Please edit your answers in this section."
				tone="error"
			/>
		</div>
	);
}
