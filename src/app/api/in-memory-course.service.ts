import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';


export class InMemoryCourseService implements InMemoryDbService {
  // uncomment this function to force an error

  // protected get(reqInfo: RequestInfo) {
  //   return reqInfo.utils.createResponse$(() => {
  //     const options: ResponseOptions = {
  //       body: {},
  //       status: STATUS.UNAUTHORIZED
  //     };
  //     return this.finishOptions(options, reqInfo);
  //   });
  // }
  //
  // private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
  //   options.statusText = getStatusText(options.status);
  //   options.headers = headers;
  //   options.url = url;
  //   return options;
  // }

  /**
   * Creates fresh copy of data each time.
   * Safe for consuming service to morph arrays and objects.
   */
  createDb() {
    let courses = [
      {
        "id": 1,
        "name": "Building Apps with React",
        "topic": "ReactJS"
      },
      {
        "id": 2,
        "name": "Building Apps with Angular",
        "topic": "AngularJS"
      },
      {
        "id": 3,
        "name": "Building Apps with Angular and Redux",
        "topic": "Angular and Redux"
      }
    ];

    let ratingMementum = [
      {
        "Key": "Rating_Distribution",
        "Partition": "",
        "PartitionValue": "Not Rated",
        "Value": 0.05
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "CCC",
        "Value": 0.2
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "BB",
        "Value": 0.15
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "B",
        "Value": 0.05
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "A",
        "Value": 0.1
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "AA",
        "Value": 0.05
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "AAA",
        "Value": 0.4
      }
    ];

    let ratingDistribution = [
      {
        "Key": "Rating_Distribution",
        "Partition": "",
        "PartitionValue": "Not Rated",
        "Value": 0.05
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "CCC",
        "Value": 0.3
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "BB",
        "Value": 0.25
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "B",
        "Value": 0.15
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "A",
        "Value": 0.1
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "AA",
        "Value": 0.05
      },
      {
        "Key": "Rating_Distribution",
        "Partition": "Rating",
        "PartitionValue": "AAA",
        "Value": 0.1
      }
    ];

    return {
      courses,
      ratingDistribution,
      ratingMementum
    };
  }
}
