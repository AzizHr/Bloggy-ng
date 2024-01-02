import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  public create(comment: any): string {
    return "create a new comment";
  }

  public update(comment: any): string {
    return "update an existing comment";
  }

  public remove(id: string): string {
    return "remove an existing comment";
  }

  public findAllByArticle(): string {
    return "find all comments by their article";
  }

}
