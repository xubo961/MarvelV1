import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginUser} from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:8080/api/users";

  constructor(
    private http: HttpClient,
  ) { }

  login(credenciales: LoginUser) : Observable<any> {
    // `${this.url/login}` esto es lo mismo que lo de abajo
    return this.http.post(this.url + "/login", credenciales, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  loginv2(credenciales: LoginUser) : Observable<any> {
    // `${this.url/login}` esto es lo mismo que lo de abajo
    return this.http.post(this.url + "/login/v2", credenciales, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  setUser(dato: LoginUser, user_id: any): void {
    sessionStorage.setItem("user", JSON.stringify({...dato, id: user_id}));
  }

  getUser(): LoginUser | null {
    const user = JSON.parse(<string> sessionStorage.getItem("user"));
    return user ? user : null;
  }

  deleteUser(): void {
    const user = JSON.parse(<string> sessionStorage.getItem("user"));
    if (user) {
      sessionStorage.removeItem("user");
    }
  }
}
