import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders:[UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {

  public userForm: FormGroup
  constructor(private userFromPresenterService:UserFormPresenterService) { 
    
    this.userForm = this.userFromPresenterService.buildForm();
  }

  ngOnInit(): void {
  }

}
