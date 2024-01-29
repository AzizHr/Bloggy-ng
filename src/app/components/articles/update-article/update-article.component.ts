import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AppState } from "../../../state/app.state";
import { select, Store } from "@ngrx/store";
import { Article } from "../../../models/article.model";
import { MediaType } from "../../../enums/media-type.enum";
import * as ArticleActions from "../../../store/article.actions";
import { Observable } from "rxjs";
import { articleSelector, errorSelector, isLoadingSelector } from "../../../store/article.selectors";
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  isSubmitted: boolean = false;
  articleId: string;
  isLoading$: Observable<boolean>;
  article$: Observable<any>;
  article: any;
  loggedInUser: any = null;

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    medias: [''],
    tags: ['']
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.loggedInUser = this.getUser();
    if(!this.loggedInUser) {
      this.router.navigateByUrl('/login')
    }
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.article$ = this.store.pipe(select(articleSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.loadArticle({ id: this.articleId }));
    this.article$.subscribe(data => {
      this.article = data;
      this.patchFormValues();
      console.log(this.article);
    });
  }

  patchFormValues() {
    if (this.article) {
      this.articleForm.patchValue({
        title: this.article.title,
        content: this.article.content,
        tags: this.turnToString(this.article.tags)
      });
    }
  }

  update() {
    const article: Article = {
      id: this.article.id,
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      medias: [{ type: MediaType.IMAGE, url: 'https://img.freepik.com/premium-photo/floral-pattern-with-dainty-flowers-bold-blooms-ai-generative_841543-638.jpg' }],
      tags: this.splitTags(this.articleForm.value.tags),
      authorId: this.loggedInUser.id
    };

    this.store.dispatch(ArticleActions.updateArticle({ article: article }));
    this.isSubmitted = true;
  }

  splitTags(tags: string): string[] {
    return tags.split(', ');
  }

  isFieldValid(field: string): boolean {
    return this.articleForm.get(field)?.hasError('required') &&
      (this.articleForm.get(field)?.dirty ||
        this.articleForm.get(field)?.touched || this.isSubmitted);
  }

  turnToString(tags: string[] | undefined): string {
    if (tags && tags.length > 0) {
      return tags.join(', ');
    }
    return '';
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
}
