import { Injectable } from '@angular/core';
import { Producer } from '../classes/producer';

@Injectable({
  providedIn: 'root'
})
export class FactoryProjectService {
  public interval: NodeJS.Timer | null = null;
  public producers: Producer[] = [];

  constructor() { }

  addProducer(producerData: any) {
    this.producers.push(new Producer(
      producerData.productionTime,
      producerData.productId,
      producerData.xPos,
      producerData.yPos,
      producerData.xOutputOffset,
      producerData.yOutputOffset,
      producerData.outputDirection));
  }

  public clearProducers(): void {
    this.stopAllProducers();
    this.producers = [];
  }

  public startInterval(): void {
    this.startAllProducers();
    this.interval = setInterval(() => {
      console.log(this.producers);
    }, 1000);
  }

  public stopInterval(): void {
    this.stopAllProducers();

    if (!this.interval) {
      console.error('no interval running');
      return;
    }

    clearInterval(this.interval);
  }


  private startAllProducers(): void {
    this.producers.forEach(producer => producer.startProduction());
  }

  private stopAllProducers(): void {
    this.producers.forEach(producer => producer.stopProduction());
  }
}
