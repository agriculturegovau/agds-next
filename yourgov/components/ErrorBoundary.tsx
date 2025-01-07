import { Component, PropsWithChildren, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@ag.ds-next/react/stack';
import { Button } from '@ag.ds-next/react/button';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { PageContent } from '@ag.ds-next/react/content';

// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

export type ErrorBoundaryProps = PropsWithChildren<{
	fallback: ReactNode;
}>;

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	{ hasError: boolean }
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return this.props.fallback;
		}

		return this.props.children;
	}
}

export function ErrorBoundaryPageFallback() {
	const { reload } = useRouter();
	return (
		<PageContent>
			<Stack alignItems="flex-start" gap={2}>
				<Stack gap={1.5}>
					<H1>An error occurred</H1>
					<Text as="p">Something went wrong.</Text>
				</Stack>
				<Button onClick={reload}>Reload the page</Button>
			</Stack>
		</PageContent>
	);
}
