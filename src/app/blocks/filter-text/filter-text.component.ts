import {Component, EventEmitter, Input, Output, OnInit, AfterViewInit} from '@angular/core';


@Component({
  selector: 'lyxor-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent implements AfterViewInit {
  @Output() changed: EventEmitter<string>;
  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }

  ngAfterViewInit(): void {

  }

}
