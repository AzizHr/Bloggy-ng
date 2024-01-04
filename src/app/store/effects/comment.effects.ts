import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {mergeMap, map, catchError, exhaustMap} from 'rxjs/operators';
import * as CommentActions from '../actions/comment.actions';
import {CommentService} from "../../services/comment/comment.service";

@Injectable()
export class CommentEffects {
  loadArticleComments$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.loadArticleComments),
    exhaustMap((action) => this.commentService.findByArticle(action.articleId).pipe(
      map(comments => CommentActions.loadArticleCommentsSuccess({ comments })),
      catchError(async () => CommentActions.loadArticleCommentsFailure())
    ))
  ));

  addComment$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.addComment),
    mergeMap(action => this.commentService.create(action.comment).pipe(
      map(comment => CommentActions.addCommentSuccess({ comment })),
      catchError(async () => CommentActions.addCommentFailure())
    ))
  ));

  updateComment$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.updateComment),
    mergeMap(action => this.commentService.update(action.comment).pipe(
      map((comment) => CommentActions.updateCommentSuccess({ comment })),
      catchError(async () => CommentActions.updateCommentFailure())
    ))
  ));

  deleteComment$ = createEffect(() => this.actions$.pipe(
    ofType(CommentActions.deleteComment),
    mergeMap(action => this.commentService.remove(action.id).pipe(
      map(() => CommentActions.deleteCommentSuccess({ id: action.id })),
      catchError(async () => CommentActions.deleteCommentFailure())
    ))
  ));

  constructor(private actions$: Actions, private commentService: CommentService) {}
}
