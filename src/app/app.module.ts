import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/articles/new-article/new-article.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { articleReducer } from "./store/reducers/article.reducers";
import { ArticleEffects } from "./store/effects/article.effects";
import { HttpClientModule } from "@angular/common/http";
import { commentReducer } from "./store/reducers/comment.reducers";
import { CommentEffects } from "./store/effects/comment.effects";
import { TagsComponent } from './components/articles/article/tags/tags.component';
import { TagComponent } from './components/articles/article/tags/tag/tag.component';
import { CommentsComponent } from "./components/articles/article/comments/comments.component";
import { CommentComponent } from "./components/articles/article/comments/comment/comment.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    NewArticleComponent,
    ArticleComponent,
    CommentsComponent,
    CommentComponent,
    TagsComponent,
    TagComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    StoreModule.forFeature('comments', commentReducer),
    EffectsModule.forRoot([ArticleEffects, CommentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
