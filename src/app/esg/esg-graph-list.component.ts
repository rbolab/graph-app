import {Component, OnInit} from '@angular/core';
import {GRAPH_TYPES, GraphType} from './transformer/graph-type';
import {EsGraphDataRepository} from './es-graph.data.repository';
import {Observable} from 'rxjs/Observable';
import {Options} from 'highcharts';

@Component({
  selector: 'lyxor-esg-graph-list',
  template: `
    <lyxor-esg-graph *ngFor="let graphOptions of graphsOptions" [options]=graphOptions></lyxor-esg-graph>
  `
})
export class EsgGraphListComponent implements OnInit {

  graphsOptions: Options[];

  constructor(private esGraphDataRepository: EsGraphDataRepository) {
  }

  ngOnInit() {
    Observable.forkJoin(
      Object.keys(GRAPH_TYPES).map(type => this.esGraphDataRepository.getGraphData(type))
    ).subscribe(
      next => this.graphsOptions = next
    );
  }

}
