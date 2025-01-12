export interface User {
    id: string,
    name: string,
    email: string,
    password: string
}

export const users: User[] = [
    {
        id: "1",
        name: "Flack",
        email: "flack@gmail.com",
        password: "test123"
    }
]

export const addUser = (user: User) => {
    const existingUser = findUserByEmailPassword(user.email, user.password);

    if (!existingUser) {
        users.push(user);
    }


}

export const findUser = (id: string) => {
    
}

export const findUserByEmailPassword = (email: string, password: string) : User | undefined => {
    return users.find((u) => u.email === email && u.password === password);
}

export const deleteUser = (id: string) => {
    
}
