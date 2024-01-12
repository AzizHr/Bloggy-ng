import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { articleReducer } from "./store/reducers/article.reducers";
import { ArticleEffects } from "./store/effects/article.effects";
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import {AddArticleComponent} from "./components/articles/add-article/add-article.component";
import { CommentsComponent } from './components/articles/article-details/comments/comments.component';
import { CommentComponent } from './components/articles/article-details/comments/comment/comment.component';
import { TagsComponent } from './components/articles/article-details/tags/tags.component';
import { TagComponent } from './components/articles/article-details/tags/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    ArticleComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    CommentsComponent,
    CommentComponent,
    TagsComponent,
    TagComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forRoot([ArticleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
