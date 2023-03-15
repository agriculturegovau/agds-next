import { Menu } from './Menu';

export default {
	title: 'Testing/Menu',
};

export const Links = () => (
	<Menu
		links={[
			{ label: 'Account', href: '#account' },
			{ label: 'Settings', href: '#settings' },
			{ label: 'Messages', href: '#messages' },
		]}
	/>
);
