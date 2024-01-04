import {Component, OnInit} from '@angular/core';
import {ArticleResponse} from "../../models/article/article-response.model";
import {select, Store} from "@ngrx/store";
import {selectArticles} from "../../store/selectors/article.selectors";
import {AppStore} from "../../store/reducers";
import {Observable} from "rxjs";
import * as ArticleActions from '../../store/actions/article.actions';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<any>;
  articles: ArticleResponse[] = [];

  constructor(private store: Store<AppStore>) {
    this.articles$ = this.store.pipe(select(selectArticles))
  }
  ngOnInit(): void {

    this.store.dispatch(ArticleActions.loadArticles({ page: 0, size: 9 }));
    this.articles$.subscribe(articles => {
      this.articles = articles.content;
      console.log(this.articles);
    })

  }

}
