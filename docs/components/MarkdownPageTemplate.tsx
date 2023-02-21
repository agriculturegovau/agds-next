import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';

export const MarkdownPageTemplate = ({ children }) => {
	return (
		<AppLayout>
			<PageLayout>
				<Prose>{children}</Prose>
			</PageLayout>
		</AppLayout>
	);
};
