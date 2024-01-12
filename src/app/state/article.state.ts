import {Article} from "../models/article.model";

export interface ArticleState {
  articles: Article[];
  error: string;
}

export const initialState: ArticleState = {
  articles: [],
  error: null
};
