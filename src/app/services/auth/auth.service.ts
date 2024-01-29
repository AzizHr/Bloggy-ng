import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Author} from "../../models/author.model";
import {LoginRequest} from "../../models/login-request.model";
import {RegisterRequest} from "../../models/register-request.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = "http://localhost:8080/api/auth";
  constructor(private http: HttpClient) {}

  public login(loginRequest: LoginRequest): Observable<Author> {
    return this.http.post<Author>(`${this.api}/login`, loginRequest)
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }

  public register(registerRequest: RegisterRequest): Observable<Author> {
    return this.http.post<Author>(`${this.api}/register`, registerRequest)
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw error;
        })
      );
  }
}
