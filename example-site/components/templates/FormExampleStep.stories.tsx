import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleMultiStep as FormExampleMultiStepContent } from '../FormExampleMultiStep/FormExampleMultiStep';

export default {
	title: 'Templates/FormExampleMultiStep',
};

export function FormExampleMultiStep() {
	return (
		<PageTemplate>
			<FormExampleMultiStepContent />
		</PageTemplate>
	);
}
