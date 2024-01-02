import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public create(article: any): string {
    return "create new article";
  }

  public update(article: any): string {
    return "update an existing article";
  }

  public remove(id: string): string {
    return "remove an existing article";
  }

  public findById(id: string): string {
    return "find a existing article by its id";
  }

  public findAll(): string {
    return "find all articles";
  }

  public findAllByAuthor(author: string): string {
    return "find all articles by their author";
  }

}
