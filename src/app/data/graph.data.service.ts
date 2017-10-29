import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GraphType, URLS} from '../esg/transformer/graph-type';
import {ExceptionService} from '../blocks/exception.service/exception.service';

@Injectable()
export class GraphDataService {

  constructor(private http: HttpClient,
              private exceptionService: ExceptionService) {}

  getPanoramaKPIs(graphType: GraphType) {
    return this.http.get(URLS[graphType])
      .map((response: any) => response.data)
      .catch(this.exceptionService.catchBadResponse);
  }
}
