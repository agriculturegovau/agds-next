export const getInitialsFromName = (name?: string) => {
	if (!name) return '?';

	const [firstName = '', lastName = ''] = name.split(' ');
	return `${firstName[0] || ''}${lastName[0] || ''}`;
};
