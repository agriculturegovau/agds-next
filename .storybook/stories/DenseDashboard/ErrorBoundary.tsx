import React from 'react';
import { Button } from '@ag.ds-next/react/button';
import { Heading } from '@ag.ds-next/react/heading';
import { AlertFilledIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<Stack gap={2} alignItems="flex-start">
					<Stack gap={1}>
						<AlertFilledIcon color="error" size="lg" />
						<Heading type="h2" fontSize="lg">
							Failed to load
						</Heading>
						<Text>There was an error loading the data.</Text>
					</Stack>
					<Button>Retry</Button>
				</Stack>
			);
		}

		return this.props.children;
	}
}
