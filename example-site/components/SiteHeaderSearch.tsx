import { useForm, SubmitHandler } from 'react-hook-form';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/react/search-box';

type SearchFormInput = {
	search: string;
};

export const SiteHeaderSearch = () => {
	const { register, handleSubmit } = useForm<SearchFormInput>();

	const onSubmit: SubmitHandler<SearchFormInput> = ({ search }) => {
		console.log(search);
	};

	return (
		<SearchBox onSubmit={handleSubmit(onSubmit)}>
			<SearchBoxInput {...register('search')} />
			<SearchBoxButton iconOnly={{ xs: true, sm: false, md: true, lg: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	);
};
