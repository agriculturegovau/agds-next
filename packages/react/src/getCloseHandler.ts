
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (params?: any) => void

export function getRequiredCloseHandler(onClose: Fn | undefined, onDismiss: Fn | undefined): Fn {
	const closeHandler = onClose ? onClose : onDismiss

	throwErrorIfBothAreDefined(onClose, onDismiss)

	if (!closeHandler) {
		throw new Error('onClose prop is required')
	}

	return closeHandler
}

export function getOptionalCloseHandler(onClose: Fn | undefined, onDismiss: Fn | undefined): Fn | undefined {

	throwErrorIfBothAreDefined(onClose, onDismiss)

	return onClose ? onClose : onDismiss
}

function throwErrorIfBothAreDefined(onClose: Fn | undefined, onDismiss: Fn | undefined) {
	if (onClose && onDismiss) {
		throw new Error('Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated.')
	}
}
