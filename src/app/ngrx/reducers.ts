import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions'
import { AuthState } from './models';

const initialState: AuthState = {
    user: null
}

const userReducer = createReducer(
    initialState,
    on(actions.updateUser, (state, {user}) => ({ user:user }))
);
  
export function reducer(state: AuthState | undefined, action: Action) {
    return userReducer(state, action);
}