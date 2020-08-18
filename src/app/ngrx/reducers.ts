import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions'
import { User } from '../interfaces';

interface UserState {
    user:User
}

const initialState: UserState = {
    user: null
}

const userReducer = createReducer(
    initialState,
    on(actions.updateUser, (state, {user}) => ({ user:user }))
);
  
export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}