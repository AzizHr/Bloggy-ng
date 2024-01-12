import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ArticleActions from '../actions/article.actions';
import { ArticleService } from "../../services/article/article.service";

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticles),
      mergeMap((action) =>
        this.articleService.getAll(action.page, action.size).pipe(
          map((articles) => ArticleActions.loadArticlesSuccess({ articles })),
          catchError((error) => of(ArticleActions.loadArticlesFailure({ error: error.message })))
        )
      )
    )
  );

  addArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.addArticle),
      mergeMap((action) =>
        this.articleService.create(action.article).pipe(
          map((article) => ArticleActions.addArticleSuccess({ article })),
          catchError((error) => of(ArticleActions.addArticleFailure({ error: error.message })))
        )
      )
    )
  );

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.updateArticle),
      mergeMap((action) =>
        this.articleService.update(action.article).pipe(
          map((article) => ArticleActions.updateArticleSuccess({ article })),
          catchError((error) => of(ArticleActions.updateArticleFailure({ error: error.message })))
        )
      )
    )
  );

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      mergeMap((action) =>
        this.articleService.remove(action.id).pipe(
          map((message) => ArticleActions.deleteArticleSuccess({ message })),
          catchError((error) => of(ArticleActions.deleteArticleFailure({ error: error.message })))
        )
      )
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticle),
      mergeMap((action) =>
        this.articleService.getOne(action.id).pipe(
          map((article) => ArticleActions.loadArticleSuccess({ article })),
          catchError((error) => of(ArticleActions.loadArticleFailure({ error: error.message })))
        )
      )
    )
  );
}
