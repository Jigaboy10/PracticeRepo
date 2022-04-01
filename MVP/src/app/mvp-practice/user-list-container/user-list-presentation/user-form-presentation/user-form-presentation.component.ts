import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/mvp-practice/user-model/user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {


  private _editData: User;
  public get editData(): User {
    return this._editData;
  }
  @Input() public set editData(v: User) {
    if (v) {
      this.userFormTitle = "Edit User"
      this._editData = v;
    }
  }


  @Output() close: EventEmitter<Event>;

  @Output() userFormData: EventEmitter<User>;



  public userForm: FormGroup

  userFormTitle: string = "Add User";

  constructor(private userFromPresenterService: UserFormPresenterService) {

    this.userForm = this.userFromPresenterService.buildForm();
    this.userFormData = new EventEmitter()
    this.close = new EventEmitter<Event>()
    this._editData = {} as User
  }

  ngOnInit(): void {
    console.log("edit data", this.editData);

    this.userForm.patchValue(this.editData)
  }

  OnClose() {
    this.close.emit();
  }

  onSubmit() {
    this.userFromPresenterService.submitForm(this.userForm) // sending user form to presenter
    this.OnClose()
    console.log(this.userForm.value);
    this.userFormData.emit({...this.userForm.value,id:this.editData?.id})
  }
}
