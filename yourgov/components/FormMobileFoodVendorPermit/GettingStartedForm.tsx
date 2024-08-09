import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Divider } from '@ag.ds-next/react/divider';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Prose } from '@ag.ds-next/react/prose';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { zodString } from '../../lib/zodUtils';
import { useGlobalForm } from './GlobalFormProvider';

const formSchema = z.object({
	businessType: zodString('Business type is required'),
});

type FormSchema = z.infer<typeof formSchema>;

export function GettingStartedForm() {
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

				<Divider />

				<Stack alignItems="flex-start" gap={1.5}>
					<Prose>
						<h2 id="what-you-will-need">What you will need</h2>
						<p>To complete this application you will need to provide:</p>
						<ul>
							<li>vehicle registration details and vehicle plans</li>
							<li>operational plan of management</li>
							<li>food safety supervisor certificate</li>
							<li>names of any employees who will be handling food</li>
						</ul>
						<p>
							once you have confirmed business and employee details we will
							provide a checklist of required documents
						</p>

						<h2 id="what-you-will-need">What happens next</h2>
						<p>
							It will take 10 business days for your application to be reviewed
							by a yourGov representative.
						</p>

						<Box paddingTop={3}>
							<ButtonGroup>
								<Button type="submit">Apply for permit</Button>
							</ButtonGroup>
						</Box>

						<h2 id="more-information">More information</h2>
						<h3>Links</h3>
						<ul>
							<li>
								<TextLinkExternal href="/not-found">
									Understand food safety requirements
								</TextLinkExternal>
							</li>
							<li>
								<TextLinkExternal href="/not-found">
									New laws for food businesses
								</TextLinkExternal>
							</li>
							<li>
								<TextLinkExternal href="/not-found">
									Restricted areas and exclusion zones
								</TextLinkExternal>
							</li>
							<li>
								<TextLinkExternal href="/not-found">
									Hours of operation
								</TextLinkExternal>
							</li>
						</ul>
					</Prose>
				</Stack>
			</FormStack>
		</form>
	);
}
