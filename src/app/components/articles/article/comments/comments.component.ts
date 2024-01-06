import {Component, Input} from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import * as CommentActions from "../../../../store/actions/comment.actions";
import { CommentResponse } from "../../../../models/comment/comment-response.model";
import { AppStore } from "../../../../store/reducers";
import { selectCommentsByArticle } from "../../../../store/selectors/comment.selectors";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {

  // comments$: Observable<any>;
  @Input() comments: CommentResponse[];
  @Input() article: string;

  // constructor(private store: Store<AppStore>) {
  //   this.comments$ = this.store.pipe(select(selectCommentsByArticle(this.article)))
  // }
  //
  // ngOnInit(): void {
  //   console.log(this.article);
  //   this.store.dispatch(CommentActions.loadArticleComments({ article: this.article }));
  //   this.comments$.subscribe(comments => {
  //     this.comments = comments;
  //     console.log(`comments for article => ${this.article}`);
  //     console.log(this.comments);
  //   })
  // }

}
