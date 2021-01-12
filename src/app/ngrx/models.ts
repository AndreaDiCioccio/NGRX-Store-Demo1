import { User } from '../interfaces'

export interface AuthState{
    user:User
}

export interface StoreState {
    auth: User
}