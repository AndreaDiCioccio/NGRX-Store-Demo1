import { createSelector, createFeatureSelector } from '@ngrx/store'
import { StoreState } from './models'

const selectAuthState = createFeatureSelector<StoreState>('auth')

export const selectUser = createSelector(
    selectAuthState,
    (auth:any) => auth.user
)