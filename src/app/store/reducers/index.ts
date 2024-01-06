import * as fromArticle from './article.reducers';
import * as fromComment from './comment.reducers';
import {ActionReducerMap} from "@ngrx/store";
export { fromArticle };
export { fromComment }

export interface AppStore {

  articles: fromArticle.ArticleState,
  comments: fromComment.CommentState

}

export const reducers: ActionReducerMap<AppStore> = {

  articles: fromArticle.articleReducer,
  comments: fromComment.commentReducer

}
