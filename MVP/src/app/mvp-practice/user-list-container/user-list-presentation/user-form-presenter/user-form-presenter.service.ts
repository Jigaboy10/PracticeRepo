import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/mvp-practice/user-model/user.model';

@Injectable()

export class UserFormPresenterService {

 public userForm: Subject<User>
 public userForm$: Observable<User>
 
 constructor(private fb: FormBuilder) {
   
   this.userForm = new Subject()
   this.userForm$ = this.userForm.asObservable()
  }
 
  buildForm() {
    return this.fb.group({
      id: [],
      firstName: [''],
      lastName: [''],
      gender: [''],
      age: [''],
      phoneNo: [''],
      })
  }


  submitForm(userForm : FormGroup){ 
    this.userForm.next(userForm.value)
  }
}
