import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup,FormControl,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userFormBuilder: FormBuilder) {
    this.userBuildForm()
    
   }

  ngOnInit(): void {
  }
public userBuildForm(){
  this.userForm = this.userFormBuilder.group({
    id: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    gender: [''],
    age: [''],
    dateOfBirth: [''],
    hobbies: this.userFormBuilder.array([]),
  })
}

  
}
