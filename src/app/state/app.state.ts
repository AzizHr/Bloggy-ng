import {ArticleState} from "./article.state";
import {AuthState} from "./auth.state";

export interface AppState {
  articles: ArticleState
  auth: AuthState
}
