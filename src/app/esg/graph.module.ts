import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-highcharts';
import {EsgGraphComponent} from './esg-graph.component';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import {GraphDataService} from '../data/graph.data.service';
import {EsGraphDataRepository} from './es-graph.data.repository';
import {EsgGraphListComponent} from './esg-graph-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {GraphTransformerFactory} from './transformer/graph-transformer-factory';
import {ExceptionService} from '../blocks/exception.service/exception.service';


@NgModule({
  providers: [
    {
      provide: HighchartsStatic,
      useValue: highcharts
    },
    EsGraphDataRepository,
    GraphDataService,
    GraphTransformerFactory,
    ExceptionService
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports: [],
  declarations: [
    EsgGraphComponent,
    EsgGraphListComponent
  ],

})
export class GraphModule {
}
