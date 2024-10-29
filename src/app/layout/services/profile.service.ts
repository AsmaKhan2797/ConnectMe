import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../../models/Profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl: string = "http://localhost:8100/";

  constructor(private httpClient: HttpClient) {}

  getProfileDetails(userName: string): Observable<Profile> {
    var url = this.baseUrl + "user/profile?userName="+ userName;
    return this.httpClient.get<Profile>(url);
  }
}
