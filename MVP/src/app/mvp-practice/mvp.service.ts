import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from './user-model/user.model';

@Injectable()

export class MVPService {

  Link: string = environment.url
  
  constructor(private http: HttpClient ) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Link}/user`);
  }
}
