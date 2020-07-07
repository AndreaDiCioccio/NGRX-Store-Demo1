import { createSelector, createFeatureSelector } from '@ngrx/store'
import { AuthState } from './models'

const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectUser = createSelector(
    selectAuthState,
    (auth:any) => auth.user
)