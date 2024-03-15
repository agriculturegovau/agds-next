// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (params?: any) => void;

export const closeHandlerWarningMessage =
	'Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated. Only onClose will be called.';

export function getRequiredCloseHandler(
	onClose: Fn | undefined,
	onDismiss: Fn | undefined
): Fn {
	const closeHandler = onClose ? onClose : onDismiss;

	handleWarnings(onClose, onDismiss);

	if (!closeHandler) {
		throw new Error('onClose prop is required');
	}

	return closeHandler;
}

export function getOptionalCloseHandler(
	onClose: Fn | undefined,
	onDismiss: Fn | undefined
): Fn | undefined {
	handleWarnings(onClose, onDismiss);

	return onClose ? onClose : onDismiss;
}

function handleWarnings(
	onClose: Fn | undefined,
	onDismiss: Fn | undefined
) {
	if (onClose && onDismiss) {
		console.warn(closeHandlerWarningMessage)
	} else if (onDismiss) {
		console.warn('onDismiss is deprecated. Use onClose instead.')
	}
}
