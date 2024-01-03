import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as ArticleActions from '../../actions/article/article.actions';
import {ArticleService} from "../../../services/article/article.service";

@Injectable()
export class ArticleEffects {
    loadBlogs$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.loadArticles),
        mergeMap(() => this.articleService._getAll().pipe(
            map(articles => ArticleActions.loadBArticlesSuccess({ articles })),
            catchError(async () => ArticleActions.loadArticlesFailure())
        ))
    ));

    addBlog$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.addArticle),
        mergeMap(action => this.articleService.create(action.article).pipe(
            map(article => ArticleActions.addArticleSuccess({ article })),
            catchError(async () => ArticleActions.addArticleFailure())
        ))
    ));

    updateBlog$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.updateArticle),
        mergeMap(action => this.articleService.update(action.article).pipe(
            map((article) => ArticleActions.updateArticleSuccess({ article })),
            catchError(async () => ArticleActions.updateArticleFailure())
        ))
    ));

    deleteBlog$ = createEffect(() => this.actions$.pipe(
        ofType(ArticleActions.deleteArticle),
        mergeMap(action => this.articleService.remove(action.id).pipe(
            map(() => ArticleActions.deleteArticleSuccess({ id: action.id })),
            catchError(async () => ArticleActions.deleteArticleFailure())
        ))
    ));

    constructor(private actions$: Actions, private articleService: ArticleService) {}
}
