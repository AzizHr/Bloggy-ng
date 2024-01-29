import {Component, OnChanges, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {Author} from "../../../models/author.model";
import {
  errorSelector,
  isLoadingSelector,
  isLoggedInSelector,
  isRegisteredSelector,
  userSelector
} from "../../../store/auth.selectors";
import {FormBuilder, Validators} from "@angular/forms";
import * as AuthActions from '../../../store/auth.actions';
import {LoginRequest} from "../../../models/login-request.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRegister: boolean;
  user: Author | any;
  error: string | null = null;
  loggedInUser: any = null;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required] //
  });

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {
    this.loggedInUser = this.getUser();
    if(this.loggedInUser) {
      this.router.navigateByUrl('/my-articles')
    }
    this.store.pipe(select(isLoadingSelector)).subscribe(isLoading => this.isLoading = isLoading);
    this.store.pipe(select(isLoggedInSelector)).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.store.pipe(select(isRegisteredSelector)).subscribe(isRegister => this.isRegister = isRegister);
    this.store.pipe(select(userSelector)).subscribe(user => this.user = user);
    this.store.pipe(select(errorSelector)).subscribe(error => this.error = error);
  }

  ngOnInit(): void {}

  isFieldValid(field: string, errorType: string): boolean {
    return this.loginForm.get(field)?.hasError(errorType) &&
      (this.loginForm.get(field)?.dirty ||
        this.loginForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const loginRequest: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.store.dispatch(AuthActions.login({ loginRequest }));
    this.isSubmitted = true;
    setTimeout(() => {
      if(!this.isLoggedIn) {
        alert('Email or password invalid')
      }
    }, 1500);
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

}
