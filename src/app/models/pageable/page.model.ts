import {ArticleResponse} from "../article/article-response.model";
import {Pageable} from "./pageable.model";
import {Sort} from "./sort.model";

export interface Page {

  content: ArticleResponse[],
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;

}
