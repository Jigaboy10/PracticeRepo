import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()

export class UserFormPresenterService {

  constructor(private fb: FormBuilder) { }

  buildForm() {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      age: [''],
      phoneNo: [''],
      })
  }
}
