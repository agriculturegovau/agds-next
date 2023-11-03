import {
	useEffect,
	useState,
	createContext,
	useContext,
	PropsWithChildren,
} from 'react';
import { useRouter } from 'next/router';

export type UserRole = 'Employer' | 'Employee';

export type User = {
	firstName: string;
	lastName: string;
	displayName: string;
	role: UserRole;
};

type AuthContextType = {
	user: User | null;
	hasLoadedUser: boolean;
	signIn: (user: User) => void;
	signOut: () => void;
	isRedirectingToSignIn: boolean;
	onSignInButtonClick: () => void;
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
	const router = useRouter();

	const [hasLoadedUser, setHasLoadedUser] = useState(false);
	const [userState, setUserState] = useState<User | null>(null);

	useEffect(() => {
		if (typeof sessionStorage === undefined) return;
		const value = sessionStorage.getItem('user');
		const parsedValue = value ? (JSON.parse(value) as User) : null;
		setUserState(parsedValue);
		setHasLoadedUser(true);
	}, []);

	function signIn(user: User) {
		sessionStorage.setItem('user', JSON.stringify(user));
		setUserState(user);
		router.push('/app');
	}

	function signOut() {
		sessionStorage.clear();
		setUserState(null);
	}

	const [isRedirectingToSignIn, setIsRedirectingToSignIn] = useState(false);

	function onSignInButtonClick() {
		setIsRedirectingToSignIn(true);
		setTimeout(() => {
			setIsRedirectingToSignIn(false);
			router.push('/sign-in');
		}, 2000);
	}

	return (
		<AuthContext.Provider
			value={{
				user: userState,
				hasLoadedUser,
				signIn,
				signOut,
				onSignInButtonClick,
				isRedirectingToSignIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
