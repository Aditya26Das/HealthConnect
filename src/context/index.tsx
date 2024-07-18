import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface UserContextType {
    isLoggedIn: boolean;
    isDoctor: boolean;
    userId: string | null;
    setUser: (user: Partial<UserContextType>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<Omit<UserContextType, 'setUser'>>({
        isLoggedIn: false,
        isDoctor: false,
        userId: null,
    });
    const setUser = (user: Partial<UserContextType>) => setState((prevState) => ({ ...prevState, ...user }));

    return (
        <UserContext.Provider value={{ ...state, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
