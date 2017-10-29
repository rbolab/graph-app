import {Options} from 'highcharts';
import {GraphTransformer} from './graph.transformer';

export class EsgRatingDistributionTransformer implements GraphTransformer {

  transform(apiResponse: any): Options {
    const options = {
      title: {text: 'RATING Distribution'},
      chart: {
        type: 'column'
      },
      xAxis: {
        categories: [...apiResponse.map(e => e.PartitionValue)]

      },
      plotOptions: {
        column: {
          colorByPoint: true
        }
      },
      series: [{
        data: [...apiResponse.map(e => e.Value)]
      }]
    };

    return options;
  }

}
