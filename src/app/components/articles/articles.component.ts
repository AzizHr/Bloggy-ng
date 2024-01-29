import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { articlesSelector, errorSelector, isLoadingSelector } from "../../store/article.selectors";
import { Observable } from "rxjs";
import * as ArticleActions from '../../store/article.actions';
import { Article } from "../../models/article.model";
import { AppState } from "../../state/app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  isLoading$: Observable<boolean>;
  articles$: Observable<any>;
  error$: Observable<string | null>;
  articles: Article[] = [];

  currentPage: number = 0;
  totalElements: number = 0;
  limit: number = 3;
  totalPages: number = 0;
  pages: number[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.articles$ = this.store.pipe(select(articlesSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.all(this.currentPage, this.limit);
  }

  all(p: number, s: number) {
    this.store.dispatch(ArticleActions.loadArticles({ page: p, size: s }));
    this.articles$.subscribe(data => {
      this.articles = data.content;
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
    this.all(page, pageSize);
  }

}
