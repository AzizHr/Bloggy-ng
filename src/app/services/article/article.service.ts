import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Article } from "../../models/article.model";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) {}

  api: string = "http://localhost:8080/api/articles";

  public create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.api, article)
        .pipe(
            catchError((error: any) => {
              console.log(error.message);
              throw error;
            })
        );
  }

  public update(article: Article): Observable<Article> {
    return this.http.put<Article>(this.api, article)
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

  public getOne(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.api}/${id}`)
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }


  public getAll(page: number, size: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(this.api, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public searchByTitle(page: number, size: number, title: string): Observable<Article[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Article[]>(`${this.api}/search?title=${title}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error);
              throw error;
            })
        );
  }

  public searchByContent(page: number, size: number, content: string): Observable<Article[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Article[]>(`${this.api}/s?content=${content}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public filterByTag(page: number, size: number, tag: string): Observable<Article[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Article[]>(`${this.api}/filter?tag=${tag}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

  public getByAuthor(page: number, size: number, author: string): Observable<Article[]> {
    const params: HttpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Article[]>(`${this.api}/g?authorId=${author}`, { params })
        .pipe(
            catchError((error: any) => {
              console.log(error.error.message);
              throw error;
            })
        );
  }

}
