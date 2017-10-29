import {GRAPH_TYPES, GraphType} from './graph-type';
import {EsgRatingDistributionTransformer} from './esg-rating-distrubition.transformer';
import {EsgRatingMementumTransformer} from './esg-rating-mementum.transformer';
import {GraphTransformer} from './graph.transformer';
import {Injectable} from '@angular/core';

@Injectable()
export class GraphTransformerFactory {

  private managedTransformersMap = new Map();

  constructor() {
    this.managedTransformersMap.set(GRAPH_TYPES.RATING_DISTRIBUTION, new EsgRatingDistributionTransformer());
    this.managedTransformersMap.set(GRAPH_TYPES.RATING_MEMENTUM, new EsgRatingMementumTransformer());
    this.managedTransformersMap.set(GRAPH_TYPES.RATING_UNKNOWN, new EsgRatingMementumTransformer());
  }

  get(graphType: GraphType): GraphTransformer {
    if (this.managedTransformersMap.has(graphType)) {
      return this.managedTransformersMap.get(graphType);
    } else {
      throw new Error('There is no transformer matchs with graphType : ' + graphType);
    }

  }

}
