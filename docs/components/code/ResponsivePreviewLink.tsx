import { usePathname } from 'next/navigation';
import { createPreviewUrl } from 'playroom';
import { Box } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { mapSpacing } from '@ag.ds-next/react/core';
import { ChevronRightIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { checkAndModifyCode } from './utils';

// Query param keys consumed by the responsive preview page
export const responsivePreviewQueryKeys = {
	/** iframe source used for the responsive preview. */
	frameSrc: 'src',
	/**
	 * Option to enable/disable padding on top, left and right of the frame.
	 * Only use for full page or already padded previews, not component previews.
	 */
	padding: 'padding',
	/** Label text for the back button. Back button is prefixed with `Back to {referrerLabel}`. */
	referrerLabel: 'referrer-label',
	/** Back button link href. */
	referrerLink: 'referrer-link',
	/** Sizes are set by the user on the responsive preview page. */
	previewSize: 'size',
	/** H1 title on responsive preview page. */
	title: 'title',
};

export function ResponsivePreviewLink({
	children,
	code,
	referrerLabel,
	src,
	padding = true,
	standalone = false,
	title,
}: {
	children: React.ReactNode;
	code?: string;
	padding?: boolean;
	referrerLabel?: string;
	src?: string;
	standalone?: boolean;
	title: string;
}) {
	const urlParams = new URLSearchParams();

	if (title) urlParams.append(responsivePreviewQueryKeys.title, title);
	if (!padding) urlParams.append(responsivePreviewQueryKeys.padding, 'false');

	if (src) urlParams.append(responsivePreviewQueryKeys.frameSrc, src);
	else if (code) {
		const playroomPreviewUrl = createPreviewUrl({
			baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
			code: checkAndModifyCode(code),
		});
		urlParams.append(responsivePreviewQueryKeys.frameSrc, playroomPreviewUrl);
	}

	const pathname = usePathname();
	urlParams.append(responsivePreviewQueryKeys.referrerLink, pathname);
	if (referrerLabel) {
		urlParams.append(responsivePreviewQueryKeys.referrerLabel, referrerLabel);
	}

	const href = `/responsive-preview?${urlParams.toString()}`;

	// Link without live preview
	if (standalone) {
		return (
			<Box css={{ marginTop: mapSpacing(1.5) }}>
				<TextLink href={href}>
					<Text as="span" color="inherit" fontSize="lg" fontWeight="bold">
						{children}
					</Text>
					<ChevronRightIcon css={{ verticalAlign: 'text-bottom' }} />
				</TextLink>
			</Box>
		);
	}

	// Inline with code actions
	return (
		<ButtonLink href={href} size="sm" variant="tertiary">
			{children}
		</ButtonLink>
	);
}
