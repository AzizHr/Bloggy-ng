import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as ArticleActions from '../actions/article.actions';
import {ArticleService} from "../../services/article/article.service";

@Injectable()
export class ArticleEffects {
    loadArticles$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.loadArticles),
        mergeMap((action) => this.articleService.getAll(action.page, action.size).pipe(
            map(articles => ArticleActions.loadBArticlesSuccess({ articles })),
            catchError(async () => ArticleActions.loadArticlesFailure())
        ))
    ));

    addArticle$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.addArticle),
        mergeMap(action => this.articleService.create(action.article).pipe(
            map(article => ArticleActions.addArticleSuccess({ article })),
            catchError(async () => ArticleActions.addArticleFailure())
        ))
    ));

    updateArticle$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.updateArticle),
        mergeMap(action => this.articleService.update(action.article).pipe(
            map((article) => ArticleActions.updateArticleSuccess({ article })),
            catchError(async () => ArticleActions.updateArticleFailure())
        ))
    ));

    deleteArticle$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.deleteArticle),
        mergeMap(action => this.articleService.remove(action.id).pipe(
            map(() => ArticleActions.deleteArticleSuccess({ id: action.id })),
            catchError(async () => ArticleActions.deleteArticleFailure())
        ))
    ));

    constructor(private actions$: Actions, private articleService: ArticleService) {}
}
