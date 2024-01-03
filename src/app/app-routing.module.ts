import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {NewArticleComponent} from "./components/articles/new-article/new-article.component";
import {ArticleComponent} from "./components/articles/article/article.component";

const routes: Routes = [
  // { path: "", redirectTo: "/articles", pathMatch: "full" },
  // { path: "articles", component: ArticlesComponent },
  // { path: "articles/new", component: NewArticleComponent },
  // { path: "articles/:id", component: ArticleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
