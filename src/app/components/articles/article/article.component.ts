import {Component, Input} from '@angular/core';
import {ArticleResponse} from "../../../models/article/article-response.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
 @Input() article!: ArticleResponse;

}
