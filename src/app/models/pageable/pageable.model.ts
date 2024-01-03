import {Sort} from "./sort.model";

export interface Pageable {

  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;

}
