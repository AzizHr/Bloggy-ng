import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleDetailsComponent} from "./components/articles/article-details/article-details.component";
import {AddArticleComponent} from "./components/articles/add-article/add-article.component";

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "articles", component: ArticlesComponent },
  { path: "articles/add", component: AddArticleComponent },
  { path: "articles/:id", component: ArticleDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
