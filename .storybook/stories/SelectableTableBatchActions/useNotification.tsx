import { useState, useLayoutEffect, RefObject, createRef } from 'react';
import { SectionAlert } from '@ag.ds-next/react/section-alert';

export function useNotification() {
	const [notification, setNotification] = useState<{
		message: string;
		dismissed: boolean;
		ref: RefObject<HTMLDivElement>;
	}>();

	function addNotification(message: string) {
		setNotification({
			ref: createRef<HTMLDivElement>(),
			dismissed: false,
			message,
		});
	}

	function dismissNotification() {
		setNotification(undefined);
	}

	function renderNotification() {
		if (notification && !notification.dismissed) {
			return (
				<SectionAlert
					ref={notification.ref}
					tabIndex={-1}
					tone="success"
					onDismiss={() => dismissNotification()}
					title={notification.message}
				/>
			);
		}
		return null;
	}

	// Focus the notification when it's visible
	useLayoutEffect(() => {
		notification?.ref.current?.focus();
	}, [notification]);

	return {
		addNotification,
		renderNotification,
	};
}
