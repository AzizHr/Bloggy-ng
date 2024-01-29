import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import {AddArticleComponent} from "./components/articles/add-article/add-article.component";
import { CommentsComponent } from './components/articles/article-details/comments/comments.component';
import { CommentComponent } from './components/articles/article-details/comments/comment/comment.component';
import { TagsComponent } from './components/articles/article-details/tags/tags.component';
import { TagComponent } from './components/articles/article-details/tags/tag/tag.component';
import {DatePipe} from "@angular/common";
import {articleReducer} from "./store/article.reducers";
import {ArticleEffects} from "./store/article.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {authReducer} from "./store/auth.reducers";
import {AuthEffects} from "./store/auth.effects";
import {UpdateArticleComponent} from "./components/articles/update-article/update-article.component";
import {MyArticlesComponent} from "./components/auth/my-articles/my-articles.component";


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
    LoginComponent,
    RegisterComponent,
    UpdateArticleComponent,
    MyArticlesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot(),
      StoreModule.forFeature('articles', articleReducer),
      StoreModule.forFeature('auth', authReducer),
      EffectsModule.forFeature([ArticleEffects, AuthEffects]),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        // logOnly: environment.production, // Restrict extension to log-only mode
        autoPause: true
      }),
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
