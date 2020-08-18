import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers'

@NgModule({
    imports: [
        StoreModule.forFeature('auth', reducers.reducer)
    ]
})

export class UserModule {} 