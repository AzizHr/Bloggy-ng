import {Component, OnInit} from '@angular/core';
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
import {Router} from "@angular/router";
import {RegisterRequest} from "../../../models/register-request.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted = false;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRegister: boolean;
  user: Author | any;
  error: string | null = null;
  loggedInUser: any = null;

  registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
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
    return this.registerForm.get(field)?.hasError(errorType) &&
      (this.registerForm.get(field)?.dirty ||
        this.registerForm.get(field)?.touched || this.isSubmitted);
  }

  onSubmit() {
    const registerRequest: RegisterRequest = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.store.dispatch(AuthActions.register({ registerRequest }));
    this.isSubmitted = true;
    setTimeout(() => {
      if(!this.isRegister) {
        alert('Email already in use')
      }
    }, 1500);
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

}
