import {Component, Input} from '@angular/core';
import {Article} from "../../../models/article.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {

 @Input() article: Article;
 loggedInUser: any = null;

 constructor(private datePipe: DatePipe) {
   this.loggedInUser = this.getUser()
 }
  getFormattedDate(originalDate: any): string {
    const parsedDate = new Date(originalDate);
    return this.datePipe.transform(parsedDate, 'yyyy-MM-dd');
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  isArticleAuthor(articleAuthorId: any) {
   if(!this.loggedInUser) {
     return false;
   }
   return this.loggedInUser.id === articleAuthorId;
  }

}
