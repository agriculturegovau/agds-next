import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';

function AllTheProviders({ children }: PropsWithChildren) {
	return <Core theme={theme}>{children}</Core>;
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
