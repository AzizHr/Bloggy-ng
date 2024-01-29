import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {Article} from "../../../models/article.model";
import {AppState} from "../../../state/app.state";
import {errorSelector, isLoadingSelector, userArticlesSelector} from "../../../store/auth.selectors";
import * as AuthActions from '../../../store/auth.actions';
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  loggedInUser = null;
  isLoading$: Observable<boolean>;
  userArticles$: Observable<any>;
  error$: Observable<string | null>;
  userArticles: Article[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.loggedInUser = this.getUser();
    if(!this.loggedInUser) {
      this.router.navigateByUrl('/login')
    }
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.userArticles$ = this.store.pipe(select(userArticlesSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.myArticles(this.currentPage, this.limit);
  }

  myArticles(p: number, s: number) {
    this.store.dispatch(AuthActions.loadUserArticles({ page: p, size: s, author: this.loggedInUser.id }));
    this.userArticles$.subscribe(data => {
      this.userArticles = data.content;
      this.totalElements = data.totalElements;
      this.totalPages = Math.ceil(this.totalElements / this.limit);
      this.pages = [...Array(this.totalPages).keys()];
    });
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages - 1;
  }

  onPageChange(event: any) {
    const page = event.page;
    const pageSize = event.rows;
    this.currentPage = page;
    this.myArticles(page, pageSize);
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

}
