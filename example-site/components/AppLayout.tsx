import { PropsWithChildren } from 'react';
import { Logo } from '@ag.ds-next/react/ag-branding';
import {
	AppLayout as DSAppLayout,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
} from '@ag.ds-next/react/app-layout';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
}>;

export const AppLayout = ({ children, focusMode = false }: AppLayoutProps) => (
	<DSAppLayout focusMode={focusMode}>
		<AppLayoutHeader logo={<Logo />} />
		<AppLayoutSidebar items={[]} />
		<AppLayoutContent>{children}</AppLayoutContent>
		<AppLayoutFooter></AppLayoutFooter>
	</DSAppLayout>
);
