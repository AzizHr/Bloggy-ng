import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {ArticleDetailsComponent} from "./components/articles/article-details/article-details.component";
import {AddArticleComponent} from "./components/articles/add-article/add-article.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {UpdateArticleComponent} from "./components/articles/update-article/update-article.component";
import {MyArticlesComponent} from "./components/auth/my-articles/my-articles.component";

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "articles", component: ArticlesComponent },
  { path: "my-articles", component: MyArticlesComponent },
  { path: "articles/add", component: AddArticleComponent },
  { path: "articles/update/:id", component: UpdateArticleComponent },
  { path: "articles/:id", component: ArticleDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
