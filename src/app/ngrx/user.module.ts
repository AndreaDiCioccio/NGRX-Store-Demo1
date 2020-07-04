import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './user.reducers'

@NgModule({
  imports: [
    StoreModule.forFeature('auth', fromUsers.reducer)
  ],
})

export class UserModule {} 