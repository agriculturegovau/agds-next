import { useState, useLayoutEffect, RefObject, createRef } from 'react';
import { SectionAlert } from '../../../packages/react/src/section-alert';

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
					onClose={() => dismissNotification()}
					ref={notification.ref}
					tabIndex={-1}
					title={notification.message}
					tone="success"
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
