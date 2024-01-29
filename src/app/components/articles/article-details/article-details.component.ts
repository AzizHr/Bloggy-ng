import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as ArticleActions from '../../../store/article.actions';
import {Article} from "../../../models/article.model";
import {Observable} from "rxjs";
import {articleSelector, isLoadingSelector} from "../../../store/article.selectors";
import {AppState} from "../../../state/app.state";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginRequest} from "../../../models/login-request.model";
import * as AuthActions from "../../../store/auth.actions";
import {Comment} from "../../../models/comment.model";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{

  isSubmitted: boolean = false;
  loggedInUser: any = null;
  articleId: string;
  isLoading$: Observable<boolean>;
  article$: Observable<{}>;
  article: any;

  commentForm = this.formBuilder.group({
    content: ['', Validators.required],
  });

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.article$ = this.store.pipe(select(articleSelector))
    console.log(this.article$);
    this.loggedInUser = this.getUser();
  }

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.loadArticle({ id: this.articleId }));
    this.article$.subscribe(data => {
        this.article = data;
        console.log(this.article);
    })
  }

  onSubmit() {
    const comment: Comment = {
      content: this.commentForm.value.content,
      articleId: this.articleId,
      authorId: this.loggedInUser ? this.loggedInUser.id : "65b3c5495b1ac23c1c535645"
    }

    this.store.dispatch(ArticleActions.addComment({ comment }));
    this.isSubmitted = true;
    this.commentForm.value.content = '';
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  isFieldValid(field: string, errorType: string): boolean {
    return this.commentForm.get(field)?.hasError(errorType) &&
      (this.commentForm.get(field)?.dirty ||
        this.commentForm.get(field)?.touched || this.isSubmitted);
  }

}
