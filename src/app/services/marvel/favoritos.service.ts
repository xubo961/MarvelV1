import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  url: string = "http://localhost:8080/api/favoritos";

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(userId: any): Observable<any> {
    return this.http.get(this.url, + "/" + userId);
  }
}
