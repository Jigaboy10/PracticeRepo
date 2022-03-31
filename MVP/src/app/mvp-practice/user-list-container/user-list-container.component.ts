import { Component, OnInit } from '@angular/core';
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
  constructor(private service: MVPService) { 
    
    this.usersList$ = new Observable();
  }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.usersList$ = this.service.getUsers();
    console.log( this.usersList$);
    
  }
}
