import {Pageable} from "./pageable.model";
import {Sort} from "./sort.model";
import {Article} from "../article.model";

export interface Page {

  content: Article[],
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
