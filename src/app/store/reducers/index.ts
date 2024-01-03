import * as fromArticle from './article.reducers';
import {ActionReducerMap} from "@ngrx/store";

export { fromArticle };
export interface AppStore {

  articles: fromArticle.ArticleState

}

export const reducers: ActionReducerMap<AppStore> = {

  articles: fromArticle.articleReducer

}
