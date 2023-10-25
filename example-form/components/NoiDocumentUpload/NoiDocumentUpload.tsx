import { useEffect, useState } from 'react';
import { LoadingDots } from '@ag.ds-next/react/loading';
import { NoiDocumentUploadForm } from './NoiDocumentUploadForm';
import { ExistingFileWithCategory, getUploadedFiles } from './utils';

export const NoiDocumentUpload = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [initialData, setInitialData] = useState<ExistingFileWithCategory[]>(
		[]
	);

	useEffect(() => {
		const fetchInitialData = async () => {
			const data = await await getUploadedFiles();
			setInitialData(data);
			setIsLoading(false);
		};

		fetchInitialData();
	}, []);

	if (isLoading) {
		return <LoadingDots />;
	}

	return <NoiDocumentUploadForm initialValue={initialData} />;
};
