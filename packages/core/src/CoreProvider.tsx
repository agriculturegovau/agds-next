import {
	forwardRef,
	createContext,
	useContext,
	PropsWithChildren,
	AnchorHTMLAttributes,
} from 'react';

const DefaultLinkComponent = forwardRef<
	HTMLAnchorElement,
	// Using `any` here because the href prop differs between routing frameworks
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	LinkProps & { href?: any }
>(function DefaultLinkComponent(props, ref) {
	return <a ref={ref} {...props} />;
});

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const coreContext = createContext({
	linkComponent: DefaultLinkComponent,
});

export type LinkComponent = typeof DefaultLinkComponent;

export type CoreProviderProps = PropsWithChildren<{
	linkComponent?: LinkComponent;
}>;

export function CoreProvider({ linkComponent, children }: CoreProviderProps) {
	return (
		<coreContext.Provider
			value={{
				linkComponent: linkComponent ?? DefaultLinkComponent,
			}}
		>
			{children}
		</coreContext.Provider>
	);
}

export function useLinkComponent() {
	const { linkComponent } = useContext(coreContext);
	return linkComponent;
}
