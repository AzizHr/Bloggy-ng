import {Component, Input} from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import * as CommentActions from "../../../../store/actions/comment.actions";
import { CommentResponse } from "../../../../models/comment/comment-response.model";
import { AppStore } from "../../../../store/reducers";
import { selectComments } from "../../../../store/selectors/comment.selectors";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {

  comments$: Observable<CommentResponse[]>;
  comments: CommentResponse[] = [];

  @Input() articleId!: string;
  constructor(private store: Store<AppStore>) {
    this.comments$ = this.store.pipe(select(selectComments))
  }

  ngOnInit(): void {
    console.log(this.articleId);
    this.store.dispatch(CommentActions.loadArticleComments({ articleId: this.articleId }));
    this.comments$.subscribe(comments => {
      this.comments = comments;
      console.log(`comments for article => ${this.articleId}`);
      console.log(this.comments);
    })
  }

}
