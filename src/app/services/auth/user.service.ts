import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/users`);
  }
}
