import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient } from "@angular/common/http";
import { Comment } from "../../models/comment.model";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  api: string = "http://localhost:8080/api/comments";

  constructor(private http: HttpClient) { }

  public create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.api, comment)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public update(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.api, comment)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public remove(id: string): Observable<string> {
    return this.http.delete<string>(`${this.api}/${id}`)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

}
