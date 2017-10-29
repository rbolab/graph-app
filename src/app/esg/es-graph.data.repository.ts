import {Injectable} from '@angular/core';
import {GraphDataService} from '../data/graph.data.service';
import {GraphTransformerFactory} from './transformer/graph-transformer-factory';
import {GraphType} from './transformer/graph-type';
import {Observable} from 'rxjs/Observable';
import {Options} from 'highcharts';

@Injectable()
export class EsGraphDataRepository {

  constructor(private graphDataService: GraphDataService,
              private transformerFactory: GraphTransformerFactory) {
  }

  getGraphData(graphType: GraphType): Observable<Options> {
    return this.graphDataService.getPanoramaKPIs(graphType)
      .map(data => this.transformerFactory.get(graphType).transform(data));
  }

}
