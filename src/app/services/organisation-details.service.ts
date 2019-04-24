import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganisationDetailsService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getOrgnaisationData() {
    return this._httpClient.get("https://api.github.com/orgs/angular")
      .pipe(
        tap(res => console.log(res))
      );
  }

  getMembersDetails() {
    return this._httpClient.get("https://api.github.com/orgs/angular/members")
      .pipe(
        tap(res => console.log(res))
      );
  }
}
