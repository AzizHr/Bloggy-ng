import {Component, OnInit} from '@angular/core';
import {ArticleResponse} from "../../models/article/article-response.model";
import {select, Store} from "@ngrx/store";
import {selectArticles} from "../../store/selectors/article/article.selectors";
import {AppStore} from "../../store/reducers";
import {Observable} from "rxjs";
import * as ArticleActions from '../../store/actions/article/article.actions';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<ArticleResponse[]>;
  articles: ArticleResponse[] = [];

  constructor(private store: Store<AppStore>) {
    this.articles$ = this.store.pipe(select(selectArticles))
  }
  ngOnInit(): void {

    this.store.dispatch(ArticleActions.loadArticles());
    this.articles$.subscribe(articles => {
      this.articles = articles;
      console.log(this.articles);
    })

  }

}
