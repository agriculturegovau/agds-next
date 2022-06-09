import {
	forwardRef,
	createContext,
	useContext,
	PropsWithChildren,
	AnchorHTMLAttributes,
} from 'react';

const DefaultLinkComponent = forwardRef<HTMLAnchorElement, LinkProps>(
	function DefaultLinkComponent(props, ref) {
		return <a ref={ref} {...props} />;
	}
);

export type LinkComponent = React.ForwardRefExoticComponent<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	LinkProps & { href?: any } & React.RefAttributes<HTMLAnchorElement>
>;

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const coreContext = createContext({
	linkComponent: DefaultLinkComponent,
});

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
