export * from '../components/designSystemComponents';

/**
 * Used in Playroom to wrap certain code examples so that we can set up state
 * etc before the return.
 */
export function Render({ children }: { children: () => JSX.Element }) {
	return children();
}

// Copy for Playroom from `docs/components`
export const PlaceholderImage = () => (
	<img
		alt="Grey placeholder"
		css={{ width: '100%' }}
		src={'/img/placeholder/600X260.png'}
	/>
);

// Copy for Playroom from `docs/components`
export const PlaceholderPictogram = () => (
	<svg
		fill="none"
		height="64"
		stroke="#00558B"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 64 64"
		width="64"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M31 36H17" />
		<path d="M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z" />
		<path d="M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49" />
		<path d="M27 46H17" />
		<path d="M41 26H17" />
		<path d="M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31" />
		<path d="M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54" />
	</svg>
);
