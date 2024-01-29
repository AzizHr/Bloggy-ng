import {Component, Input} from '@angular/core';
import {Comment} from "../../../../../models/comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment: Comment;

  hasAuthor(comment: any) {
    return comment.author ? comment.author.firstname + ' ' + comment.author.lastname : 'Anonymous user';
  }

}
