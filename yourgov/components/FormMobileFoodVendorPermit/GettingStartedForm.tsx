import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Radio } from '@ag.ds-next/react/radio';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';

const formSchema = yup
	.object({
		businessType: yup.string().typeError('Business type is required'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

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
		resolver: yupResolver(formSchema),
	});

	function onSubmit(data: FormSchema) {
		router.push({
			pathname:
				'/app/licences-and-permits/apply/mobile-food-vendor-permit/form',
			query: { type: data.businessType?.toLowerCase() },
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
					{['Food van', 'Coffee truck', 'Market stall'].map((option) => (
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
