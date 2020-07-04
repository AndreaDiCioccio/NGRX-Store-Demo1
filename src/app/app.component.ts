import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { User, StoreState } from './interfaces';
import { Observable } from 'rxjs';
import { updateUser } from './ngrx/actions';
import { FormGroup, FormControl } from '@angular/forms';
import { selectUser } from './ngrx/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    user$:Observable<User>

    userForm = new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        age: new FormControl('')
    });

    constructor(private store:Store<StoreState>){}

    ngOnInit(){
        this.user$ = this.store.pipe(select(selectUser))
    }

    updateUser(){
        let user:User = {
            name:String(this.userForm.controls.name.value),
            surname:String(this.userForm.controls.surname.value),
            age:Number(this.userForm.controls.age.value)
        }

        this.store.dispatch(updateUser({user:user}))
    }
    
}
