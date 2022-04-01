import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MVPService } from '../mvp.service';
import { User } from '../user-model/user.model';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  public usersList$: Observable<User[]>
   @Input() public id! : number 

  constructor(private service: MVPService) {

    this.usersList$ = new Observable();
    
  }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.usersList$ = this.service.getUsers();
    console.log(this.usersList$);

  }

  userFormData(data: User) {
    if(data.id){
      this.service.updateUser(data).subscribe(()=>
      alert("User Updated"))
    }else{

      console.log(data, "from conatiner");
      this.service.postUser(data).subscribe(
        () => {
          alert("User Added")
        })
      }
      this.getUsers()
    }


  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      () => {

        alert("User Deleted")

        this.getUsers()
      }
    )
  }
}
