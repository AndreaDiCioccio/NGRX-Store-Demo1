import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthState, StoreState } from './models'

const selectAuthState = createFeatureSelector<StoreState, AuthState>('auth')

export const selectUser = createSelector(
    selectAuthState,
    (auth:AuthState) => auth.user
)