import * as ArticleActions from './article.actions';
import {createReducer, on} from "@ngrx/store";
import { initialState } from "../state/article.state";


// @ts-ignore
export const articleReducer = createReducer(
  initialState,
  // Load Articles
  on(ArticleActions.loadArticles, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.loadArticlesSuccess, (state, action) => ({ ...state, isLoading: false, articles: action.articles })),
  on(ArticleActions.loadArticlesFailure, (state, action) => ({ ...state, error: action.error })),

  // Add Article
  on(ArticleActions.addArticle, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.addArticleSuccess, (state, action) => ({ ...state, isLoading: false, selectedArticle: action.article })),
  on(ArticleActions.addArticleFailure, (state, action) => ({ ...state, error: action.error })),

  // Update Article
  on(ArticleActions.updateArticle, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.updateArticleSuccess, (state, action) => ({ ...state, isLoading: false, selectedArticle: action.article })),
  on(ArticleActions.updateArticleFailure, (state, action) => ({ ...state, error: action.error })),

  // Delete Article
  on(ArticleActions.deleteArticle, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.deleteArticleSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    articles: state.articles.filter(a => a.id != action.id)
  })),
  on(ArticleActions.deleteArticleFailure, (state, action) => ({ ...state, error: action.error })),

  // Load Article
  on(ArticleActions.loadArticle, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.loadArticleSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    selectedArticle: action.article
  })),
  on(ArticleActions.loadArticleFailure, (state, action) => ({ ...state, error: action.error })),
  // Add Comment
  on(ArticleActions.addComment, (state) => ({ ...state, isLoading: true })),
  on(ArticleActions.addCommentSuccess, (state, action) => ({ ...state, isLoading: false,
    selectedArticle: {
      ...state.selectedArticle,
      comments: [...state.selectedArticle.comments, action.comment] // Assuming selectedArticle has a 'comments' property
    }
  })),
  on(ArticleActions.addCommentFailure, (state, action) => ({ ...state, error: action.error }))
);
