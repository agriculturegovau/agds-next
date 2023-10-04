import { Stack } from '../stack';
import { FileUploadExistingFile } from './FileUploadExistingFile';
import { ExistingFile } from './utils';

type FileUploadExistingFileListProps = {
	files: ExistingFile[];
	hideThumbnails?: boolean;
};

export const FileUploadExistingFileList = ({
	files,
	hideThumbnails,
}: FileUploadExistingFileListProps) => (
	<Stack as="ul" aria-label="Existing files" gap={0.5}>
		{files.map((file, index) => (
			<FileUploadExistingFile
				key={index}
				file={file}
				hideThumbnails={hideThumbnails}
			/>
		))}
	</Stack>
);
