export class User {
    name:string
    surname:string
    age:number
}

export class AuthState{
    auth:User
}

export interface StoreState {
    auth: User
}