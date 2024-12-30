import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from './register-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  registerUser(user: RegisterData ) {
    console.log('Register Data:', user);
    return this._http.post<any>(this._url, user)
  }
}
