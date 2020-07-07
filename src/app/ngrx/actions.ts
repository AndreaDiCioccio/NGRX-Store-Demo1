import { createAction, props } from '@ngrx/store';
import { User } from './models';

export const updateUser = createAction(
    '[Home Page] update user',
    props< {user:User} >()
)