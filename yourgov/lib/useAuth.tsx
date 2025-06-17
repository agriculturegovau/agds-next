import {
	useEffect,
	useState,
	createContext,
	useContext,
	PropsWithChildren,
} from 'react';
import { mockUser } from '../data/mockUsers';
import { safeSessionStorage } from './useSessionFormState';

export type User = {
	firstName: string;
	lastName: string;
	displayName: string;
};

type AuthContextType = {
	user: User | null;
	hasLoadedUser: boolean;
	signIn: (user: User) => void;
	signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw Error('AuthContext not found');
	}

	return context;
}

export function AuthProvider({ children }: PropsWithChildren<{}>) {
	const [hasLoadedUser, setHasLoadedUser] = useState(false);
	const [userState, setUserState] = useState<User | null>(null);

	useEffect(() => {
		if (!safeSessionStorage) return;

		// MAINTENANCE MODE: Bypass auth to allow navigating through the app
		signIn(mockUser);

		const value = safeSessionStorage.getItem('user');
		const parsedValue = value ? (JSON.parse(value) as User) : null;
		setUserState(parsedValue);
		setHasLoadedUser(true);
	}, []);

	function signIn(user: User) {
		if (!safeSessionStorage) return;
		safeSessionStorage.setItem('user', JSON.stringify(user));
		setUserState(user);
	}

	function signOut() {
		if (!safeSessionStorage) return;
		safeSessionStorage.clear();
		setUserState(null);
	}

	return (
		<AuthContext.Provider
			value={{
				user: userState,
				hasLoadedUser,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
