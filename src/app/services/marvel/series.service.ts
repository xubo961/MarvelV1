import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MarvelAuthParams} from '../utils/marvelAuth';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  url: string = "https://gateway.marvel.com:443/v1/public/series"
  marvelParams: any = null

  constructor(
    private http: HttpClient,
  ) {
    this.marvelParams = MarvelAuthParams()
  }

  getAllSeries(): Observable<any> {
    return this.http.get(this.url, {
      params: {
        ...this.marvelParams,
      }
    })
  }
}
