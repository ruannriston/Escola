import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { Observable, Subscription, range  } from 'rxjs';
import { map, filter, switchMap, subscribeOn, toArray } from 'rxjs/operators';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() offset: number = 0;
  @Input() limit: number = 0;
  @Input() size: number = 0;
  @Input() range: number = 1;
  @Input() bloquear:boolean = false;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;
  bloquearObj:boolean = false;

  constructor() { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
    this.bloquearObj = this.bloquear;
  }

  getPages(offset: number, limit: number, size: number) {
     this.currentPage = this.getCurrentPage(offset, limit);
     this.totalPages = this.getTotalPages(limit, size);
     this.pages = range(-this.range, this.range * 2 + 1).pipe(
       map(offset => this.currentPage + offset),
       filter(page => this.isValidPageNumber(page, this.totalPages)),
       toArray());

  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  selectPage(page: number, event) {
    this.cancelEvent(event);
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}