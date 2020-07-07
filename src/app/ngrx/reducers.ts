import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions'
import { User } from './models';

//auth state, not store state
interface State {
    user:User
}

const initialState: State = {
    user: null
}

const userReducer = createReducer(
    initialState,
    on(actions.updateUser, (state, {user}) => ({ user:user }))
);
  
export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}