import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user-model/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit {
  
  @Input() public set usersList(value: User[] | null) {
    if (value) {
      if (this._usersListOrig == null) {
        this._usersListOrig = value;
      }
      this._usersList = value;
      
      console.log(this._usersList);
    }
  }
  
  public get usersList(): User[] | null {
    
    return this._usersList;
  }
  private _usersListOrig: User[] | null = null;
  private _usersList!: User[];


  // @Input() public usersList: User[] | null  = [];
  constructor(private userListPresenterService:UserListPresenterService) { 

  }

  ngOnInit(): void {
  }
  openOverlay(){
this.userListPresenterService.openForm();
  }
}
