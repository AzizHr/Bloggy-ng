// blog.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { blogAdapter, initialBlogState } from './blog.state';
import * as ArticleActions from '../../actions/article/article.actions';

export const articleReducer = createReducer(
    initialBlogState,
    on(ArticleActions.loadBArticlesSuccess, (state, { articles }) => blogAdapter.setAll(blogs, state)),
    on(ArticleActions.addArticleSuccess, (state, { article }) => blogAdapter.addOne(blog, state)),
    on(ArticleActions.updateArticleSuccess, (state, { article }) => blogAdapter.updateOne(update, state)),
    on(ArticleActions.deleteArticleSuccess, (state, { id }) => blogAdapter.removeOne(id, state))
);
