/**
 * We use a github action for pull requests deploy preview
 * As they get published on a subpath, we need to also set the base path of images
 * See next.config.js
 */
export function withBasePath(src: string | undefined) {
	if (!src) return;
	// Don't replace external images
	if (/^(https?:\/\/|\/\/)/i.test(src)) return src;
	return [process.env.NEXT_PUBLIC_BASE_PATH, src].filter(Boolean).join('');
}
