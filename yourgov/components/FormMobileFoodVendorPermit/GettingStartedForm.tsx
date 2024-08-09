import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Radio } from '@ag.ds-next/react/radio';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { zodString } from '../../lib/zodUtils';
import { useGlobalForm } from './GlobalFormProvider';

const formSchema = z.object({
	businessType: zodString('Business type is required'),
});

type FormSchema = z.infer<typeof formSchema>;

export function GettingStartedForm({
	children,
}: {
	children: (button: ReactElement) => ReactNode;
}) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const { formState, setFormState } = useGlobalForm();

	function onSubmit(data: FormSchema) {
		setFormState({
			...formState,
			type: data.businessType?.toLowerCase(),
		});
		router.push({
			pathname:
				'/app/licences-and-permits/apply/mobile-food-vendor-permit/form',
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormStack>
				<ControlGroup
					label="What type of business do you operate?"
					invalid={Boolean(errors.businessType?.message)}
					message={errors.businessType?.message}
					required
					block
				>
					{['Food truck', 'Market stall', 'Coffee van'].map((option) => (
						<Radio
							key={option}
							{...register('businessType')}
							value={option}
							invalid={Boolean(errors.businessType?.message)}
						>
							{option}
						</Radio>
					))}
				</ControlGroup>
				{children(
					<ButtonGroup>
						<Button type="submit">Apply for permit</Button>
					</ButtonGroup>
				)}
			</FormStack>
		</form>
	);
}
