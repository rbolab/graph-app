import {Options} from 'highcharts';
import {GraphTransformer} from './graph.transformer';

export class EsgRatingMementumTransformer  implements GraphTransformer {

  transform(apiResponse: any): Options {
    const options: Options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Rating Mementum'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ...apiResponse.map(e => [e.PartitionValue, e.Value * 100])
        ]
      }]
    };

    return options;
  }

}
