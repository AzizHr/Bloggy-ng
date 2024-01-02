import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Article } from "../../models/article/article.model";
import { ArticleResponse } from "../../models/article/article-response.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/articles";

  public create(article: Article): Observable<ArticleResponse> {
    return this.http.post<ArticleResponse>(this.api, article)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public update(article: Article): Observable<ArticleResponse> {
    return this.http.post<ArticleResponse>(this.api, article)
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

  public findById(id: string): Observable<ArticleResponse> {
    return this.http.get<ArticleResponse>(`${this.api}/${id}`)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public findAll(page: number, size: number): Observable<ArticleResponse[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<ArticleResponse[]>(this.api, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public searchByTitle(page: number, size: number, title: string): Observable<ArticleResponse[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<ArticleResponse[]>(`${this.api}/search?title=${title}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public searchByContent(page: number, size: number, content: string): Observable<ArticleResponse[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<ArticleResponse[]>(`${this.api}/s?content=${content}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public filterByTag(page: number, size: number, tag: string): Observable<ArticleResponse[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<ArticleResponse[]>(`${this.api}/filter?tag=${tag}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public findAllByAuthor(page: number, size: number, author: string): string {
    return "find all articles by their author";
  }

}
