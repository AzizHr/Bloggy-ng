import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AppState} from "../../../state/app.state";
import {select, Store} from "@ngrx/store";
import {Article} from "../../../models/article.model";
import {MediaType} from "../../../enums/media-type.enum";
import * as ArticleActions from "../../../store/article.actions";
import {Observable} from "rxjs";
import {errorSelector} from "../../../store/article.selectors";
import Swal from 'sweetalert2'
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  isSubmitted: boolean = false;
  loggedInUser: any = null;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {

    this.loggedInUser = this.getUser();
    if(!this.loggedInUser) {
      this.router.navigateByUrl('/login')
    }

  }

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    medias: ['', Validators.required],
    tags: ['', Validators.required]
  });

  add() {
    const article: Article = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      medias: [{type: MediaType.IMAGE, url: this.articleForm.value.medias}],
      tags: this.splitTags(this.articleForm.value.tags),
      // authorId: "65b3c5495b1ac23c1c535645"
    }

    this.store.dispatch(ArticleActions.addArticle({ article: article }));

    this.isSubmitted = true;

  }

  splitTags(tags: string) {
    return tags.split(', ');
  }

  isFieldValid(field: string): boolean {
    return this.articleForm.get(field)?.hasError('required') &&
      (this.articleForm.get(field)?.dirty ||
        this.articleForm.get(field)?.touched || this.isSubmitted)
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
}
