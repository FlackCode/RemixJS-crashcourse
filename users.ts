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

export const loginUser = (user: User) => {
    
}

export const findUser = (id: string) => {
    
}

export const findUserByEmailPassword = (email: string, password: string) => {
    
}

export const deleteUser = (id: string) => {
    
}
