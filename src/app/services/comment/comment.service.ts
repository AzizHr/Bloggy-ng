import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ArticleResponse} from "../../models/article/article-response.model";
import {HttpClient } from "@angular/common/http";
import { Comment } from "../../models/comment/comment.model";
import {CommentResponse} from "../../models/comment/comment-response.model";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  api: string = "http://localhost:8080/api/comments";

  constructor(private http: HttpClient) { }

  public create(comment: Comment): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(this.api, comment)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public update(comment: Comment): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(this.api, comment)
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

  public findById(id: string): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(`${this.api}/${id}`)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public findAll(): Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(this.api)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public findByArticle(article: string): Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(`${this.api}/f?article=${article}`)
      .pipe(
        catchError((error: any) => {
          console.log(error.error.message);
          throw error;
        })
      );
  }

}
