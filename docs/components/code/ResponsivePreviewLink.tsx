import { usePathname } from 'next/navigation';
import { createPreviewUrl } from 'playroom';
import { Box } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Heading } from '@ag.ds-next/react/heading';
import { ChevronRightIcon } from '@ag.ds-next/react/icon';
import { TextLink } from '@ag.ds-next/react/text-link';
import { checkAndModifyCode } from './utils';

// Query param keys consumed by the responsive preview page
export const responsivePreviewQueryKeys = {
	/** iframe URL support, use instead of `code`*/
	frameSrc: 'src',
	playroomCode: 'code',
	/** Option to enable/disable padding on top, left and right of the frame. Used for full page previews. */
	padding: 'padding',
	returnLink: 'return',
	/** Sizes are set by the user on the responsive preview page */
	previewSize: 'size',
	title: 'title',
};

export function ResponsivePreviewLink({
	children,
	code,
	frameSrc,
	padding = true,
	standalone = false,
	title,
}: {
	children: React.ReactNode;
	code?: string;
	frameSrc?: string;
	padding?: boolean;
	standalone?: boolean;
	title: string;
}) {
	const urlParams = new URLSearchParams();

	if (title) urlParams.append(responsivePreviewQueryKeys.title, title);
	if (frameSrc) urlParams.append(responsivePreviewQueryKeys.frameSrc, frameSrc);
	if (code) {
		const playroomPreviewUrl = createPreviewUrl({
			baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
			code: checkAndModifyCode(code),
		});
		urlParams.append(
			responsivePreviewQueryKeys.playroomCode,
			playroomPreviewUrl
		);
	}
	if (!padding) urlParams.append(responsivePreviewQueryKeys.padding, 'false');

	const pathname = usePathname();
	urlParams.append(responsivePreviewQueryKeys.returnLink, pathname);

	const href = `/preview/responsive?${urlParams.toString()}`;

	// Link without live preview
	if (standalone) {
		return (
			<Box css={{ marginTop: '1.5rem' }}>
				<TextLink href={href}>
					<Heading
						alignItems="center"
						as="span"
						color="inherit"
						gap={0.25}
						type="h3"
					>
						{children}
					</Heading>
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
