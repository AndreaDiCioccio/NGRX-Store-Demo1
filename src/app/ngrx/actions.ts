import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces';

export const updateUser = createAction(
    '[Home Page] update user',
    props< {user:User} >()
)