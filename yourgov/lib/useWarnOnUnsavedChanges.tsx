import { type ReactNode, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

interface UseWarnOnUnsavedChangesProps {
	functionToCallWhenLeaving?: () => void;
	shouldBypass?: boolean;
	shouldWarn?: boolean;
	WarnModal: (props: {
		onConfirm: () => void;
		onCancel: () => void;
		showModal: boolean;
	}) => ReactNode;
}

export function useWarnOnUnsavedChanges({
	functionToCallWhenLeaving,
	shouldBypass,
	shouldWarn,
	WarnModal,
}: UseWarnOnUnsavedChangesProps) {
	const router = useRouter();
	const [nextUrl, setNextUrl] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);

	const handleRouteChange = useCallback(
		(url: string) => {
			// if (isSubmitting) {
			// 	return;
			// }
			console.log(`shouldWarn`, shouldWarn);
			// console.log(`canNavigate`, canNavigate);
			console.log(`url`, url);
			console.log(`nextUrl`, nextUrl);
			setNextUrl(url.replace(router.basePath, ''));
			// if (shouldWarn) {
			console.log(
				`url.replace(router.basePath, '')`,
				url.replace(router.basePath, '')
			);
			setShowModal(true);
			// if (!canNavigate) {
			router.events.emit('routeChangeError'); // Prevents immediate navigation
			throw 'Navigation aborted due to unsaved changes.'; // Required to stop
			// Next.js navigation
			// }
			// } else if (nextUrl) {
			// 	router.push(nextUrl);
			// }
		},
		[shouldWarn, router, nextUrl]
	);

	useEffect(() => {
		console.log(`shouldWarn`, shouldWarn);
		console.log(`shouldBypass`, shouldBypass);
		if (Boolean(shouldWarn) && !shouldBypass) {
			router.events.on('routeChangeStart', handleRouteChange);
		} else {
			router.events.off('routeChangeStart', handleRouteChange);
		}

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [shouldBypass, shouldWarn, router, handleRouteChange]);

	const confirmNavigation = () => {
		console.log(`confirmNavigation`);
		router.events.off('routeChangeStart', handleRouteChange);
		setShowModal(false);

		if (nextUrl) {
			functionToCallWhenLeaving?.();
			router.push(nextUrl);
		}
	};

	const cancelNavigation = () => {
		console.log(`cancelNavigation`);
		setShowModal(false);
		setNextUrl(null);
	};

	return (
		<WarnModal
			onCancel={cancelNavigation}
			onConfirm={confirmNavigation}
			showModal={showModal}
		/>
	);
}
