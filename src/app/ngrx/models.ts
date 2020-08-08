import { User } from '../interfaces'

export class AuthState{
    auth:User
}

export interface StoreState {
    auth: User
}