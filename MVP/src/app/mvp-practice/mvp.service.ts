import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from './user-model/user.model';

@Injectable()

export class MVPService {

  Link: string = environment.url

  constructor(private http: HttpClient) { }

  // servive to get users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Link}/user`);
  }

  // servive to get users
  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.Link}/user`, user);
  }
  // servive to update users
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.Link}/user/${user.id}`, user);
  }

  // // service to delete user from list
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.Link}/user/${id}`);
  }
}
