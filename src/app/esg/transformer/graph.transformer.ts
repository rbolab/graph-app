import {Options} from 'highcharts';


export interface GraphTransformer {

  transform(apiResponse: any): Options;
}
