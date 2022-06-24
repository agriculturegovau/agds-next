import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { Stack } from '@ag.ds-next/box';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Body } from '@ag.ds-next/body';
import { useScrollToField } from '@ag.ds-next/field';
import { TextLink } from '@ag.ds-next/text-link';

const formSchema = yup
	.object({
		email: yup.string().email('Invalid email').required('Enter your email'),
		password: yup.string().required('Enter your password'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleSignIn = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasFocusedErrorRef, setHasFocusedErrorRef] = useState(false);
	const [networkErrorMessage, setNetworkErrorMessage] = useState<string>();
	const errorPageAlertRef = useRef<HTMLDivElement>(null);

	const scrollToField = useScrollToField();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		console.log(data);
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setNetworkErrorMessage('Incorrect username or password');
			errorPageAlertRef.current?.focus();
		}, 3000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		setHasFocusedErrorRef(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasClientErrors = Object.keys(errors).length > 1;
	const hasNetworkErrors = Boolean(networkErrorMessage);

	useEffect(() => {
		if (!(hasClientErrors || hasNetworkErrors || hasFocusedErrorRef)) return;
		errorPageAlertRef.current?.focus();
		setHasFocusedErrorRef(true);
	}, [hasFocusedErrorRef, hasClientErrors, hasNetworkErrors]);

	return (
		<Stack gap={3}>
			{(hasClientErrors || hasNetworkErrors) && (
				<PageAlert
					ref={errorPageAlertRef}
					tabIndex={-1}
					tone="error"
					title="There is a problem"
				>
					{networkErrorMessage && (
						<Body>
							<p>{networkErrorMessage}</p>
						</Body>
					)}
					{hasClientErrors && (
						<Body>
							<p>Please correct the following fields and try again</p>
							<ul>
								{Object.entries(errors).map(([key, value]) => (
									<li key={key}>
										<a href={`#${key}`} onClick={scrollToField}>
											{value.message}
										</a>
									</li>
								))}
							</ul>
						</Body>
					)}
				</PageAlert>
			)}
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormStack>
					<TextInput
						label="Email"
						type="email"
						{...register('email')}
						id="email"
						invalid={Boolean(errors.email?.message)}
						message={errors.email?.message}
						maxWidth="xl"
						required
					/>
					<Stack gap={0.75}>
						<TextInput
							label="Password"
							type="password"
							{...register('password')}
							id="password"
							invalid={Boolean(errors.password?.message)}
							message={errors.password?.message}
							maxWidth="xl"
							required
						/>
						<TextLink href="#" css={{ alignSelf: 'flex-start' }}>
							Forgot password?
						</TextLink>
					</Stack>
					<div>
						<Button type="submit" loading={isSubmitting}>
							Sign in
						</Button>
					</div>
				</FormStack>
			</form>
		</Stack>
	);
};
