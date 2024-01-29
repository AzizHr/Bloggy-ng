import {Article} from "../models/article.model";

export interface ArticleState {
  isLoading: boolean;
  articles: Article[];
  selectedArticle: any;
  error: string | null;
}

export const initialState: ArticleState = {
  isLoading: false,
  articles: [],
  selectedArticle: {},
  error: null
};
