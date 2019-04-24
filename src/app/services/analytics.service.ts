import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getRepos() {
    return this._httpClient.get("https://api.github.com/orgs/angular/repos")
      .pipe(
        tap(res => console.log(res))
      );
  }

}
