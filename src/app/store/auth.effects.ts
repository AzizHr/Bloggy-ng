import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, catchError, switchMap, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../store/auth.actions';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article/article.service";
import * as ArticleActions from "./article.actions";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ loginRequest }) =>
        this.authService.login(loginRequest).pipe(
          map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/articles');
            return AuthActions.loginSuccess({ user })
          }),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ registerRequest }) =>
        this.authService.register(registerRequest).pipe(
          map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/login');
            return AuthActions.registerSuccess({ user })
          }),
          catchError(error => of(AuthActions.registerFailure({ error })))
        )
      )
    )
  );

  loadUserArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUserArticles),
      mergeMap((action) =>
        this.articleService.getByAuthor(action.page, action.size, action.author).pipe(
          map((articles) => AuthActions.loadUserArticlesSuccess({ articles })),
          catchError((error) => of(AuthActions.loadUserArticlesFailure({ error: error.message })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private authService: AuthService, private articleService: ArticleService, private router: Router) {}
}
