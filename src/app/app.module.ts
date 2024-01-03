import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/articles/new-article/new-article.component';
import { ArticleComponent } from './components/articles/article/article.component';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {articleReducer} from "./store/reducers/article/article.reducers";
import {ArticleEffects} from "./store/effects/article/article.effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    NewArticleComponent,
    ArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forRoot([ArticleEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
