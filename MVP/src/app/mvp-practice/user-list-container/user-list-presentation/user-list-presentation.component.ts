import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user-model/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService]
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

  public get usersList(): User[] {

    return this._usersList;
  }


  @Output() userFormData: EventEmitter<User>;
  @Output() updateduserFormData: EventEmitter<User>;
  @Output() deleteId: EventEmitter<number>;

  private _usersListOrig!: User[] ;
  private _usersList!: User[];
 
 
  public searchText: string;

  // @Input() public usersList: User[] | null  = [];
  constructor(private userListPresenterService: UserListPresenterService) {
    this.userFormData = new EventEmitter()
    this.updateduserFormData = new EventEmitter()
    this.deleteId = new EventEmitter()
    
    this.searchText = ''

    this.userListPresenterService.filteredData$.subscribe((filteredData: User[]) =>{
      this.usersList= filteredData
    })

  }

  ngOnInit(): void {
    this.userListPresenterService.userFromData$.subscribe((data) => {
      console.log(data, "list from presentation");
      this.userFormData.emit(data)
      this.updateduserFormData.emit(data)
    }
    )
  }
  // open overlay
  openOverlay(user?: User) {
    this.userListPresenterService.openForm(user);
  }

  openFilterOverlay() {
    if (this._usersListOrig) {
     
      this.userListPresenterService.openFilterForm(this._usersListOrig);
    }
  }
// delete 
delete(id: number){
this.deleteId.emit(id)
}
}
