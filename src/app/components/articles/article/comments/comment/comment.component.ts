import {Component, Input} from '@angular/core';
import {CommentResponse} from "../../../../../models/comment/comment-response.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment!: CommentResponse;

}
