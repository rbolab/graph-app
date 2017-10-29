import {Component, Input} from '@angular/core';
import {Options} from 'highcharts';

@Component({
  selector: 'lyxor-esg-graph',
  templateUrl: './esg-graph.component.html',
})
export class EsgGraphComponent {

  @Input()
  options: Options;

  constructor() {
  }

}
