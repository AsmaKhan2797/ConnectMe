import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCredentials } from '../models/UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(userCredentials: UserCredentials) : Observable<any> {
    var url = "login";
    return this.httpClient.post(url, {body: userCredentials});
  }
}
