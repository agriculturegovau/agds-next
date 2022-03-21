import { boxPalette } from '@ag.ds-next/core';

const colorMap = {
	bg: boxPalette.backgroundBody,
	fg: boxPalette.foregroundText,
};

export const SuccessIcon = () => {
	const { bg, fg } = colorMap;
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1Z"
				fill={bg}
			/>
			<path
				d="M7 13L10 16L17 9"
				stroke={fg}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ErrorIcon = () => {
	const { bg, fg } = colorMap;
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.6 1H7.4L1 7.4V16.5L7.4 23H16.5L22.9 16.6V7.4L16.6 1V1Z"
				fill={bg}
			/>
			<line
				x1="16.2425"
				y1="16.2426"
				x2="7.75724"
				y2="7.75736"
				stroke={fg}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<line
				x1="7.75732"
				y1="16.2426"
				x2="16.2426"
				y2="7.75737"
				stroke={fg}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const InfoIcon = () => {
	const { bg, fg } = colorMap;
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1Z"
				fill={bg}
			/>
			<line
				x1="12"
				y1="17"
				x2="12"
				y2="11"
				stroke={fg}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="12" cy="7" r="1" fill={fg} />
		</svg>
	);
};

export const WarningIcon = () => {
	const { bg, fg } = colorMap;
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 0L0 20.8H24L12 0V0Z"
				fill={bg}
			/>
			<line
				x1="12"
				y1="13"
				x2="12"
				y2="8"
				stroke={fg}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="12" cy="17" r="1" fill={fg} />
		</svg>
	);
};
