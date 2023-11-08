import { useRouter } from 'next/router';

/**
 * We use a github action for pull requests deploy preview
 * As they get published on a subpath, we need to also set the base path of images
 * See next.config.js
 */
export function useWithBasePath() {
	const router = useRouter();

	return function withBasePath(src: string | undefined) {
		if (!src) return;

		// Don't replace external images
		if (/^(https?:\/\/|\/\/)/i.test(src)) return src;
		return [router.basePath, src].filter(Boolean).join('');
	};
}
