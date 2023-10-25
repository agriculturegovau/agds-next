import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/react/button';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Stack } from '@ag.ds-next/react/stack';
import { NoiDocumentUpload } from './NoiDocumentUpload';

const formSchema = yup
	.object({
		files: yup.array().of(
			yup.object({
				file: yup.mixed<File>().required('File is required'), // TODO Is this better?
				category: yup.string().required('Category is required'),
			})
		),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const NoiDocumentUploadForm = ({ initialValue }) => {
	// const [isLoading, setIsLoading] = useState(true);

	// const handleFirstFetch = async () => {
	// 	const existingFiles = await getUploadedFiles();
	// 	setFiles(existingFiles);
	// 	setIsLoading(false);
	// };

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
		defaultValues: {
			files: [],
		},
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		console.log(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		console.log('SOMETHING WENT WRONG');
	};

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }hasClientErrors

	// As our form schema contains nested objects, we are the converting errors from a nested object to a simple flat array

	const flatErrors: { key: string; message: string }[] = [];

	Object.values(errors).forEach((e) => {
		if (Array.isArray(e)) {
			e.forEach((error, idx) => {
				if ('category' in error) {
					flatErrors.push({
						key: `${idx}`,
						message: error.category.message,
					});
				}
			});
		}
	});

	// Only show the page alert if there is more than 1 error
	const hasClientErrors = Object.keys(flatErrors).length > 1;

	return (
		<Stack gap={1}>
			{hasClientErrors && (
				<PageAlert
					// ref={clientErrorPageAlertRef}
					// tabIndex={-1}
					tone="error"
					title="There is a problem"
				>
					<Text as="p">Please correct the following fields and try again</Text>
					<UnorderedList>
						{flatErrors.map((error) => (
							<ListItem key={error.key}>
								<TextLink href={`#${error.key}`}>{error.message}</TextLink>
							</ListItem>
						))}
					</UnorderedList>
				</PageAlert>
			)}
			<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
				<Controller
					control={control}
					name="files"
					render={({ field: { value, onChange } }) => (
						<NoiDocumentUpload value={value} onChange={onChange} />
					)}
				/>
				<Button type="submit">Save</Button>
			</form>
		</Stack>
	);
};
