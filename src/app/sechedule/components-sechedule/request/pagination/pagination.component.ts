import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number = 0;
  @Input() total: number = 0;
   @Input() limit: number = 20;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];
  displayedPages: number[] = [];

  ngOnInit(): void {
    this.updatePages();
  }

  updatePages(): void {
    const pagesCount = Math.ceil(this.total/this.limit);
    this.pages = this.range(0, pagesCount);
    this.updateDisplayedPages();
  }

  updateDisplayedPages(): void {
    const startPage = Math.max(0, this.currentPage - 1);
    const endPage = Math.min(this.pages.length, startPage + 2);
    debugger
    this.displayedPages = this.pages.slice(startPage , endPage);
  }

  changeCurrentPage(page: number): void {
    this.currentPage = page;
    this.changePage.emit(page);
    this.updateDisplayedPages();
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

}
