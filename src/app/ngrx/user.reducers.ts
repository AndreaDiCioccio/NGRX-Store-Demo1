import { Action, createReducer, on } from '@ngrx/store';
import * as userAction from './user.actions'
import { User } from '../interfaces';


interface State {
    user:User
}

const initialState: State = {
    user: undefined
}

const userReducer = createReducer(
    initialState,
    on(userAction.updateUser, (state, {user}) => ({ user:user }))
);
  
export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}