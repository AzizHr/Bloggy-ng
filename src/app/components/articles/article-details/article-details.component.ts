import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as ArticleActions from '../../../store/actions/article.actions';
import {Article} from "../../../models/article.model";
import {selectArticle} from "../../../store/selectors/article.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{

  articleId: string;
  article$: Observable<Article>;
  article: Article;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.article$ = this.store.pipe(select(selectArticle(this.articleId)))
    console.log(this.article$);
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    this.store.dispatch(ArticleActions.loadArticle({ id: this.articleId }));
    this.article$.subscribe(data => {
      this.article = data;
      console.log(this.article);
    })
  }

}
