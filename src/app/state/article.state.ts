import {ArticleResponse} from "../models/article/article-response.model";

export interface ArticleState {
  articles: ArticleResponse[];
}

export const initialState: ArticleState = {
  articles: []
}
